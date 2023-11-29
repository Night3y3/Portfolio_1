import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            September 2021 - 2025
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Science and Engineering, <br /> Institue of Engineering and Management,
              Kolkata
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently Studying Bachelor of Technology specilised with Artifical Intelligence and Machine Learning form Institue of Engineering and Management Kolkata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
