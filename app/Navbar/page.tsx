"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const NavigationBar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    if (!navRef.current) return;
    const showAnim = gsap
      .from(navRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.out",
        paused: true,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <>
      <nav
        ref={navRef}
        className="navigation-container p-5 pl-7 flex flex-row justify-between"
      >
        <div>
          <img src="../nova-foma-logo.webp" className="w-50" />
        </div>
        <button className="nav-btn text-xs font-semibold shadow-md">
          도입 문의
        </button>
      </nav>
    </>
  );
};

export default NavigationBar;
