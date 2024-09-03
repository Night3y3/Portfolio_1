"use client";
import Image from "next/image";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillCardProps {
    img: any;
    name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ img, name }) => {
    const setCursor = (cursorType: string) => {
        document.body.style.cursor = cursorType;
    };

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image
                            src={img}
                            alt={name}
                            className='rounded-full w-auto max-h-20'
                            onMouseEnter={() => setCursor('typescript-cursor')}
                            onMouseLeave={() => setCursor('default')}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </>
    );
};

export default SkillCard;


{/* <TooltipProvider key={itm.name}>
    <Tooltip>
        <TooltipTrigger asChild>
            <Link href={itm.link}
                className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" })
                )}
            >
                {itm.icon}
            </Link>
        </TooltipTrigger>
        <TooltipContent>
            <p>{itm.name}</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider> */}