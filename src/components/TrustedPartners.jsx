import {
  FaClipboardList,
  FaHandshake,
  FaBullhorn,
  FaBookOpen,
} from "react-icons/fa";

const TrustedPartners = () => {
  const items = [
    {
      icon: <FaClipboardList className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Custom Setup",
      description: "Easy onboarding built exclusively for your platform",
    },
    {
      icon: <FaHandshake className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Cobranding",
      description: "Brand positioning in product and communications",
    },
    {
      icon: <FaBullhorn className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Comms",
      description:
        "Dedicated communications to help your people every step of the way",
    },
    {
      icon: <FaBookOpen className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Content",
      description:
        "Financial education to make complicated decisions a little easier",
    },
  ];

  return (
    <div className="bg-[#2a2a2a]   p-8">
      <section className="bg-[#1b1b1b] text-white py-12 px-6 rounded-2xl max-w-7xl mx-auto m-8 shadow-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 pl-3 md:pl-6">
          Trusted by independents, <br /> trusted by partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-12">
          {items.map((item, index) => (
            <div key={index} className="flex-col items-start ">
              <div className=" p-3 rounded-md ">{item.icon}</div>
              <div className="max-w-full md:max-w-[80%]">
                <p className="font-semibold text-xl md:2xl">
                  {item.title}.
                  <span className=" text-gray-400 text-lg">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedPartners;
