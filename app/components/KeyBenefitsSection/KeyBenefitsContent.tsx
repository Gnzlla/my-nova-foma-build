import React from "react";

type keyProps = {
  imgSrc: string;
  title: string;
  subheader: string;
};

export default function KeyBenefitsContent({
  imgSrc,
  title,
  subheader,
}: keyProps) {
  return (
    <div className="group lg:gap-6 circular-img">
      <img
        src={imgSrc}
        alt={title}
        className="opacity-50 group-hover:opacity-100 transition-opacity duration-150"
      />
      <div className="opacity-50 group-hover:opacity-100">
        <h3>{title}</h3>
        <h4>{subheader}</h4>
      </div>
    </div>
  );
}
