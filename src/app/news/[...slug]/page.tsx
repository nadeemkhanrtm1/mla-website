import Image from "next/image";

const storage: any = {
  "celebrating-education-legacy-at-balai-chak-high-school-chingra": {
    main_image: "/news_1_article_img_1.png",
    secondary_image: "/news_1_article_img_2.png",
    third_image: "/news_1_article_img_3.png",
    category: "Education",
    date: "January 17, 2026",
    title: "Celebrating Education & Legacy at Balai Chak High School, Chingra",
    descriptionHtml: `Education remains the foundation of a strong society. In this spirit, I attended the Hirak Jayanti (Diamond Jubilee) celebration of Balai Chak High School in the Chingra region under the Khanakul Assembly constituency.<br/>
The event marked 60 years of the institution’s contribution to education, values, and character-building among generations of students. It was heartening to interact with teachers, alumni, students, and local residents who have been part of this proud journey.<br/>
Such institutions play a crucial role in shaping responsible citizens and empowering rural Bengal through education. Supporting schools, teachers, and students is not just a duty — it is an investment in the future of Khanakul and West Bengal.`,
  },
  "honble-prime-minister-narendra-modi-attends-poriborton-sankalpa": {
    main_image: "/news_2_article_img_1.png",
    secondary_image: "/news_2_article_img_2.png",
    third_image: "/news_2_article_img_3.png",
    date: "January 18, 2026",
    category: "Healthcare",
    title: "Hon’ble Prime Minister Narendra Modi Attends Poriborton Sankalpa ",
    descriptionHtml: `On the sacred land of Singur, the historic Poriborton Sankalpa Sabha was held in the presence of the Hon’ble Prime Minister Narendra Modi, where lakhs of people gathered with one clear resolve — West Bengal needs real change.
Addressing the massive gathering, the Prime Minister strongly highlighted the failures of the Trinamool regime, stating that under their rule, the safety of daughters is at risk, the education system has fallen into the hands of mafias, and thousands of teachers have lost their jobs. He appealed directly to the mothers and sisters of Bengal, asserting that true security and dignity are possible only when Trinamool is removed from power.
He emphasized that every single vote for BJP is a vote against corruption, fear, and lawlessness, assuring that incidents like Sandeshkhali and large-scale job losses will not be repeated under a BJP-led government. Calling upon the people to take a collective pledge, he said, “Change is necessary — Bengal needs BJP governance.”
Beginning his address with “Jai Sri Ramakrishna Dev, Jai Maa Sarada,” the Prime Minister paid his respects to Singur’s holy soil. The presence of mothers, farmers, youth, and working citizens reflected a growing momentum — a new chapter is being written in Bengal’s political history. He also highlighted BJP’s commitment to Bengal’s culture, mentioning how Durga Puja received UNESCO’s Cultural Heritage recognition due to BJP’s efforts.`,
  },
  "run-for-youth-khanakuls-young-energy-on-the-streets": {
    main_image: "/news_3_article_img_1.png",
    secondary_image: "/news_3_article_img_2.png",
    third_image: "/news_3_article_img_3.png",
    date: "January 12, 2026",
    category: "Youth",
    title: "Run For Youth: Khanakul’s Young Energy on the Streets",
    descriptionHtml: ` Category: Youth & Social Initiative
Khanakul witnessed an inspiring display of youth power as we successfully organised the Run For Youth Marathon, bringing together young participants from across the constituency.
Running from Ramnagar to Chakpur, the marathon was not just about physical endurance — it was a statement of confidence, discipline, and determination. Our young boys and girls proved that Khanakul’s youth are strong, focused, and ready to lead from the front.
Later in the day, I also participated in the Hindu Sammelan at the Marokhana region of Khanakul Assembly, where community unity, cultural values, and social harmony were reaffirmed.
These initiatives reflect a clear commitment — empowering youth, strengthening society, and building a confident future for Khanakul.`,
  },
  "listen-to-peoples-voices-in-khanakul": {
    main_image: "/news_4_article_img_1.png",
    secondary_image: "/news_4_article_img_2.png",
    third_image: "/news_4_article_img_3.png",
    date: "January 10, 2026",
    category: "Welfare",
    title: "Listen to People’s Voices in Khanakul",
    descriptionHtml: `To stay close to the people and understand their real problems, Uthan Baithak (Courtyard Meetings) were held in Palashpai 1 & 2 No. regions of Khanakul.
These meetings were not held on big stages. Instead, discussions took place in people’s courtyards, where residents could speak freely. People shared their daily problems, ideas, and suggestions, and spoke openly about what they expect from their representative.
The main aim of this programme was simple — to listen carefully to people and work for real solutions. These meetings showed that people’s voices matter the most, and strong leadership begins by listening at the grassroots level.
`,
  },
  "poriborton-sankalpa-sabha-at-chingra": {
    main_image: "/news_5_article_img_1.png",
    secondary_image: "/news_5_article_img_2.png",
    third_image: "/news_5_article_img_3.png",
    date: "January 09, 2026",
    category: "Development",
    title: "Poriborton Sankalpa Sabha at Chingra",
    descriptionHtml: `A Poriborton Sankalpa Sabha was held in the Chingra region of Khanakul Assembly, where a large number of people gathered to express their strong desire for change and better governance.
The meeting was attended by Hon’ble Member of Parliament Locket Chatterjee, who addressed the public and spoke about the need for honest leadership, development, and people-focused governance in West Bengal.
The enthusiasm and participation of the people clearly showed growing dissatisfaction with the current situation and a rising hope for change. The response from the gathering reflected that the people of Khanakul are ready for a better future.
This programme highlighted the growing public support for positive change and strengthened the collective resolve to work towards development, safety, and dignity for all.
`,
  },
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params; // string | string[]
  const slugKey = slug?.join(",");
  const details = storage[slugKey as any] as any;

  return (
    <section className="container mx-auto mt-12">
      <div className="inline-flex justify-start items-center gap-6 mb-4">
        <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-[#ff6600] text-base font-semibold font-['Mukta'] leading-4">
            {details?.category}
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
            {details?.date}
          </div>
        </div>
      </div>

      <h1 className="justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] mb-8">
        {details?.title}
      </h1>

      <p
        className="self-stretch justify-center text-[#364153]/80 text-lg font-normal font-['Mukta'] leading-6.5 mb-15"
        dangerouslySetInnerHTML={{ __html: details?.descriptionHtml }}
      ></p>

      <div className="mt-15">
        <Image
          src={details?.main_image}
          alt="Main Image"
          width={100}
          height={100}
          className="w-full h-full"
          unoptimized
        />
      </div>

      <div className="flex flex-row gap-4 flex-wrap mt-4 mb-30">
        <Image
          src={details?.secondary_image}
          alt="Secondary Image"
          width={100}
          height={100}
          className="w-full h-full flex-1"
          unoptimized
        />

        <Image
          src={details?.third_image}
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
