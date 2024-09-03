import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import { Briefcase } from "lucide-react";
import xadepic from "../../../public/xade-trade-ui-pic.png"
import tradingview from "../../../public/trading-view.png"

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
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I worked on blockchain trading platform using {" "}<LinkPreview url="https://www.tradingview.com/" isStatic imageSrc={tradingview.src} className=" font-bold hover:text-blue-500 hover:underline" width={300} height={250}>Trading-View Charts</LinkPreview>{" "} and wallets you can check it out <LinkPreview url="https://trade.xade.finance" isStatic imageSrc={xadepic.src} className=" font-bold hover:text-blue-500 hover:underline" width={300} height={250}>here</LinkPreview>{" "}.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default educationPage;
