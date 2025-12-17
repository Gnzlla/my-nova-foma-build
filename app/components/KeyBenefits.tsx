"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KeyBenefitsSection() {
  const [isMouseOver, setMouseOver] = useState(false);

  useGSAP(() => {
    // Starts where animation should trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-container",
        start: "top top",
      },
    });

    // Formation of animation
    tl.fromTo(
      ".circular-img",
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, stagger: { each: 0.1, from: "start" }, y: -10 }
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
      <section className="benefits-container h-screen w-full">
        <div className="inside-benefits w-9/10">
          <h2 className="leading-none text-4xl font-bold">
            KEY BENEFITS OF <br /> NOVA FOMA
          </h2>
          <div className="benefit grid grid-cols-2 gap-5 text-white lg:grid-cols-4">
            <div
              style={{
                opacity: isMouseOver ? 1.0 : 0.5,
                transition: "opacity 0.2s ease-out",
              }}
              className="circular-img lg:gap-6"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img src="../skin-rejuventaion.jpg" alt="skin-rejuvenation-img" />
              <div>
                <h3>Skin Rejuvenation</h3>
                <h4>피부 회복</h4>
              </div>
            </div>
            <div className="circular-img lg:gap-6 ">
              <img src="../elasticity.jpg" alt="elasticity image" />
              <div>
                <h3>Elasticity</h3>
                <h4>홍조 및 염증 완화</h4>
              </div>
            </div>
            <div className="circular-img lg:gap-6">
              <img src="../collagen.jpg" alt="collagen image" />
              <div>
                <h3>Collagen Boost</h3>
                <h4>콜라겐 촉진</h4>
              </div>
            </div>
            <div className="circular-img lg:gap-6">
              <img
                src="../cellular-vitality.jpg"
                alt="cellular vitality image"
              />
              <div>
                <h3>Cellular Vitality</h3>
                <h4>세포 활력 충전</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
