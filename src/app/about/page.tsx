import MainBanner from "../component/main-banner/main-banner";
import SecondartContent from "../component/home-content/secondary-content";
import Image from "next/image";

const page = () => {
  return (
    <>
      <MainBanner
        bannerTitle="About Shri Susanta Ghosh"
        subTitle="MLA, Khanakul | State Secretary, BJP West Bengal"
        pillText="Member of Legislative Assembly"
      />

      <SecondartContent />

      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="px-[183px] py-20 flex flex-col gap-2.5 padding-0 py-42px">
            <div className="flex flex-col justify-start items-center gap-12 mb-12 mb-24px">
              <div className="flex flex-col justify-start items-center gap-2">
                <div className="px-4 py-2 bg-[#ff6600]/10 rounded-full inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-[#ff6600] text-sm font-medium font-['Mukta'] leading-5">
                    Vision &amp; Mission
                  </div>
                </div>
                <div className="self-stretch text-center justify-center">
                  <span className="text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] text-32px">
                    Our{" "}
                  </span>
                  <span className="text-[#ff6600] text-[44px] font-semibold font-['Open_Sans'] text-32px">
                    Vision &amp; Mission
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-16px h-mobile-auto h-105 group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <div className="w-16 h-16 scaler-0-point-8 mb-12px rounded-xl bg-gradient-saffron flex items-center justify-center mb-6 shadow-button group-hover:animate-pulse-glow">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="64" height="64" rx="16" fill="#FF6600" />
                    <path
                      d="M18.7494 32.464C18.6382 32.1646 18.6382 31.8353 18.7494 31.536C19.8316 28.9118 21.6687 26.668 24.0277 25.0892C26.3867 23.5103 29.1614 22.6675 32 22.6675C34.8386 22.6675 37.6133 23.5103 39.9723 25.0892C42.3313 26.668 44.1684 28.9118 45.2507 31.536C45.3618 31.8353 45.3618 32.1646 45.2507 32.464C44.1684 35.0882 42.3313 37.3319 39.9723 38.9108C37.6133 40.4897 34.8386 41.3325 32 41.3325C29.1614 41.3325 26.3867 40.4897 24.0277 38.9108C21.6687 37.3319 19.8316 35.0882 18.7494 32.464Z"
                      stroke="white"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32C28 34.2091 29.7909 36 32 36Z"
                      stroke="white"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-16px mb-4px text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform Pursurah into a model constituency through
                  sustainable development, strong civic infrastructure, and
                  active citizen participation — where every family has access
                  to quality healthcare, education, clean water, and better
                  roads.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
              <div className="p-16px h-mobile-auto h-105 group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <div className="w-16 h-16 scaler-0-point-8 mb-12px rounded-xl flex items-center justify-center mb-6">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="64"
                      height="64"
                      rx="16"
                      fill="#0B842F"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M32.0003 45.3333C39.3641 45.3333 45.3337 39.3638 45.3337 32C45.3337 24.6362 39.3641 18.6666 32.0003 18.6666C24.6365 18.6666 18.667 24.6362 18.667 32C18.667 39.3638 24.6365 45.3333 32.0003 45.3333Z"
                      stroke="#0B842F"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                      stroke="#0B842F"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.9997 34.6667C33.4724 34.6667 34.6663 33.4728 34.6663 32C34.6663 30.5273 33.4724 29.3334 31.9997 29.3334C30.5269 29.3334 29.333 30.5273 29.333 32C29.333 33.4728 30.5269 34.6667 31.9997 34.6667Z"
                      stroke="#0B842F"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-16px mb-4px text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver inclusive and sustainable development in Pursurah
                  by strengthening civic infrastructure, improving access to
                  quality healthcare and education, ensuring clean water and
                  safe roads, and empowering citizens to actively participate in
                  shaping a transparent, progressive, and people-first
                  constituency.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-30 my-40px container mx-auto">
        <div className="w-177 w-mobile-100-perc mx-auto h-78 h-mobile-auto relative rounded-2xl">
          <svg
            className="absolute -top-10 left-3 z-100 scaler-0-point-8"
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_190_30)">
              <rect
                x="15"
                y="11"
                width="48"
                height="48"
                rx="16"
                fill="url(#paint0_linear_190_30)"
                shape-rendering="crispEdges"
              />
              <path
                d="M43 26C42.4696 26 41.9609 26.2107 41.5858 26.5858C41.2107 26.9609 41 27.4696 41 28V34C41 34.5304 41.2107 35.0391 41.5858 35.4142C41.9609 35.7893 42.4696 36 43 36C43.2652 36 43.5196 36.1054 43.7071 36.2929C43.8946 36.4804 44 36.7348 44 37V38C44 38.5304 43.7893 39.0391 43.4142 39.4142C43.0391 39.7893 42.5304 40 42 40C41.7348 40 41.4804 40.1054 41.2929 40.2929C41.1054 40.4804 41 40.7348 41 41V43C41 43.2652 41.1054 43.5196 41.2929 43.7071C41.4804 43.8946 41.7348 44 42 44C43.5913 44 45.1174 43.3679 46.2426 42.2426C47.3679 41.1174 48 39.5913 48 38V28C48 27.4696 47.7893 26.9609 47.4142 26.5858C47.0391 26.2107 46.5304 26 46 26H43Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 26C31.4696 26 30.9609 26.2107 30.5858 26.5858C30.2107 26.9609 30 27.4696 30 28V34C30 34.5304 30.2107 35.0391 30.5858 35.4142C30.9609 35.7893 31.4696 36 32 36C32.2652 36 32.5196 36.1054 32.7071 36.2929C32.8946 36.4804 33 36.7348 33 37V38C33 38.5304 32.7893 39.0391 32.4142 39.4142C32.0391 39.7893 31.5304 40 31 40C30.7348 40 30.4804 40.1054 30.2929 40.2929C30.1054 40.4804 30 40.7348 30 41V43C30 43.2652 30.1054 43.5196 30.2929 43.7071C30.4804 43.8946 30.7348 44 31 44C32.5913 44 34.1174 43.3679 35.2426 42.2426C36.3679 41.1174 37 39.5913 37 38V28C37 27.4696 36.7893 26.9609 36.4142 26.5858C36.0391 26.2107 35.5304 26 35 26H32Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_190_30"
                x="0"
                y="0"
                width="78"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.4 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_190_30"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_190_30"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_190_30"
                x1="15"
                y1="11"
                x2="63"
                y2="59"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6600" />
                <stop offset="1" stop-color="#FF8000" />
              </linearGradient>
            </defs>
          </svg>

          <div
            className="w-mobile-100-perc bg-white rounded-2xl p-8 pt-m-25px px-m-14px"
            style={{ boxShadow: "0px 0px 40px 10px rgba(0,0,0,0.08)" }}
          >
            <div className="w-mobile-100-perc inline-flex flex-col justify-start items-start gap-6 gap-14px0">
              <div className="self-stretch justify-center text-[#1a1a1a] text-2xl font-semibold font-['Open_Sans'] leading-9 text-16px">
                &quot;My goal is to serve every citizen with honesty,
                <br />
                dedication, and commitment. Together, we will build a stronger
                and progressive Pursurah where every family prospers.&quot;
              </div>
              <div className="hidden lg:flex justify-start items-center gap-6">
                <div className="w-20 h-20 relative bg-white/0 rounded-2xl shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-[#ff6600] overflow-hidden">
                  <Image
                    className="w-18 h-18 left-1 top-1 absolute rounded-xl"
                    src="/about_mla_profile.png"
                    width={100}
                    height={100}
                    unoptimized
                    alt=""
                  />
                </div>
                <div className="inline-flex flex-col justify-start items-start gap-0.5">
                  <div className="flex flex-col justify-start items-start">
                    <div className="justify-center text-[#1a1a1a] text-xl font-semibold font-['Open_Sans'] leading-7">
                      Shri Susanta Ghosh
                    </div>
                    <div className="self-stretch h-6 justify-center text-[#364153]/80 text-base font-normal font-['Mukta'] leading-6">
                      MLA, Khanakul
                    </div>
                  </div>
                  <div className="self-stretch h-5 justify-center text-[#ff6600] text-sm font-medium font-['Mukta'] leading-5">
                    State Secretary, BJP West Bengal
                  </div>
                </div>
              </div>


              <div className="flex lg:hidden justify-start items-center gap-[9px]">
  <div className="w-12 h-12 relative bg-white/0 rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-[#ff6600] overflow-hidden">
    <img className="w-10 h-10 left-[4px] top-[4px] absolute"    src="/about_mla_profile.png" />
  </div>
  <div className="w-[197px] inline-flex flex-col justify-start items-start">
    <div className="self-stretch h-9 relative">
      <div className="w-[197px] h-[18px] left-0 top-0 absolute justify-center text-[#1a1a1a] text-sm font-semibold font-['Open_Sans'] leading-7">Shri Susanta Ghosh</div>
      <div className="w-[197px] h-6 left-0 top-[17px] absolute justify-center text-[#364153]/80 text-sm font-normal font-['Mukta'] leading-6">MLA, Khanakul</div>
    </div>
    <div className="self-stretch h-5 justify-center text-[#ff6600] text-xs font-medium font-['Mukta'] leading-5">State Secretary, BJP West Bengal</div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
