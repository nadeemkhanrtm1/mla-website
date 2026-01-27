"use client";
import MainBanner from "../component/main-banner/main-banner";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

// YouTube embed codes (these don't change with language)
const youtubeEmbedCodes = ["mKqnMpVzYoQ", "KYNTPXd4ZYI", "zMq87um5CNY"];

const InterviewAndArticle = () => {
  const { t } = useLanguage();

  return (
    <>
      <MainBanner
        bannerTitle={t.interviews.banner.title}
        subTitle={t.interviews.banner.subtitle}
      />
      <section className="bg-muted py-15">
        <div className="container mx-auto flex justify-start items-center gap-3">
          <div className="w-1 h-8 bg-[#ff6600] rounded-full" />
          <div className="h-8 justify-center text-[#1a1a1a] text-2xl font-semibold font-['Open_Sans'] leading-8">
            {t.interviews.videoInterviews.heading}
          </div>
        </div>

        <div className="container mx-auto mt-8 flex flex-wrap gap-6">
          {t.interviews.videoInterviews.videos?.map((video: any, index: number) => (
            <div
              className="w-[411px] border rounded-xl"
              style={{ borderColor: "#FF6600" }}
              key={index}
            >
              <iframe
                height={278}
                src={`https://www.youtube-nocookie.com/embed/${youtubeEmbedCodes[index]}`}
                title="YouTube video player"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="flex p-4 flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="inline-flex justify-start items-center gap-6">
                    <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
                      <div className="text-center justify-center text-[#ff6600] text-xs font-bold font-['Mukta'] leading-4">
                        {video?.category}
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-4 h-4 relative">
                        <div className="w-0 h-[2.67px] left-[5.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                        <div className="w-0 h-[2.67px] left-[10.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                        <div className="w-3 h-3 left-[2px] top-[2.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                        <div className="w-3 h-0 left-[2px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                      </div>
                      <div className="w-[123.36px] h-5 justify-center text-[#364153]/80 text-sm font-normal font-['Mukta'] leading-5">
                        {video?.date}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-center text-[#1a1a1a] text-lg font-bold font-['Open_Sans'] leading-7">
                      {video?.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-15 container mx-auto">
        <div className="flex justify-start items-center gap-3">
          <div className="w-1 h-8 bg-[#ff6600] rounded-full" />
          <div className="h-8 justify-center text-[#1a1a1a] text-2xl font-semibold font-['Open_Sans'] leading-8">
            {t.interviews.newsArticles.heading}
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-8">
          {t.interviews.newsArticles.articles.map((news: any) => (
            <Link
              href={"/interviews/" + news.articleLink}
              key={news.id}
              className="w-102.75 group bg-card hover:border-[#FF6600] rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col gap-2.5 p-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="inline-flex justify-start items-center gap-6">
                    <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
                      <div className="text-center justify-center text-[#ff6600] text-xs font-bold font-['Mukta'] leading-4">
                        {news.category}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-center text-[#1a1a1a] text-lg font-bold font-['Open_Sans'] leading-7">
                      {news.title}
                    </div>
                    <div className="self-stretch justify-center text-[#364153]/80 text-base font-normal font-['Mukta'] leading-[26px]">
                      {news.content}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-end gap-2 mt-6">
                  <div className="flex items-center gap-2.5 text-center justify-center text-[#ff6600] text-base font-medium font-['Mukta'] leading-6">
                    {t.interviews.newsArticles.newsBy}
                  </div>
                </div>
                <div className="text-center flex items-center justify-center gap-3 mt-8">
                  <div className="text-center justify-center text-[#ff6600] text-base font-semibold font-['Open_Sans'] leading-5">
                    {t.interviews.newsArticles.readFullArticle}
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block "
                  >
                    <path
                      d="M10 2H14V6"
                      stroke="#FF6600"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66699 9.33333L14.0003 2"
                      stroke="#FF6600"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                      stroke="#FF6600"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default InterviewAndArticle;
