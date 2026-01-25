import Link from "next/link";

const News = () => {
  return (
    <section id="news" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="self-stretch inline-flex justify-start items-center gap-[278px] mb-12">
          <div className="w-[517px] inline-flex flex-col justify-start items-start gap-2">
            <div className="px-4 py-2 bg-[#ff6600]/10 rounded-full inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-[#ff6600] text-sm font-medium font-['Mukta'] leading-5">
                Stay Updated
              </div>
            </div>
            <div className="self-stretch justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans']">
              Latest Updates
            </div>
          </div>
          <div className="w-[499px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-[#364153] text-lg font-normal font-['Mukta'] leading-7">
              Stay informed about ongoing development works, constituency
              initiatives, public meetings, and important announcements from
              Khanakul
            </div>
            <Link href="/interviews">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base">
              View All News
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

        <div className="self-stretch h-[754px] inline-flex justify-start items-start gap-20">
          <div className="w-[632px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-[601px] relative bg-white/0 rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl overflow-hidden">
              <img
                className="w-[632px] h-[601px] left-0 top-0 absolute"
                src="/main_news_image.png"
              />
              <div className="w-[632px] h-[601px] left-0 top-0 absolute bg-gradient-to-l from-black/60 via-black/0 to-black/0" />
            </div>
            <div className="w-[432px] flex flex-col justify-start items-start gap-2">
              <div className="w-[287px] h-5 relative">
                <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                  January 18, 2026
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="w-[589px] justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7">
                  Hon’ble Prime Minister Narendra Modi Attends Poriborton
                  Sankalpa Sabha in Singur
                </div>
              </div>
            </div>
          </div>
          <div className="w-[584px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch h-64 bg-white/0 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg flex flex-col justify-start items-start overflow-hidden">
                <img
                  className="self-stretch h-64 relative"
                  src="/s2_news_image.png"
                />
              </div>
              <div className="w-[532px] flex flex-col justify-start items-start gap-2">
                <div className="w-[287px] h-5 relative">
                  <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                    January 17, 2026
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="w-[548px] justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7">
                    Celebrating Education &amp; Legacy at Balai Chak High
                    School, Chingra
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
              <div className="w-[432px] flex flex-col justify-start items-start gap-2">
                <div className="w-[287px] h-5 relative">
                  <div className="left-0 top-[-1.50px] absolute justify-start text-[#ff6a00] text-base font-bold font-['Open_Sans'] leading-5">
                    January 12, 2026
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="w-[419px] justify-center text-[#1a1a1a] text-lg font-semibold font-['Open_Sans'] leading-7">
                    Run For Youth: Khanakul’s Young Energy on the Streets
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
