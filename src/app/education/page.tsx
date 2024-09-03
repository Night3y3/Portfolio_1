import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import dynamic from "next/dynamic";
const DemoXadeLinksCS = dynamic(() => import("@/components/DemoXadeLinks"), {
  ssr: false,
});

const educationPage = () => {
  return (
    <div className=" h-1/2 w-full absolute flex flex-col items-start justify-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col overflow-hidden">
        <div className="w-full h-fit flex overflow-hidden">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            September 2021 - 2025
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              College, <br /> Bachelor of Technology, <br />
              Kolkata
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently Studying Bachelor of Technology specilised with Artifical Intelligence and Machine Learning.
            </p>
          </div>

        </div>
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            May 2024 - Aug 2024
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Xade Finance, <br /> Ex-SDE Intern <br />
              Remote
            </div>
            <DemoXadeLinksCS />
          </div>

        </div>
      </div>

    </div>
  );
};

export default educationPage;
