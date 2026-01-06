"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TableRow from "./TableContent";
import DownloadContent from "./DownloadContent";
import { tableRows } from "../SectionData";
import { downloadRowContent } from "../SectionData";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!h1Ref.current || !linkRef.current) return;
    //Animations of first grid header
    gsap.fromTo(
      h1Ref.current,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    //Animation of 2nd grid header
    gsap.fromTo(
      linkRef.current,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <>
      <section className="bg-black py-20 md:py-24 lg:py-32 text-white">
        {/* First Div */}
        <div className="mx-auto px-3 md:px-4 lg:px-6 max-w-5xl compare-container">
          <h2
            ref={h1Ref}
            className="before:inline-block before:bg-[#FFDAA2] md:before:mr-3 before:mr-1.5 mb-6 md:mb-9 lg:mb-12 md:before:w-1 before:w-0.5 md:before:h-2 before:h-1 font-bold text-xl md:text-2xl lg:text-4xl before:align-middle before:content-['']"
          >
            Proven Long-Term Efficacy
          </h2>
          <ul className="mb-9">
            <li className="before:inline-block before:bg-neutral-600 before:mr-1 before:rounded-full before:w-0.5 before:h-0.5 text-neutral-600 text-xs md:text-sm before:align-middle before:content-['']">
              NOVA FOMA 는 단순히 NMN을 담은 화장품이 아닙니다.
            </li>
            <li className="before:inline-block before:bg-neutral-600 before:mr-1 before:rounded-full before:w-0.5 before:h-0.5 text-neutral-600 text-xs md:text-sm before:align-middle before:content-['']">
              'NMN을 살아 있게 유지시킨 겔'로, 세포 에너지 대사와 피부 복원력을
              동시에 증명합니다.
            </li>
          </ul>
          {/* Table title */}
          <div className="space-y-1">
            {/* Table Header */}
            <div className="flex flex-nowrap mb-1 bg-(--background) [&>div>*]:p-4 md:p-6 [&>div]:w-1/3 font-bold md:text-lg lg:text-xl [&>div]:bg-(--background)]">
              <div>구분</div>
              <div>일반 NMN 수용액</div>
              <div className="text-[#FFDAA2]">NOVA FOMA 겔타입</div>
            </div>
            {tableRows.map((row, i) => (
              <TableRow key={i} label={row.label} values={row.values} />
            ))}
          </div>
        </div>
        {/* Second Div */}
        <div className="mx-auto mt-12 md:mt-20 lg:mt-28 px-3 md:px-4 lg:px-6 max-w-5xl downloads-container">
          <h2
            ref={linkRef}
            className="before:inline-block before:bg-[#FFDAA2] md:before:mr-3 before:mr-1.5 mb-6 md:mb-9 lg:mb-12 md:before:w-1 before:w-0.5 md:before:h-2 before:h-1 font-bold text-xl md:text-2xl lg:text-4xl before:align-middle before:content-['']"
          >
            Download
          </h2>
          <div className="-mr-3 md:mr-0 -ml-3 md:ml-0 overflow-x-auto">
            <ul className="space-y-1">
              {/* Modularize! */}
              {downloadRowContent.map((rows, i) => (
                <DownloadContent
                  key={i}
                  header={rows.header}
                  subheader={rows.subheader}
                  link={rows.link}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
