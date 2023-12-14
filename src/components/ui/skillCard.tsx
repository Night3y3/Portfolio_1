"use client";
import Image from "next/image";
import React from "react";

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
            <Image
                src={img}
                alt={name}
                className='rounded-full w-auto max-h-20'
                onMouseEnter={() => setCursor('typescropt-cursor')}
                onMouseLeave={() => setCursor('default')}
            />
        </>
    );
};

export default SkillCard;