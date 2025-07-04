import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Building,
  AlertCircle,
} from "lucide-react";

// Skeleton Loading Component
const JobSkeleton = () => (
  <div className="animate-pulse realistic-card p-6 rounded-xl border border-gray-800 bg-gray-900/50">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1">
        <div className="h-6 bg-gray-700 rounded-md mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded-md mb-1 w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded-md w-1/3"></div>
      </div>
      <div className="w-5 h-5 bg-gray-700 rounded"></div>
    </div>
    <div className="h-10 bg-gray-700 rounded-md"></div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }) => (
  <div className="col-span-full text-center py-12">
    <div className="realistic-card p-8 rounded-xl border border-red-500/50 bg-red-900/20 max-w-md mx-auto">
      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-red-400">
        Error Loading Jobs
      </h3>
      <p className="text-gray-400 mb-4">{message}</p>
    </div>
  </div>
);

// Empty State Component
const EmptyState = ({ selectedDepartment, departments }) => {
  const selectedDeptObj = departments.find(dept => dept.value === selectedDepartment);
  const displayName = selectedDeptObj?.label || selectedDepartment;
  
  return (
    <div className="col-span-full text-center py-12">
      <div className="realistic-card p-8 rounded-xl border border-gray-800 bg-gray-900/50 max-w-md mx-auto">
        <Briefcase className="h-12 w-12 text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2 text-gray-300">
          {selectedDepartment === "All Departments" 
            ? "No Open Positions" 
            : `No Positions in ${displayName}`}
        </h3>
        <p className="text-gray-400 mb-4">
          {selectedDepartment === "All Departments"
            ? "We don't have any open positions at the moment, but we're always looking for talented individuals."
            : `We don't have any open positions in ${displayName} at the moment. Try checking other departments.`}
        </p>
      </div>
    </div>
  );
};

function JobPosting() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");

  const departments = [
    { label: "All Departments", value: "All Departments" },
    { label: "IT", value: "Technical Department" },
    { label: "Human Resources", value: "HR Department" },
    { label: "Finance", value: "Finance and Accounting Department" },
    { label: "Research", value: "Research Department" },
    { label: "Product Design", value: "Product Designing Department" },
    { label: "Others", value: "Others" }
  ];

  useEffect(() => {
    const getOpenJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("job")
          .select("*")
          .eq("status", "active");
        if (error) {
          throw error;
        }
        setJobs(data || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(
          err.message || "Failed to load job openings. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    getOpenJobs();
  }, []);

  // Filter jobs based on selected department
  useEffect(() => {
    if (selectedDepartment === "All Departments") {
      setFilteredJobs(jobs);
    } else if (selectedDepartment === "Others") {
      // For "Others", show jobs that don't match any of the main departments
      const mainDepartments = [
        "Technical Department",
        "HR Department", 
        "Finance and Accounting Department",
        "Research Department",
        "Product Designing Department"
      ];
      const filtered = jobs.filter(job => !mainDepartments.includes(job.department));
      setFilteredJobs(filtered);
    } else {
      const filtered = jobs.filter(job => job.department === selectedDepartment);
      setFilteredJobs(filtered);
    }
  }, [jobs, selectedDepartment]);

  const handleDepartmentFilter = (departmentValue) => {
    setSelectedDepartment(departmentValue);
  };

  return (
    <section
      id="open-positions"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          Open <span className="text-[#18cb96]">Positions</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
          Join our team of innovators and make an impact in the tech world
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {departments.map((department) => (
            <button
              key={department.value}
              onClick={() => handleDepartmentFilter(department.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedDepartment === department.value
                  ? "bg-[#18cb96] text-black font-medium"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {department.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Show skeleton loading
            Array.from({ length: 6 }).map((_, index) => (
              <JobSkeleton key={`skeleton-${index}`} />
            ))
          ) : error ? (
            // Show error state
            <ErrorDisplay message={error} />
          ) : filteredJobs.length === 0 ? (
            // Show empty state
            <EmptyState selectedDepartment={selectedDepartment} departments={departments} />
          ) : (
            // Show filtered jobs
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group realistic-card p-6 rounded-xl border border-gray-800 hover:border-[#18cb96]/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-400 flex items-center gap-2 mb-1">
                      <span>
                        <Building className="h-5 w-5 text-[#18cb96]" />
                      </span>
                      <span>{job.department}</span>
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <span>
                        <MapPin className="h-5 w-5 text-[#18cb96]" />
                      </span>
                      <span>
                        Location:{" "}
                        {job.jobType.charAt(0).toUpperCase() +
                          job.jobType.slice(1)}
                      </span>
                    </p>
                  </div>
                  <Briefcase className="h-5 w-5 text-[#18cb96]" />
                </div>
                <Link
                  to={`/careers/${job.id}`}
                  className="w-full bg-transparent hover:bg-[#18cb96]/10 text-[#18cb96] border border-[#18cb96] font-medium py-2 px-4 rounded-md transition-all duration-300 group-hover:bg-[#18cb96] group-hover:text-black button-3d text-center block"
                >
                  View Details
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default JobPosting;