"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const headerRef2 = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (
      !containerRef.current ||
      !imgRef.current ||
      !headerRef.current ||
      !headerRef2.current
    )
      return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150",
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.fromTo(
      imgRef.current,
      { scale: 0.4 },
      { scale: 1, ease: "none", borderRadius: 0 }
    );

    tl.to(headerRef.current, { autoAlpha: 0, duration: 0.1, scale: 1.1 }, 0);
    tl.to(headerRef2.current, { autoAlpha: 0, duration: 0.1, y: 110 }, 0);

    const tl2 = gsap.timeline();

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <ReactLenis root>
      <section className="h-screen w-full flex flex-col justify-center p-0">
        <div className="p-0 h-screen w-full">
          <h1 className="nova-header1" ref={headerRef}>
            특허받은 캡슐화 기술로 피부 깊숙이,
          </h1>
          <div
            className="relative bottom-15 w-full h-200 flex items-center justify-center"
            ref={containerRef}
          >
            <img
              src="../nova-foma-hero.jpg"
              alt="nova-header"
              ref={imgRef}
              className="absolute bottom-10 w-full h-full object-cover rounded-4xl"
            />
          </div>
          <h1 className="nova-header2" ref={headerRef2}>
            더욱 오래가는 아름다움
          </h1>
        </div>
      </section>
    </ReactLenis>
  );
}
