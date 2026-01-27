"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const News = () => {
  const { t } = useLanguage();

  return (
    <section id="news" className="py-20 py-40px margin-bottom-350px">
      <div className="container mx-auto px-4">
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-center gap-[278px] gap-mobile-0 mb-12 mb-24px mobile-center">
          <div className="w-[517px] w-mobile-100-perc inline-flex flex-col justify-start items-start gap-2 mobile-center">
            <div className="px-4 py-2 bg-[#ff6600]/10 rounded-full inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-[#ff6600] text-sm font-medium font-['Mukta'] leading-5">
                {t.home.news.badge}
              </div>
            </div>
            <div className="self-stretch justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] text-mobile-32">
              {t.home.news.title}
            </div>
          </div>
          <div className="w-[499px] w-mobile-100-perc inline-flex flex-col justify-start items-start gap-6  mobile-center">
            <div className="self-stretch justify-start text-[#364153] text-lg font-normal font-['Mukta'] leading-7 text-16px">
              {t.home.news.description}
            </div>
            <Link href="/interviews">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base">
                {t.home.news.viewAllButton}
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="self-stretch h-[754px] flex flex-col lg:flex-row justify-start items-start gap-20 gap-24px">
          <div className="w-[632px] w-mobile-100-perc inline-flex flex-col justify-start items-start gap-6 gap-16px">
            <div className="self-stretch  w-mobile-100-perc h-[601px] h-200px relative bg-white/0 rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl overflow-hidden">
              <img
                className="w-[632px] w-mobile-100-perc h-[601px] h-mobile-auto left-0 top-0 absolute"
                src="/main_news_image.png"
              />
              <div className="w-[632px] w-mobile-100-perc h-[601px] h-mobile-auto left-0 top-0 absolute bg-gradient-to-l from-black/60 via-black/0 to-black/0" />
            </div>
            <div className="w-[432px] w-mobile-100-perc flex flex-col justify-start items-start gap-2">
              <div className="w-[287px] h-5 relative">
                <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                  {t.home.news.articles.main.date}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="w-[589px] w-mobile-100-perc justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7 text-16px">
                  {t.home.news.articles.main.title}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[584px] w-mobile-100-perc inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 gap-16px">
              <div className="self-stretch h-64 bg-white/0 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg flex flex-col justify-start items-start overflow-hidden">
                <img
                  className="self-stretch h-64 relative"
                  src="/s2_news_image.png"
                />
              </div>
              <div className="w-[532px] w-mobile-100-perc flex flex-col justify-start items-start gap-2">
                <div className="w-[287px] h-5 relative">
                  <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                    {t.home.news.articles.second.date}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="w-[548px] w-mobile-100-perc justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7 text-16px">
                    {t.home.news.articles.second.title}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch h-64 bg-white/0 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg flex flex-col justify-start items-start overflow-hidden">
                <img
                  className="self-stretch h-64 relative"
                  src="/s3_news_image.png"
                />
              </div>
              <div className="w-[432px] w-mobile-100-perc flex flex-col justify-start items-start gap-2">
                <div className="w-[287px] h-5 relative">
                  <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                    {t.home.news.articles.third.date}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="w-[419px]  w-mobile-100-perc justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7 text-16px">
                    {t.home.news.articles.third.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

