"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const HeroContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="home"
        className="relative lg:min-h-188.5 min-h-137.5"
        style={{
          background: "linear-gradient(132deg, #FF6600 0%, #0B842F 100%)",
        }}
      >
        <div className="container mx-auto lg:px-4 px-4.5 flex justify-center items-center lg:pt-0 pt-15">
          <div className="lg:px-4 px-0 text-white lg:text-left text-center flex-1">
            <span
              className="px-4 mukta-medium text-background text-sm font-medium py-2 bg-background/20 backdrop-blur-sm rounded-full border border-background/30 animation-delay-200"
              style={{ animationDelay: "0.1s" }}
            >
              {t.home.hero.badge}
            </span>

            <h1 className="lg:text-5xl text-[32px] max-w-[550px] lg:leading-16 leading-11 font-semibold open-sans-semibold-normal mb-4 mt-6">
              {t.home.hero.mainTitle}
            </h1>

            <p className="mb-6 max-w-[490px] mukta-medium lg:text-xl text-[16px]">
              {t.home.hero.description}
            </p>

            <button className="inline-flex cursor-pointer text-[#FF6600] items-center justify-center gap-2 whitespace-nowrap font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background text-primary border-2 border-background hover:bg-transparent hover:text-background hover:border-background font-bold shadow-elevated lg:h-14 h-12 rounded-lg lg:px-10 px-5 lg:text-lg text-[16px] open-sans-semibold-normal">
              {t.home.hero.ctaButton}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-5 h-5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
          <Image
            src="/hero_image.png"
            alt="Hero Image"
            className="w-[477px] h-[630px] relative -bottom-16 hidden lg:block"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="absolute w-full h-32 lg:bottom-0 -bottom-12 left-0">
          <Image
            src="/hero_bottom_img.png"
            className="w-full h-full lg:block hidden"
            alt="Wave"
            unoptimized
            width={100}
            height={100}
          />

          <svg
           className="w-full h-full lg:hidden block"
            width="360"
            height="46"
            viewBox="0 0 360 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-118 46L-98.0833 38.1076C-78.1667 30.2153 -38.3333 14.4306 1.5 6.53824C41.3333 -1.35411 81.1667 -1.35411 121 2.59206C160.833 6.53824 200.667 14.4306 240.5 18.3768C280.333 22.3229 320.167 22.3229 340.083 22.3229H360V46H340.083C320.167 46 280.333 46 240.5 46C200.667 46 160.833 46 121 46C81.1667 46 41.3333 46 1.5 46C-38.3333 46 -78.1667 46 -98.0833 46H-118Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroContent;
