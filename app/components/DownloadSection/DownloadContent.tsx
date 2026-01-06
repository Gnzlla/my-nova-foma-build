"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@gsap/react";

type DownloadRowProps = {
  header: string;
  subheader: string;
  link: string;
};

export default function DownloadContent({
  header,
  subheader,
  link,
}: DownloadRowProps) {
  return (
    <li className="bg-(--background) flex place-content-between p-3 md:p-4 lg:p-6 font-semibold">
      <div>
        <div className="text-2xl">{header}</div>
        <div className="text-[#FFDAA2] text-sm">{subheader}</div>
      </div>
      <span className="flex items-center gap-2.5 font-normal text-lg hover:underline">
        <a href={link}>다운로드</a>
        <img src="/arrow.svg" className="h-4" />
      </span>
    </li>
  );
}
