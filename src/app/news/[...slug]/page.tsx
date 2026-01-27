"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { use } from "react";

const imageMetadata: any = {
  "celebrating-education-legacy-at-balai-chak-high-school-chingra": {
    main_image: "/news_1_article_img_1.png",
    secondary_image: "/news_1_article_img_2.png",
    third_image: "/news_1_article_img_3.png",
  },
  "honble-prime-minister-narendra-modi-attends-poriborton-sankalpa": {
    main_image: "/news_2_article_img_1.png",
    secondary_image: "/news_2_article_img_2.png",
    third_image: "/news_2_article_img_3.png",
  },
  "run-for-youth-khanakuls-young-energy-on-the-streets": {
    main_image: "/news_3_article_img_1.png",
    secondary_image: "/news_3_article_img_2.png",
    third_image: "/news_3_article_img_3.png",
  },
  "listen-to-peoples-voices-in-khanakul": {
    main_image: "/news_4_article_img_1.png",
    secondary_image: "/news_4_article_img_2.png",
    third_image: "/news_4_article_img_3.png",
  },
  "poriborton-sankalpa-sabha-at-chingra": {
    main_image: "/news_5_article_img_1.png",
    secondary_image: "/news_5_article_img_2.png",
    third_image: "/news_5_article_img_3.png",
  },
};

export default function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { t } = useLanguage();
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const slugKey = slug?.join(",");

  // Find the article from translations
  const article = t.news.articles.find((a: any) => a.slug === slugKey);
  const images = imageMetadata[slugKey as any];

  if (!article) {
    return <div className="container mx-auto mt-12">Article not found</div>;
  }

  return (
    <section className="container mx-auto mt-12">
      <div className="inline-flex justify-start items-center gap-6 mb-4">
        <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-[#ff6600] text-base font-semibold font-['Mukta'] leading-4">
            {article.category}
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-5 h-5 relative">
            <div className="w-0 h-[3.33px] left-[6.67px] top-[1.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
            <div className="w-0 h-[3.33px] left-[13.33px] top-[1.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
            <div className="w-[15px] h-[15px] left-[2.50px] top-[3.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
            <div className="w-[15px] h-0 left-[2.50px] top-[8.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
          </div>
          <div className="w-[123.36px] h-5 justify-center text-[#364153]/80 text-base font-normal font-['Mukta'] leading-5">
            {article.date}
          </div>
        </div>
      </div>

      <h1 className="justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] mb-8 text-mobile-32">
        {article.title}
      </h1>

      <p
        className="self-stretch justify-center text-[#364153]/80 text-lg font-normal font-['Mukta'] leading-6.5 mb-15"
        dangerouslySetInnerHTML={{ __html: article.descriptionHtml }}
      ></p>

      <div className="mt-15">
        <Image
          src={images?.main_image}
          alt="Main Image"
          width={100}
          height={100}
          className="w-full h-full"
          unoptimized
        />
      </div>

      <div className="flex flex-row gap-4 flex-wrap mt-4 mb-30">
        <Image
          src={images?.secondary_image}
          alt="Secondary Image"
          width={100}
          height={100}
          className="w-full h-full flex-1"
          unoptimized
        />

        <Image
          src={images?.third_image}
          alt="Third Image"
          width={100}
          height={100}
          className="w-full h-full flex-1"
          unoptimized
        />
      </div>
    </section>
  );
}
