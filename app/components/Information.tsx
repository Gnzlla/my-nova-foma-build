import React from "react";

const InformationSection = () => {
  return (
    // Change layout
    <>
      <section className="text-primary-foreground bg-black md:py-20 lg:py-24">
        <div className="app-container-wide flex flex-col gap-12 px-5 md:flex-row md:items-stretch">
          {/* First Column */}
          <div className="bg-primary flex-1 rounded-xl p-3 shadow-md md:rounded-2xl md:p-5 md:shadow-lg lg:p-7">
            <h2 className="bg-primary-h1 mb-3 py-4 text-xl font-bold md:text-2xl lg:py-6 lg:text-4xl">
              일반 NMN vs 노바포마 겔 포집 NMN
            </h2>
            <p className="bg-primary-p text-sm font-medium text-neutral-500 lg:text-base">
              <strong>일반 NMN 제형</strong> 은 투여 직후 빠르게 흡수되지만,
              금세 분해되어 농도가 급락합니다.
              <br />
              <strong>노바포마의 겔포집 NMN</strong> 은 점진적으로 방출되며,
              세포내 NAD⁺ 농도를 일정하게 유지하여 장시간 항산화·항염 효과를
              지속시킵니다.
            </p>
            <img className="w-full" src="../stacked_bar_chart.svg" />
            <p className="text-sm text-neutral-500">
              세포의 NAD⁺ 보충은 일시적인 급증보다는{" "}
              <strong>지속적이고 안정적인 공급</strong> 이 더 효과적입니다.
              노바포마의 controlled release 시스템은 이러한 생리학적 요구에
              최적화된 전달 메커니즘을 제공합니다.
            </p>
          </div>

          {/* Second Column */}
          <div className="bg-primary flex-1 rounded-xl p-3 shadow-md md:rounded-2xl md:p-5 md:shadow-lg lg:p-7">
            <h2 className="bg-primary-h2 mb-3 py-4 text-xl font-bold break-keep md:text-2xl lg:py-6 lg:text-4xl">
              NOVA FOMA는 단순히 NMN을 담은 화장품이 아닙니다.
            </h2>
            <p className="bg-primary-p2 my-3 text-sm md:my-4 md:text-base">
              'NMN을 살아 있게 유지시킨 겔'로, 세포 에너지 대사와 피부 복원력을
              동시에 증명합니다.
            </p>
            <ul className="mt-10 flex flex-col gap-6 md:mt-12 md:gap-4 lg:mt-16 lg:gap-12 ">
              <li>
                <h3>
                  <span className="stats-span">7</span> 개월
                </h3>
                <p className="p1">Stability Over Time</p>
                <p className="p2">vs 3 weeks conventional</p>
              </li>
              <li>
                {" "}
                <h3>
                  <span className="stats-span">18</span> 개월
                </h3>
                <p className="p1">Continuous Release</p>
                <p className="p2">
                  Sustained NAD<sup>+</sup> Activation
                </p>
              </li>
              <li>
                {" "}
                <h3>
                  <span className="stats-span">10</span> 개월
                </h3>
                <p className="p1">Enhanced Stability</p>
                <p className="p2">Encapsulated. Protected. Delivered.</p>
              </li>
            </ul>
            <blockquote className="mt-8 text-sm text-neutral-500 md:mt-10 lg:mt-12">
              출처: Journal of Cosmetic Dermatology, 2025 / Polymers, 2023 / Int
              J Physiol Pathophysiol Pharmacol, 2023
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default InformationSection;
