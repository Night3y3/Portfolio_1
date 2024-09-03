import { ScrollText } from "lucide-react";
import dynamic from "next/dynamic";

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const siteConfig = {
  name: "Sabuj Ghosh",
  description: "I am a Passionate Software Developer",
  ogImage: "https://sabujghosh.vercel.app/og-image.png",
  url: "https://sabujghosh.vercel.app",
}

const HeroTextsCSR = dynamic(() => import("@/components/HeroTexts"), {
  ssr: false,
});

const HeroImageCSR = dynamic(() => import("@/components/HeroImage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTextsCSR />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center"
        >


          <a href="https://docs.google.com/document/d/1fBpTfqntwHNI9yBlSMCba-KXWyEEbOXQz45-zyO5P_A/edit?usp=sharing" className="relative inline-block text-lg group cursor-none">
            <span
              className="relative z-10 block py-[0.9vw] px-[2vw] overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border border-gray-300 rounded-full group-hover:text-white"
            >
              {/* <span
                className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"
              ></span> */}
              <span
                className="absolute left-0 w-96 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-16 bg-gray-900 group-hover:-rotate-180 ease"
              ></span>
              <span className="relative text-xl font-bold tracking-[-1px] flex"
              >
                <ScrollText className=" mr-1 mt-1" />
                View Resume</span
              >
            </span>
          </a>



        </HoverBorderGradient>
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[47%] relative block max-lg:hidden">

        {/* IMAGE  */}
        <HeroImageCSR />
      </div>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
