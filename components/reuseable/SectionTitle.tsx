import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center max-w-3xl px-4 py-2 gap-4 w-full mx-auto">
      <div className="w-full h-[1px] bg-secondary"></div>
      <span className="text-4xl font-display text-secondary font-semibold w-full text-center">
        {title}
      </span>
      <div className="w-full h-[1px] bg-secondary"></div>
    </div>
  );
};

export default SectionTitle;
