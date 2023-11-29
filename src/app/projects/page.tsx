import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Travel Planner",
      description:
        "Travel Planner is a web application where you can plan your trip. You can add your trip details like hostals and dates.",
      tags: ["Typescript", "Nextjs", "Mui", "Clerk", "mySQL"],
      link: "https://github.com/Night3y3/TLP",
    },
    {
      title: "Shark Game",
      description:
        "It is javascript based game where you play as a shark. Made it a lone time ago to get accustomed with oops in javascript.",
      tags: ["Javascript", "css", "html"],
      link: "https://github.com/Night3y3/Shark-game-js",
    },
    {
      title: "Spotify Clone",
      description:
        "It is a Spotify Clone were you can upload your own music and listen to them. You can make your liked playlist and also can buy premium subscription.",
      tags: ["Next 13", "Typescript", "Tailwindcss", "Supabase", "Stripe"],
      link: "https://github.com/Night3y3/spotify-clone",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I&apos;m obsessed with creating cool projects.
          I exhibit my creative and technological efforts, which reflect my path of development, problem-solving, and continuous learning. Explore my work to see my passion and knowledge in action.
        </p>
      </div>

      <div className=" w-full flex flex-row gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
