import { cn } from "@/lib/utils";
import {
    Briefcase,
    Home,
    Layers,
    Lightbulb,
    PackagePlus,
    Mail,
    User2,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";

export default function NavBarV2() {
    const links = [
        {
            title: "Home",
            icon: (
                <Home />
            ),
            href: "/",
        },

        {
            title: "about",
            icon: (
                <User2 />
            ),
            href: "/about",
        },
        {
            title: "skills",
            icon: (
                <Lightbulb />
            ),
            href: "/skills",
        },
        // {
        //     title: "projects",
        //     icon: (
        //         <Layers />
        //     ),
        //     href: "/projects",
        // },
        {
            title: "work",
            icon: (
                <Briefcase />
            ),
            href: "/education",
        },

        {
            title: "contact",
            icon: (
                <Mail />
            ),
            href: "/contact",
        },
    ];

    return (
        <div className={`h-fit w-fit fixed bottom-5 md:right-0 md:left-0 right-4  m-auto border  rounded-full z-10 bg-transparent  cursor-none`}>
            <FloatingDock
                desktopClassName=" cursor-none"
                mobileClassName=" " // only for demo, remove for production
                items={links}
            />
        </div>
    );
}