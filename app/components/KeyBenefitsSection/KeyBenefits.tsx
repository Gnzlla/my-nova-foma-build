"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KeyBenefitsContent from "./KeyBenefitsContent";
import { KeyRows } from "../SectionData";
gsap.registerPlugin(ScrollTrigger);

export default function KeyBenefitsSection() {
  const [isMouseOver, setMouseOver] = useState(false);

  useGSAP(() => {
    // Starts where animation should trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-container",
        start: "top 40%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Formation of animation
    tl.fromTo(
      ".circular-img",
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, stagger: { each: 0.3, from: "start" }, y: -10 }
    );
  });
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <>
      <section className="py-19 md:py-20 benefits-container">
        <div className="w-9/10 inside-benefits">
          <h2 className="font-bold text-4xl leading-none">
            KEY BENEFITS OF <br /> NOVA FOMA
          </h2>
          <div className="gap-5 grid grid-cols-2 lg:grid-cols-4 text-white benefit">
            {KeyRows.map((rows, i) => (
              <KeyBenefitsContent
                key={i}
                imgSrc={rows.imgSrc}
                title={rows.title}
                subheader={rows.subheader}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
