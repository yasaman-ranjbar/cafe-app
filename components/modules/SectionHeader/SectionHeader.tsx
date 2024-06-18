import React from 'react'
import { SectionHeaderProps } from './SectionHeader.types';


const SectionHeader: React.FC<SectionHeaderProps> = ({ title, header }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <div className="w-[0.2rem] h-24 bg-yellow mb-2" />
      <h4 className="tracking-widest text-yellow text-[1.5rem] uppercase font-semibold">
        {title}
      </h4>
      <h1 className=" text-primary text-[3.5rem] font-bold">{header}</h1>
    </div>
  );
};

export default SectionHeader