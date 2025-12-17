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
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !containerRef.current ||
      !imgRef.current ||
      !headerRef.current ||
      !headerRef2.current ||
      !descriptionRef.current
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

    // Image scales up from 0.6 to 1
    tl.fromTo(
      imgRef.current,
      { scale: 0.4 },
      {
        scale: 1,
        ease: "power1.inOut",
        borderRadius: 0,
      },
      0
    );

    // Headers fade out at the start
    tl.to(
      headerRef.current,
      { autoAlpha: 0, y: -90, scale: 1.1, duration: 0.2 },
      0
    );
    tl.to(headerRef2.current, { autoAlpha: 0, y: 110, duration: 0.2 }, 0);

    // Description appears AFTER image finishes scaling
    tl.fromTo(
      descriptionRef.current,
      { autoAlpha: 0, y: -40 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
      0.6
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="min-h-screen w-full flex flex-col justify-center p-0">
        <div className="p-0 min-h-screen w-full relative">
          <h1 className="nova-header1 md:text-5xl" ref={headerRef}>
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
              style={{ scale: 0.4 }}
              className="absolute bottom-10 w-full h-full object-cover rounded-4xl"
            />
            <div
              ref={descriptionRef}
              className="absolute bottom-10 left-0 w-full px-8 md:px-16 lg:px-24 z-10 pb-15"
            >
              <h4 className="mb-5 text-lg font-bold">
                Patented Encapsulation Technology
              </h4>
              <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                The Next Evolution in <br />
                Skin Booster
              </h2>
            </div>
          </div>

          <h1 className="nova-header2" ref={headerRef2}>
            더욱 오래가는 아름다움
          </h1>
        </div>
      </section>
    </ReactLenis>
  );
}
