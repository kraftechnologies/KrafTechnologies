import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import {
  Briefcase,
  MapPin,
  Building,
  Calendar,
  ArrowLeft,
  AlertCircle,
  Clock
} from "lucide-react";

// Loading Skeleton Component
const JobDetailsSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="h-10 w-32 bg-gray-700 rounded-md mb-8"></div>
        
        {/* Header skeleton */}
        <div className="realistic-card p-8 rounded-xl border border-gray-800 bg-gray-900/50 mb-8">
          <div className="h-8 bg-gray-700 rounded-md mb-4 w-3/4"></div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="h-6 bg-gray-700 rounded-md w-32"></div>
            <div className="h-6 bg-gray-700 rounded-md w-24"></div>
            <div className="h-6 bg-gray-700 rounded-md w-36"></div>
          </div>
          <div className="h-12 bg-gray-700 rounded-md w-40"></div>
        </div>
        
        {/* Description skeleton */}
        <div className="realistic-card p-8 rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="h-6 bg-gray-700 rounded-md mb-4 w-48"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded-md w-full"></div>
            <div className="h-4 bg-gray-700 rounded-md w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded-md w-4/5"></div>
            <div className="h-4 bg-gray-700 rounded-md w-full"></div>
            <div className="h-4 bg-gray-700 rounded-md w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Error Component
const ErrorDisplay = ({ message }) => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <Link
        to="/careers"
        className="inline-flex items-center gap-2 text-[#18cb96] hover:text-[#15b085] transition-colors mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Careers
      </Link>
      
      <div className="text-center py-12">
        <div className="realistic-card p-8 rounded-xl border border-red-500/50 bg-red-900/20 max-w-md mx-auto">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-red-400">
            Error Loading Job Details
          </h3>
          <p className="text-gray-400 mb-4">{message}</p>
          <Link
            to="/careers"
            className="inline-block bg-[#18cb96] text-black px-6 py-2 rounded-md font-medium hover:bg-[#15b085] transition-colors"
          >
            Back to All Jobs
          </Link>
        </div>
      </div>
    </div>
  </div>
);

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from("job")
          .select("*")
          .eq("id", id)
          .single(); // Use .single() since we're expecting one record
        
        if (error) {
          throw error;
        }
        
        setJob(data);
      } catch (err) {
        console.error("Error fetching job:", err);
        setError(err.message || "Failed to load job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      getJob();
    }
  }, [id]); // Add dependency array with id

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format job type
  const formatJobType = (jobType) => {
    if (!jobType) return "Not specified";
    return jobType.charAt(0).toUpperCase() + jobType.slice(1);
  };

  if (loading) {
    return <JobDetailsSkeleton />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (!job) {
    return (
      <ErrorDisplay message="Job not found. It may have been removed or the link is invalid." />
    );
  }

  const encodedPos = btoa(job.title)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-[#18cb96] hover:text-[#15b085] transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="realistic-card p-8 rounded-xl border border-gray-800 bg-gray-900/50 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {job.title}
          </h1>
          
          {/* Job Meta Information */}
          <div className="flex flex-wrap gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-[#18cb96]" />
              <span>{job.department}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#18cb96]" />
              <span>{formatJobType(job.jobType)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#18cb96]" />
              <span>Posted: {formatDate(job.updatedAt)}</span>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="realistic-card p-8 rounded-xl border border-gray-800 bg-gray-900/50">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-[#18cb96]" />
            Job Description
          </h2>
          
          <div className="text-gray-300 leading-relaxed">
            {job.description ? (
              <div className="whitespace-pre-wrap">
                {job.description}
              </div>
            ) : (
              <p className="text-gray-400 italic">
                No description available for this position.
              </p>
            )}
          </div>
        </div>

        {/* Additional Job Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="realistic-card p-6 rounded-xl border border-gray-800 bg-gray-900/50">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#18cb96]" />
              Employment Type
            </h3>
            <p className="text-gray-300">{formatJobType(job.jobType)}</p>
          </div>
          
          <div className="realistic-card p-6 rounded-xl border border-gray-800 bg-gray-900/50">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <Building className="h-5 w-5 text-[#18cb96]" />
              Department
            </h3>
            <p className="text-gray-300">{job.department}</p>
          </div>
        </div>

        {/* Bottom Apply Button */}
        <div className="text-center mt-12">
          <button 
          className="bg-[#18cb96] hover:bg-[#15b085] text-black font-medium py-4 px-12 rounded-md transition-all duration-300 transform hover:scale-105"
          onClick={() => navigate(`/careers/registration?pos=${encodedPos}`)}
          >
            Apply for this Position
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;