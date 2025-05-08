import {
  FaClipboardList,
  FaHandshake,
  FaBullhorn,
  FaBookOpen,
} from "react-icons/fa";

const TrustedPartners = () => {
  const items = [
    {
      icon: <FaClipboardList className="text-2xl text-white" />,
      title: "Custom Setup",
      description: "Easy onboarding built exclusively for your platform",
    },
    {
      icon: <FaHandshake className="text-2xl text-white" />,
      title: "Cobranding",
      description: "Brand positioning in product and communications",
    },
    {
      icon: <FaBullhorn className="text-2xl text-white" />,
      title: "Comms",
      description:
        "Dedicated communications to help your people every step of the way",
    },
    {
      icon: <FaBookOpen className="text-2xl text-white" />,
      title: "Content",
      description:
        "Financial education to make complicated decisions a little easier",
    },
  ];

  return (
    <div className="bg-[#2a2a2a] py-10">
      <section className="bg-[#1b1b1b] text-white py-12 px-6 rounded-2xl max-w-7xl mx-auto m-8 shadow-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          Trusted by independents, <br /> trusted by partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-gray-700 p-3 rounded-md">{item.icon}</div>
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedPartners;
