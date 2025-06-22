import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import dynamic from "next/dynamic";

const DemoXadeLinksCS = dynamic(() => import("@/components/DemoXadeLinks"), {
  ssr: false,
});

const educationPage = () => {
  const experiences = [
    {
      date: "September 2021 - 2025",
      title: "College",
      subtitle: "Bachelor of Technology",
      location: "Kolkata",
      description:
        "I am currently studying Bachelor of Technology specialized in Artificial Intelligence and Machine Learning.",
    },
    {
      date: "May 2024 - Aug 2024",
      title: "Xade Finance",
      subtitle: "Ex-SDE Intern",
      location: "Remote",
      customComponent: <DemoXadeLinksCS />,
    },
    {
      date: "Sept 2024 - Nov 2024",
      title: "Caravel Labs",
      subtitle: "Consulting Engineer Intern",
      location: "Washington, Remote",
      description:
        "Worked with the China Government on a legacy product used in over 500 schools.",
    },
    {
      date: "Feb 2025 - June 2025",
      title: "Inddev",
      subtitle: "Full Stack Intern",
      location: "Gurgaon",
      description:
        "Worked on a B2C app to connect astrologers with users via chat, phone call, and video call.",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-xl bg-white border border-gray-300 shadow-xl dark:bg-[#0d0d0d] dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <Badge className="gap-2 px-4 py-2 text-base bg-blue-600 text-white">
          <Briefcase className="h-5 w-5" />
          Work
        </Badge>
      </div>

      <Heading>My Work</Heading>

      <div className="mt-6 flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-start relative"
          >
            {/* Timeline line */}
            <div className="col-span-1 flex justify-center relative">
              <div className="w-1 h-full bg-gray-300 dark:bg-gray-700 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10 mt-1"></div>
            </div>

            {/* Date */}
            <div className="col-span-11 sm:col-span-3 font-medium text-sm text-gray-600 dark:text-gray-400 pt-1">
              {exp.date}
            </div>

            {/* Content */}
            <div className="col-span-12 sm:col-span-8 border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl sm:text-2xl font-semibold font-rubik text-gray-900 dark:text-white leading-snug">
                {exp.title},{" "}
                <span className="font-normal">{exp.subtitle}</span>
                <br />
                <span className="text-sm text-gray-500">{exp.location}</span>
              </h3>
              {exp.description && (
                <p className="mt-2 text-base text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                  {exp.description}
                </p>
              )}
              {exp.customComponent && <div className="mt-4">{exp.customComponent}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default educationPage;
