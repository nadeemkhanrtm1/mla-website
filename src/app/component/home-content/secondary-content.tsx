"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const SecondartContent = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="lg:py-28 py-12px bg-background">
      <div className="container mx-auto lg:px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative animate-slide-in-left about-main-container">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/mla-shri-rajesh-kumar.jpg"
                alt="MLA Shri Rajesh Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10"></div>
            <div
              className="absolute -bottom-12 left-1/2 w-34 h-18 text-center rounded-lg"
              style={{
                transform: "translateX(-50%)",
                boxShadow: "0px 10px 40px 0px #0000001A",
              }}
            >
              <div className="flex flex-col bg-white rounded-lg p-2.5">
                <span className="text-sm text-[#364153CC] leading-5">
                  {t.home.secondaryContent.servingSince}
                </span>
                <span className="text-xl leading-7 font-semibold text-gradient">
                  {t.home.secondaryContent.location}
                </span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up mobile-sec-class">
            <span className="inline-block px-4 py-2 bg-saffron-light text-primary rounded-full text-sm mb-4 mukta-medium about-your-mla">
              {t.home.secondaryContent.badge}
            </span>
            <h2 className="text-foreground mb-6 open-sans-semibold-normal text-[44px] leading-12 text-mobile-32">
              {t.home.secondaryContent.title} <span className="text-gradient">{t.home.secondaryContent.name}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 mb-8px mukta-regular text-16px">
              {t.home.secondaryContent.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 mb-8px text-16px">
              {t.home.secondaryContent.paragraph2}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 w-[90%] w-63perce">
              <div className="flex lg:flex-col lg:items-start items-center lg:gap-0 gap-2">
                <div className="font-semibold text-5xl text-32px leading-12 text-gradient">
                  {t.home.secondaryContent.stats.years}
                </div>
                <span className="text-lg leading-7 text-[#364153] text-16px">
                  {t.home.secondaryContent.stats.yearsLabel}
                </span>
              </div>
              <div className="flex lg:flex-col lg:items-start items-center lg:gap-0 gap-2">
                <div className="font-semibold text-5xl text-32px leading-12 text-[#117707]">
                  {t.home.secondaryContent.stats.initiatives}
                </div>
                <span className="text-lg leading-7 text-[#364153] text-16px">
                  {t.home.secondaryContent.stats.initiativesLabel}
                </span>
              </div>
              <div className="flex lg:flex-col lg:items-start items-center lg:gap-0 gap-2">
                <div className="font-semibold text-5xl text-32px leading-12 text-gradient">
                  {t.home.secondaryContent.stats.citizens}
                </div>
                <span className="text-lg leading-7 text-[#364153] text-16px">
                  {t.home.secondaryContent.stats.citizensLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondartContent;

