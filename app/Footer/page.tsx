"use client";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-neutral-900 pt-14 pb-6">
      <div className="footer-content-container px-3 md:px-5 lg:px-7">
        {/* First Row */}
        <div className="first-row mb-10 flex flex-col justify-between gap-5 md:flex-row">
          <h3 className="text-white text-5xl font-extrabold md:text-4xl">
            The Next Evolution in <br /> Skin Booster — NOVA FOMA
          </h3>
          <a className="footer-button flex flex-col items-center justify-center rounded-lg bg-[#f3efec] hover:bg-neutral-800 hover:text-white hover:border-indigo-50 px-6 py-3 font-extrabold md:w-40 md:rounded-3xl transition duration-100 ease-in">
            도입 문의
          </a>
        </div>
        {/* Second Row */}
        <div className="mb-10 invert">
          <img
            src="../nova-foma-logo.webp"
            alt="nova foma logo"
            className="w-55 fill-transparent"
          />
        </div>
        {/* Third Row */}
        <div className="md:flex md:justify-between">
          {/* Left side */}
          <div className="text-white">
            <div className="footer-row-contents">
              <div>주식회사 플라이닥터</div>
              <div>대표 : 이동진</div>
              <div>사업자등록번호 : 188-81-02379</div>
              <div>
                TEL: <span>02-2097-8170</span>
              </div>
            </div>
            <div className="footer-row-contents">
              <p>주소 : 서울시 강남구 테헤란로 521, 29층 (파르나스타워)</p>
              <p>
                이메일 : <a>cs@flydoctor.kr</a>
              </p>
            </div>
            <div className="text-sm">
              Copyright(c) 2025 Fly Doctor Co., Ltd. All Rights Reserved.
            </div>
          </div>

          {/* Right side */}
          <ul className="contacts text-white mt-6 flex gap-3">
            <li className="contact-circle">
              <a href="https://pf.kakao.com/_TsIAE">
                <img src="../footer-assets/footer-kakao.png" alt="Kakao Talk" />
              </a>
            </li>
            <li className="contact-circle">
              <a href="https://www.instagram.com/">
                <img
                  src="../footer-assets/footer-instagram.png"
                  alt="Instagram"
                />
              </a>
            </li>
            <li className="contact-circle">
              <a href="https://www.youtube.com/">
                <img src="../footer-assets/footer-youtube.png" alt="Youtube" />
              </a>
            </li>
            <li className="contact-circle">
              <a href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0">
                <img src="../footer-assets/footer-blog.png" alt="Naver Blog" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
