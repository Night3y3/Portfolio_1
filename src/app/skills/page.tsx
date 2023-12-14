import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
// import html from '../../../public/html.png'
import csharp from '../../../public/c-sharp.png'
import zustand from '../../../public/zustand.png'
import clerk from '../../../public/clerk.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import next from '../../../public/nextjs.jpeg'
import java from '../../../public/java.png'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import stripe from '../../../public/stripe.png'
import supabase from '../../../public/supabase.png'
import gsap from '../../../public/gsap.png'
import figma from '../../../public/figma.png'
import mongodb from '../../../public/mongodb.png'
import node from '../../../public/node.png'

const skillPage = () => {

  const language = [
    // { alt: "html", img: html },
    { alt: "charp", img: csharp },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "java", img: java },
  ]
  const framework = [
    { alt: "react", img: react },
    { alt: "next", img: next },
    { alt: "zustand", img: zustand },
    { alt: "tailwind", img: tailwind },
    { alt: "clerk", img: clerk },
    { alt: "github", img: github },
    { alt: "stripe", img: stripe },
    { alt: "supabase", img: supabase },
    { alt: "gsap", img: gsap },
    { alt: "figma", img: figma },
    { alt: "mongodb", img: mongodb },
    { alt: "node", img: node },
  ]


  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          Currently i am a fresher and i have a solid understand of HTML5, CSS3, JS, TS and React, including
          responsive design principles. I specialize in building web
          applications and sites using Javascript, Typescript, React, Nextjs &
          Node.
        </p>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit justify-between items-center grid grid-flow-col grid-rows-3 ">
            <SkillsFooter items={framework} />
          </div>
          {/* <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework.slice(4, 8)} />
          </div>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework.slice(8,)} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default skillPage;
