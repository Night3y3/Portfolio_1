
import React from "react";
import SkillCard from "./ui/skillCard";


interface SkillsFooterProps {
  items: Array<{ alt: string; img: any }>
}

const SkillsFooter: React.FC<SkillsFooterProps> = ({ items }) => {

  return (
    <>
      {items && items.map((val, indx) => {
        return (
          <div className="p-4 box-border" key={indx}>
            <SkillCard img={val?.img} name={val?.alt} />
          </div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
