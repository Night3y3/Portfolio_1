import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, Codepen } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://twitter.com/sabujghosh21", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/sabujghosh/", icon: <Linkedin /> },
    { name: "Codepen", link: "https://codepen.io/sabujgh55659975", icon: <Codepen /> },
    { name: "Facebook", link: "https://www.facebook.com/sabuj.ghosh.710", icon: <Facebook /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
