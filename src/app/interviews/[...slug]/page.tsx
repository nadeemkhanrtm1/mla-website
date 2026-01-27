"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { use } from "react";

// Image metadata (doesn't change with language)
const imageMetadata: any = {
  "major-drainage-infrastructure-project": {
    main_image: "/interview_1.png",
  },
  "youth-marathon-organised-to-promote-a-drug-free-and-healthy-society": {
    main_image: "/interview_2.png",
  },
  "central-government-road-connectivity-initiative-for-rural-areas": {
    main_image: "/interview_3.png",
  },
  "model-education-and-child-development-centres": {
    main_image: "/interview_4.png",
  },
  "bjp-organisational-strength-and-victory-celebration": {
    main_image: "/interview_5.png",
  },
};

export default function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { t } = useLanguage();
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const slugKey = slug?.join(",");

  // Find the article from translations
  const article = t.interviews.newsArticles.articles.find(
    (a: any) => a.articleLink === slugKey
  );
  const images = imageMetadata[slugKey as any];

  if (!article) {
    return <div className="container mx-auto mt-12">Article not found</div>;
  }

  return (
    <section className="container mx-auto mt-12">
      <div className="inline-flex justify-start items-center gap-6 mb-4">
        <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-[#ff6600] text-base font-semibold font-['Mukta'] leading-4">
            {article?.category}
          </div>
        </div>
      </div>

      <h1 className="justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] mb-8 text-mobile-32">
        {article?.fullTitle}
      </h1>

      <p
        className="self-stretch justify-center text-[#364153]/80 text-lg font-normal font-['Mukta'] leading-6.5 mb-15"
        dangerouslySetInnerHTML={{ __html: article?.descriptionHtml }}
      ></p>

      <div className="mt-15 mb-30">
        <Image
          src={images?.main_image}
          alt="Main Image"
          width={100}
          height={100}
          className="w-full h-full"
          unoptimized
        />
      </div>
    </section>
  );
}
