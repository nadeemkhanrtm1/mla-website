import Link from "next/link";
import svgPaths from "./svg-r68gq8h7xx";
import imgImageWithFallback from "../assets/latest-updates-left-side.png";
import imgImageWithFallback1 from "../assets/latest-news-right-side.png";
import imgImageWithFallback2 from "../assets/latest-news-right-side-2.png";

const imgRectangle17 =
  "https://cdn.sanity.io/images/599r6htc/localized/4af2500d6979b48b670eaa8de7c33c06b8d2316b-1440x960.png";
const imgRectangle18 =
  "https://cdn.sanity.io/images/599r6htc/localized/0580dda2f6996da973cfaa6f996d35bf764cae0b-1440x960.png";
const imgRectangle22 =
  "https://cdn.sanity.io/images/599r6htc/localized/a65afa0209148ad9e2898762a08cfd90ffc1e4d7-1440x960.png";
const imgRectangle21 =
  "https://cdn.sanity.io/images/599r6htc/localized/a7fba473cdcdaf0bff5ab36adc804dabc32404c2-1440x960.png";
const imgPublicMeetingWithCitizens =
  "https://cdn.sanity.io/images/599r6htc/localized/083c464a6dadaeeb9ab05a11f75e647b076d7438-1440x960.png";

function Background() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px]">Rising for the nation</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[230px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center relative shrink-0 text-[48px] w-full">
        <p className="leading-[normal]">
          Committed to Service. Dedicated to Pursurah.
        </p>
      </div>
      <div className="basis-0 font-['Mukta:Medium',sans-serif] grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] w-full">
        <p className="mb-0">{`A strong voice for development, accountability, and people-centric governance. Working relentlessly to build a progressive, secure, and empowered Pursurah. `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Background />
      <Frame128 />
    </div>
  );
}

function WeuiArrowOutlined() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[12px]"
      data-name="weui:arrow-outlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="weui:arrow-outlined">
          <path
            d={svgPaths.p18a2a6f0}
            fill="var(--fill-0, #FF6600)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">Know More</p>
      </div>
      <WeuiArrowOutlined />
    </div>
  );
}

function Frame130() {
  return (
    <div className="alcontent-stretch flex flex-col gap-[24px] items-start justify-center h-full  w-[641px]">
      <Frame129 />
      <Frame2 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">{`Vision & Mission`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[696px]">
      <Background1 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">
        <p className="mb-0">{`Vision for a Stronger & Better`}</p>
        <p className="text-[#f60]">Constituency</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[801px]">
      <Frame9 />
      <div className="font-['Mukta:Regular',sans-serif] h-[85px] leading-[28px] not-italic relative shrink-0 text-[#364153] text-[18px] text-center w-[810px]">
        <p className="mb-0">{`Our vision is to create a developed, self-reliant, and inclusive Pursurah, where every citizen has access to opportunities, safety, and a dignified quality of life. Through effective governance, community engagement, and development-oriented policies, we aim to ensure that progress reaches every household `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="SVG">
          <path
            d={svgPaths.pd5bb600}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M9 22V18H15V22"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M8 6H8.01"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M16 6H16.01"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M12 6H12.01"
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M12 10H12.01"
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M12 14H12.01"
            id="Vector_7"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M16 10H16.01"
            id="Vector_8"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M16 14H16.01"
            id="Vector_9"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M8 10H8.01"
            id="Vector_10"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
          <path
            d="M8 14H8.01"
            id="Vector_11"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="content-stretch flex items-center p-[13px] relative rounded-[12px] shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] shrink-0"
      data-name="Background+Shadow"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
      }}
    >
      <Svg />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic relative shrink-0 w-[308px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">Development for All</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-[308px]">
        <p className="leading-[26px]">
          Focused on improving roads, housing, water supply, sanitation, and
          basic civic amenities across urban and rural areas.
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[24px] w-[287px]">
      <BackgroundShadow />
      <Frame11 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div
      className="absolute bg-white inset-0 overflow-clip rounded-[16px] shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)]"
      data-name="Background+Shadow"
    >
      <Frame12 />
      <div
        className="absolute opacity-5 right-[-63.66px] rounded-[9999px] size-[128px] top-[-64px]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
        }}
      />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[226px] relative hover:shadow-[0px_4px_0px_0px_#ff7801] shrink-0 w-[411px]">
      <BackgroundShadow1 />
    </div>
  );
}

function StreamlineQualityEducation() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="streamline:quality-education"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="streamline:quality-education">
          <path
            d={svgPaths.p31a60500}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.71429"
          />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div
      className="content-stretch flex items-center p-[13px] relative rounded-[12px] shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] shrink-0"
      data-name="Background+Shadow"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
      }}
    >
      <StreamlineQualityEducation />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic relative shrink-0 w-[328px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">{`Youth & Education `}</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-[328px]">
        <p className="leading-[26px]">
          Empowering youth through education support, sports initiatives, skill
          development programs, and employment opportunities.
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[24px] w-[309px]">
      <BackgroundShadow2 />
      <Frame14 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div
      className="absolute bg-white inset-0 overflow-clip rounded-[16px] shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)]"
      data-name="Background+Shadow"
    >
      <Frame17 />
      <div
        className="absolute opacity-5 right-[-63.66px] rounded-[9999px] size-[128px] top-[-64px]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
        }}
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[226px] relative hover:shadow-[0px_4px_0px_0px_#ff7801] w-[411px]">
      <BackgroundShadow3 />
    </div>
  );
}

function AkarIconsHealth() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="akar-icons:health"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="akar-icons:health">
          <path
            d={svgPaths.p1f707000}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div
      className="content-stretch flex items-center p-[13px] relative rounded-[12px] shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] shrink-0"
      data-name="Background+Shadow"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
      }}
    >
      <AkarIconsHealth />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic relative shrink-0 w-[308px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[20px] w-full">
        <p className="leading-[28px]">{`Welfare & Healthcare`}</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-[308px]">
        <p className="leading-[26px]">
          Strengthening healthcare access, social security schemes, women
          welfare programs, and support for senior citizens.
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[24px] w-[287px]">
      <BackgroundShadow4 />
      <Frame21 />
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div
      className="absolute bg-white inset-0 overflow-clip rounded-[16px] shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)]"
      data-name="Background+Shadow"
    >
      <Frame22 />
      <div
        className="absolute opacity-5 right-[-63.66px] rounded-[9999px] size-[128px] top-[-64px]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
        }}
      />
    </div>
  );
}

// hover:shadow-[0px_4px_0px_0px_#ff7801]
function Frame16() {
  return (
    <div className="h-[226px] relative w-[411px]">
      <BackgroundShadow5 />
      <div className="card-animation" />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[72px] top-[80px] w-[1297px]">
      <Frame10 />
      <Frame133 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[699px] w-full left-0 top-[1667px] w-[1440px]">
      <Frame134 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">Stay Updated</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[517px]">
      <Background2 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[44px] w-[min-content]">
        <p className="leading-[normal]">Latest Updates</p>
      </div>
    </div>
  );
}

function WeuiArrowOutlined1() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[12px]"
      data-name="weui:arrow-outlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="weui:arrow-outlined">
          <path
            d={svgPaths.p18a2a6f0}
            fill="var(--fill-0, #FF6600)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#f60] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">View All News</p>
      </div>
      <WeuiArrowOutlined1 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[499px]">
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#364153] text-[18px] w-[min-content]">
        Stay informed about ongoing development works, constituency initiatives,
        public meetings, and important announcements from Pursurah
      </p>
      <Frame3 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[278px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame135 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div
      className="absolute h-[601px] left-0 top-0 w-[632px]"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImageWithFallback?.src}
      />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[601px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[632px]"
      data-name="Container"
    />
  );
}

function Container1() {
  return (
    <div
      className="h-[601px] overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="Container"
    >
      <ImageWithFallback />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#ff6a00] text-[16px] text-nowrap top-[-1.5px]">
        December 5, 2025
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-[589px]">
        <p className="leading-[28px]">{`Infrastructure Improvement Project Launched in Rural Areas `}</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[432px]">
      <Paragraph />
      <Frame18 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[632px]">
      <Container1 />
      <Frame25 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div
      className="h-[256px] relative shrink-0 w-full"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImageWithFallback1?.src}
      />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[256px] items-start overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Container"
    >
      <ImageWithFallback1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#ff6a00] text-[16px] text-nowrap top-[-1.5px]">
        December 5, 2025
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-[548px]">
        <p className="leading-[28px]">
          Road Development Work Initiated in Ward 7
        </p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[532px]">
      <Paragraph1 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container2 />
      <Frame31 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div
      className="h-[256px] relative shrink-0 w-full"
      data-name="ImageWithFallback"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImageWithFallback2?.src}
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[256px] items-start overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full"
      data-name="Container"
    >
      <ImageWithFallback2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="absolute font-['Open_Sans:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#ff6a00] text-[16px] text-nowrap top-[-1.5px]">
        December 5, 2025
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-[419px]">
        <p className="leading-[28px]">
          Field Visit to Review Ongoing Public Works
        </p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-[419px]">
        <p className="leading-[26px]">
          Major road reconstruction project underway covering 8 km stretch.
        </p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[432px]">
      <Paragraph2 />
      <Frame34 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container3 />
      <Frame37 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[584px]">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[80px] h-[754px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame28 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[72px] top-[2495px] w-[1296px]">
      <Frame136 />
      <Frame30 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">Out Work</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[19.5px] top-0 w-[696px]">
      <Background3 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">
        <p className="leading-[normal]">
          <span>{`Key Initiatives &`}</span>
          <span className="text-[#f60]">{` Achievements`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute h-[180px] left-[352px] top-[80px] w-[735px]">
      <Frame38 />
      <p className="absolute font-['Mukta:Regular',sans-serif] leading-[28px] left-[367.5px] not-italic text-[#364153] text-[18px] text-center top-[120px] translate-x-[-50%] w-[639px]">
        A snapshot of impactful initiatives undertaken to improve lives and
        strengthen infrastructure in the Pursurah constituency.
      </p>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute left-1/2 size-[28px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="SVG">
          <path
            d={svgPaths.p35ef3000}
            id="Vector"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d={svgPaths.p3cf08e20}
            id="Vector_2"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d={svgPaths.pcc42cc0}
            id="Vector_3"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 7H16.3337"
            id="Vector_4"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 11.666H16.3337"
            id="Vector_5"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 16.334H16.3337"
            id="Vector_6"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 21H16.3337"
            id="Vector_7"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <Svg1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[28px]">{`Road & Infrastructure`}</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[26px]">
          Strengthening connectivity through road construction, repair, and
          drainage projects.
        </p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">20+ Projects</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame46 />
      <Overlay />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background4 />
      <Frame19 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f60] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame20 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents left-[14px] top-[14px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-[#f60] left-[14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[28px_28px] size-[28px] top-[14px]"
        style={{ maskImage: `url('${imgRectangle17}')` }}
      />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <MaskGroup />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[28px]">Public Welfare Programs</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[26px]">{` Implementation of central government schemes for housing, health, and financial inclusion.`}</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">50+ Projects</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame47 />
      <Overlay1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background5 />
      <Frame48 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.2px] border-[rgba(54,65,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame49 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="absolute contents left-[14px] top-[14px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-[#f60] left-[14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[28px_28px] size-[28px] top-[14px]"
        style={{ maskImage: `url('${imgRectangle18}')` }}
      />
    </div>
  );
}

function Background6() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <MaskGroup1 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[28px]">{`Youth & Sports Promotion`}</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[26px]">{` Organizing sports tournaments like MLA CUP to encourage youth participation and talent development.`}</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">100+ Projects</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame50 />
      <Overlay2 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background6 />
      <Frame52 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.2px] border-[rgba(54,65,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame69 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[72px] top-[308px]">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div
      className="absolute contents left-[14px] top-[14px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-[#f60] left-[14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[28px_28px] size-[28px] top-[14px]"
        style={{ maskImage: `url('${imgRectangle22}')` }}
      />
    </div>
  );
}

function Background7() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <MaskGroup2 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-[298px]">
        <p className="leading-[28px]">{`Community Safety & Awareness`}</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-[298px]">
        <p className="leading-[26px]">{` Public awareness programs on women’s safety, law & order, and social responsibility`}</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">70+ Projects</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame72 />
      <Overlay3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background7 />
      <Frame73 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.2px] border-[rgba(54,65,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame75 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div
      className="absolute contents left-[14px] top-[14px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-[#f60] left-[14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[28px_28px] size-[28px] top-[14px]"
        style={{ maskImage: `url('${imgRectangle21}')` }}
      />
    </div>
  );
}

function Background8() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <MaskGroup3 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[28px]">Grassroots Outreach</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[26px]">
          Regular constituency visits, grievance redressal meetings, and direct
          citizen interaction.
        </p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">110+ Projects</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame76 />
      <Overlay4 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background8 />
      <Frame77 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.2px] border-[rgba(54,65,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame78 />
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="absolute left-1/2 size-[28px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="SVG">
          <path
            d={svgPaths.p35ef3000}
            id="Vector"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d={svgPaths.p3cf08e20}
            id="Vector_2"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d={svgPaths.pcc42cc0}
            id="Vector_3"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 7H16.3337"
            id="Vector_4"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 11.666H16.3337"
            id="Vector_5"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 16.334H16.3337"
            id="Vector_6"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
          <path
            d="M11.667 21H16.3337"
            id="Vector_7"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div
      className="bg-[#fff2e6] relative rounded-[12px] shrink-0 size-[56px]"
      data-name="Background"
    >
      <Svg2 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[28px]">Grassroots Outreach</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[26px]">
          Regular constituency visits, grievance redressal meetings, and direct
          citizen interaction.
        </p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div
      className="bg-[rgba(11,132,47,0.1)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[19px] shrink-0"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Mukta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b842f] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">110+ Projects</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[287px]">
      <Frame79 />
      <Overlay5 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Background9 />
      <Frame80 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[204px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.2px] border-[rgba(54,65,83,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame81 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[72px] top-[544px]">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[828px] left-0 top-[3573px] w-[1440px]">
      <Frame45 />
      <Frame138 />
      <Frame139 />
    </div>
  );
}

function Background10() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">{`Photo & Video Gallery`}</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[696px]">
      <Background10 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[normal] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">
        <p className="mb-0">{`Recent Events & Public`}</p>
        <p className="text-[#f60]">Interaction</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame82 />
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-center w-[639px]">
        Engaging directly with citizens is at the heart of our approach. From
        public meetings and cultural programs to sports events and awareness
        campaigns, these interactions strengthen trust and participation.
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#f60] content-stretch flex h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal]">All</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f60] content-stretch flex h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[normal]">Photos</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#f60] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap">
        <p className="leading-[normal]">Videos</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame112 />
      <Frame4 />
      <Frame110 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame83 />
      <Frame119 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="absolute bg-[#1a1a1a] blur-[55.5px] filter h-[72px] left-0 top-[236px] w-[411px]" />
  );
}

function Background11() {
  return (
    <div
      className="absolute bg-[#f60] content-stretch flex h-[32px] items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[9999px] top-[16px]"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px]">{`Photo `}</p>
      </div>
    </div>
  );
}

function PublicMeetingWithCitizens() {
  return (
    <div
      className="h-[308.25px] overflow-clip relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Public meeting with citizens"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img
          alt=""
          className="absolute h-full left-[-6.25%] max-w-none top-0 w-[112.5%]"
          src={imgPublicMeetingWithCitizens}
        />
      </div>
      <Frame117 />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[18px] text-white top-[278px] translate-y-[-50%] w-[287px]">
        <p className="leading-[28px]">Town Hall Meeting</p>
      </div>
      <Background11 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute bg-[#1a1a1a] blur-[55.5px] filter h-[72px] left-0 top-[236px] w-[411px]" />
  );
}

function Frame120() {
  return (
    <div className="absolute left-[182px] size-[48px] top-[130px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="Frame 166">
          <rect fill="var(--fill-0, #FF6600)" height="48" rx="24" width="48" />
          <path
            d={svgPaths.p10ba1f80}
            fill="var(--fill-0, white)"
            id="Polygon 1"
          />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div
      className="absolute bg-[#f60] content-stretch flex h-[32px] items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[9999px] top-[16px]"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px]">Video</p>
      </div>
    </div>
  );
}

function PublicMeetingWithCitizens1() {
  return (
    <div
      className="h-[308.25px] overflow-clip relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Public meeting with citizens"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img
          alt=""
          className="absolute h-full left-[-6.25%] max-w-none top-0 w-[112.5%]"
          src={imgPublicMeetingWithCitizens}
        />
      </div>
      <Frame121 />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[18px] text-white top-[278px] translate-y-[-50%] w-[287px]">
        <p className="leading-[28px]">Town Hall Meeting</p>
      </div>
      <Frame120 />
      <Background12 />
    </div>
  );
}

function PublicMeetingWithCitizens2() {
  return (
    <div
      className="h-[308.25px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Public meeting with citizens"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img
          alt=""
          className="absolute h-full left-[-6.25%] max-w-none top-0 w-[112.5%]"
          src={imgPublicMeetingWithCitizens}
        />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <PublicMeetingWithCitizens />
      <PublicMeetingWithCitizens1 />
      <PublicMeetingWithCitizens2 />
    </div>
  );
}

function PublicMeetingWithCitizens3() {
  return (
    <div
      className="h-[308.25px] relative rounded-[16px] shrink-0 w-[411px]"
      data-name="Public meeting with citizens"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img
          alt=""
          className="absolute h-full left-[-6.25%] max-w-none top-0 w-[112.5%]"
          src={imgPublicMeetingWithCitizens}
        />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <PublicMeetingWithCitizens3 key={i} />
      ))}
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Frame116 />
      <Frame84 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#f60] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">Load More Photo</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[calc(50%+0.5px)] top-[4521px] translate-x-[-50%] w-[1297px]">
      <Frame36 />
      <Frame115 />
    </div>
  );
}

function Background13() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[20px]">Call To Action</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[696px]">
      <Background13 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[44px] text-center text-white w-[min-content]">
        <p className="leading-[normal]">Join the Movement</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame85 />
      <div className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] text-center w-[639px]">
        <p className="mb-0">
          Be a part of the development journey. Volunteer, support campaigns,
          and
        </p>
        <p>stay updated with every initiative.</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d={svgPaths.p39559880}
            id="Vector"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3427f480}
            id="Vector_2"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3f8e7d80}
            id="Vector_3"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p3747f2c0}
            id="Vector_4"
            stroke="var(--stroke-0, #FF6600)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <Svg3 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">Become a Volunteer</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">
          <path
            d={svgPaths.p2357fa00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p14d2c600}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[20px] py-[10px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]"
      />
      <Svg4 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[normal]">Get Updates</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame39 />
      <Frame42 />
    </div>
  );
}

function Frame140() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[452px] items-start left-0 px-[401px] py-[100px] top-[5769.5px] w-[1440px]"
      style={{
        backgroundImage:
          "linear-gradient(98.6021deg, rgb(255, 102, 0) 0.34135%, rgb(11, 132, 47) 88.593%)",
      }}
    >
      <Frame43 />
    </div>
  );
}

function Background14() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[48px]"
      data-name="Background"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
      }}
    >
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[15.66px] not-italic text-[20px] text-white top-[24px] translate-y-[-50%] w-[17.066px]">
        <p className="leading-[28px]">M</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-[236px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Shri Biman Ghosh</p>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] h-[16px] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-[224px]">
        <p className="leading-[20px]">MLA, Vidhan Sabha Constituency</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[279px]">
      <Background14 />
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame58 />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] h-[69px] justify-center leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="mb-0">
          Dedicated to serving the people with transparency, integrity,
        </p>
        <p className="mb-0">
          and a commitment to continuous development. Together, we
        </p>
        <p>build a stronger tomorrow.</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3ae7b900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div
      className="bg-[#f60] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Facebook"
    >
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p39373e40}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkTwitter() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Twitter"
    >
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3e2da800}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p2e9a0fc0}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M14.584 5.41602H14.5923"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Instagram"
    >
      <Svg7 />
    </div>
  );
}

function Svg8() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3a470400}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p350a8700}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - YouTube"
    >
      <Svg8 />
    </div>
  );
}

function IcRoundWhatsapp() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="ic:round-whatsapp"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ic:round-whatsapp">
          <path
            d={svgPaths.p17d5a380}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkYouTube1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - YouTube"
    >
      <IcRoundWhatsapp />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LinkFacebook />
      <LinkTwitter />
      <LinkInstagram />
      <LinkYouTube />
      <LinkYouTube1 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[426.83px]">
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function ItemLink() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[41.81px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[42.138px]">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[43.3px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[43.632px]">
        <p className="leading-[24px]">News</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[0.17px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[157px]">
        <p className="leading-[24px]">{`Interviews & Articles`}</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[40.02px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[0.17px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[115px]">
        <p className="leading-[24px]">Team Members</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[50.69px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[51.045px]">
        <p className="leading-[24px]">Gallery</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[55.14px]"
      data-name="Item → Link"
    >
      <div className="absolute flex flex-col font-['Mukta:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[8.5px] translate-y-[-50%] w-[55.509px]">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[66.7px]">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[104.776px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">Quick Links</p>
      </div>
      <Frame62 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col font-['Mukta:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Pursurah, Hooghly District,</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">West Bengal, India</p>
      </div>
      <div className="flex flex-col h-[17px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">+91 8967463346</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">contact@bimanghosh.com</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[197.543px]">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">Contact</p>
      </div>
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[283px] items-start justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div
        className="bg-[#f60] rounded-[9999px] shrink-0 size-[12px]"
        data-name="Background"
      />
      <div
        className="bg-white rounded-[9999px] shrink-0 size-[12px]"
        data-name="Background"
      />
      <div
        className="bg-[#0b842f] rounded-[9999px] shrink-0 size-[12px]"
        data-name="Background"
      />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex h-[43px] items-end justify-between relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] w-[289.222px]">
        <p className="leading-[20px]">
          © 2025 Shri Biman Ghosh All rights reserved.
        </p>
      </div>
      <Frame67 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[111px] items-start relative shrink-0 w-[1295.15px]">
      <Frame66 />
      <Frame68 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex flex-col h-[469px] items-start left-1/2 px-[72px] py-[48px] top-[7212.5px] translate-x-[-50%] w-[1440px]">
      <Frame109 />
    </div>
  );
}

function Background15() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">Get in Touch</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[696px]">
      <Background15 />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[44px] text-center w-[min-content]">
        <p className="leading-[normal]">
          <span>{`Contact `}</span>
          <span className="text-[#f60]">Biman Ghosh</span>
        </p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame86 />
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-center w-[639px]">
        For suggestions, grievances, or public matters, feel free to connect.
      </p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-[320px]"
      data-name="Input"
    >
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] text-nowrap">
          Enter your full Name
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[20px]">Your Name</p>
      </div>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-[320px]"
      data-name="Input"
    >
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] text-nowrap">
          Email
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[20px]">Your Email</p>
      </div>
      <Input1 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame74 />
      <Frame98 />
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-[320px]"
      data-name="Input"
    >
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] text-nowrap">
          Enter your full Name
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[20px]">Phone Number</p>
      </div>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div
      className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-[320px]"
      data-name="Input"
    >
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] text-nowrap">
          Enter your full Name
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[20px]">Your Query</p>
      </div>
      <Input3 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame87 />
      <Frame99 />
    </div>
  );
}

function Input4() {
  return (
    <div
      className="bg-white h-[150px] relative rounded-[6px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[10px] relative size-full">
          <p className="font-['Mukta:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-[rgba(54,65,83,0.8)] text-nowrap">
            Enter your full Name
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"
      />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[656px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] w-full">
        <p className="leading-[20px]">Message</p>
      </div>
      <Input4 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame88 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame102 />
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f60] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[normal]">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[30px] top-[40px] w-[656px]">
      <Frame105 />
      <Frame5 />
    </div>
  );
}

function WeuiArrowOutlined2() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-outlined">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="weui:arrow-outlined">
          <path
            d={svgPaths.p18a2a6f0}
            fill="var(--fill-0, #FF6600)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#f2f2f2] h-[522px] relative rounded-[16px] shrink-0 w-[716px]">
      <Frame106 />
      <div
        className="absolute flex h-[12px] items-center justify-center left-[652px] top-[178px] w-[24px]"
        style={
          {
            "--transform-inner-width": "300",
            "--transform-inner-height": "150",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowOutlined2 />
        </div>
      </div>
    </div>
  );
}

function IcRoundPhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-phone">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic:round-phone">
          <path
            d={svgPaths.p212f3d80}
            fill="var(--fill-0, #1A1A1A)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <IcRoundPhone />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[345px]">
        <p className="leading-[28px]">Phone:</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <Frame89 />
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] w-[min-content]">
        <p className="leading-[normal]">+91 8967463346</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame51 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 404 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #364153)"
              strokeOpacity="0.2"
              x2="404"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IcRoundWhatsapp1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="ic:round-whatsapp"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic:round-whatsapp">
          <path
            d={svgPaths.p93fc700}
            fill="var(--fill-0, #1A1A1A)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <IcRoundWhatsapp1 />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[345px]">
        <p className="leading-[28px]">Whatsapp Number:</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <Frame90 />
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] w-[min-content]">
        <p className="leading-[normal]">+91 8967463346</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame91 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 404 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #364153)"
              strokeOpacity="0.2"
              x2="404"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IcRoundEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-email">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ic:round-email">
          <path
            d={svgPaths.p3e50e500}
            fill="var(--fill-0, #1A1A1A)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <IcRoundEmail />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[345px]">
        <p className="leading-[28px]">Email:</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <Frame92 />
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] w-[min-content]">
        <p className="leading-[normal]">contact@bimanghosh.com</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame93 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 404 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #364153)"
              strokeOpacity="0.2"
              x2="404"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.26%_0_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="Group">
            <path
              d={svgPaths.p34d3500}
              fill="var(--fill-0, #1A1A1A)"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p170c62f0}
              fill="var(--fill-0, #1A1A1A)"
              fillRule="evenodd"
              id="Vector_2"
            />
            <path
              d="M5 1V4M15 1V4"
              id="Vector_3"
              stroke="var(--stroke-0, #1A1A1A)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetsIconsDateRangeFill() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="lets-icons:date-range-fill"
    >
      <Group />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <LetsIconsDateRangeFill />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[345px]">
        <p className="leading-[28px]">Opening Hours:</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <Frame94 />
      <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] w-[min-content]">
        <p className="leading-[normal]">
          Monday – Saturday: 10:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame95 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 404 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #364153)"
              strokeOpacity="0.2"
              x2="404"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame56 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Svg9() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3ae7b900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkFacebook1() {
  return (
    <div
      className="bg-[#f60] relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Facebook"
    >
      <Svg9 />
    </div>
  );
}

function Svg10() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p39373e40}
            id="Vector"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkTwitter1() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Twitter"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Svg10 />
    </div>
  );
}

function Svg11() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3e2da800}
            id="Vector"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p2e9a0fc0}
            id="Vector_2"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M14.584 5.41602H14.5923"
            id="Vector_3"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkInstagram1() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - Instagram"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Svg11 />
    </div>
  );
}

function Svg12() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="SVG"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3a470400}
            id="Vector"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p350a8700}
            id="Vector_2"
            stroke="var(--stroke-0, #364153)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkYouTube2() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - YouTube"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Svg12 />
    </div>
  );
}

function IcRoundWhatsapp2() {
  return (
    <div
      className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="ic:round-whatsapp"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ic:round-whatsapp">
          <path
            d={svgPaths.p99e5b00}
            fill="var(--fill-0, #364153)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkYouTube3() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[40px]"
      data-name="Link - YouTube"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <IcRoundWhatsapp2 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LinkFacebook1 />
      <LinkTwitter1 />
      <LinkInstagram1 />
      <LinkYouTube2 />
      <LinkYouTube3 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[404px]">
      <Frame101 />
      <Frame96 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[85px] items-center relative shrink-0">
      <Frame100 />
      <Frame107 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-center left-[72px] top-[6341.5px] w-[1297px]">
      <Frame44 />
      <Frame108 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[72px] top-[920px]">
      <div className="absolute border-2 border-[#f60] border-solid h-[572.595px] left-[80px] rounded-[12px] top-[938.4px] w-[513px]" />
      <div className="absolute bg-[#f2f2f2] h-[578.73px] left-[72px] rounded-[12px] top-[920px] w-[509px]" />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center leading-[0] not-italic relative shrink-0 text-center w-[91px]">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(54,65,83,0.8)] w-full">
        <p className="leading-[20px]">Serving Since</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] h-[25px] justify-center relative shrink-0 text-[#f60] text-[20px] w-full">
        <p className="leading-[28px]">Pursurah</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div
      className="absolute bg-white bottom-[6134px] content-stretch flex flex-col items-center justify-center left-[18.13%] px-[16px] py-[14px] right-[72.71%] rounded-[16px]"
      data-name="frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)]"
      />
      <Frame127 />
    </div>
  );
}

function Background16() {
  return (
    <div
      className="bg-[rgba(255,102,0,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
      data-name="Background"
    >
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">About Your MLA</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col font-['Mukta:Regular',sans-serif] gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[rgba(54,65,83,0.8)] w-full">
      <p className="leading-[28px] relative shrink-0 text-[18px] w-full">
        <span>{`Shri Biman Ghosh is a dedicated public representative, serving as the `}</span>
        <span className="font-['Mukta:Bold',sans-serif] not-italic text-[#1a1a1a]">{`Member of the Legislative Assembly (MLA) from Pursurah `}</span>
        and
        <span className="font-['Mukta:Bold',sans-serif] not-italic text-[#1a1a1a]">{` State Secretary of the Bharatiya Janata Party, West Bengal.`}</span>
      </p>
      <p className="leading-[28px] relative shrink-0 text-[0px] w-full">
        <span className="text-[18px]">{`With a deep commitment to public service, he has consistently worked at the grassroots level to address the real issues of citizens — from infrastructure development and social welfare to youth empowerment and cultural preservation.  `}</span>
        <span className="font-['Mukta:Bold',sans-serif] not-italic text-[#f60] text-[20px]">
          Learn More
        </span>
      </p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[44px] w-full">
        <p className="leading-[48px]">
          <span>{`About `}</span>
          <span className="text-[#f60]">Shri Biman Ghosh</span>
        </p>
      </div>
      <Frame123 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Background16 />
      <Frame124 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[118px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] leading-[48px] relative shrink-0 text-[#f60] text-[44px] w-full">
        10+
      </p>
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#364153] text-[18px] w-full">
        of Active Public Service
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[197px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] leading-[48px] min-w-full relative shrink-0 text-[#117707] text-[44px] w-[min-content]">
        100+
      </p>
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#364153] text-[18px] w-[197px]">{`Development Initiatives & Public Programs`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[135px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] leading-[48px] relative shrink-0 text-[#f60] text-[44px] w-full">
        05K
      </p>
      <p className="font-['Mukta:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#364153] text-[18px] w-full">
        Citizens Directly Impacted
      </p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[548px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(41.67%+61px)] top-[984px] w-[587px]">
      <Frame125 />
      <Frame122 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[72px] top-[920px]">
      <Group1 />
      <Frame />
      <Frame126 />
    </div>
  );
}

function Background17() {
  return (
    <div
      className="absolute left-0 rounded-[9999px] size-[40px] top-1/2 translate-y-[-50%]"
      data-name="Background"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)",
      }}
    >
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[12.5px] not-italic text-[18px] text-white top-[20px] translate-y-[-50%] w-[15.375px]">
        <p className="leading-[28px]">M</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[142.34px]" data-name="frame">
      <Background17 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[28px] justify-center leading-[0] left-[48px] not-italic text-[#1a1a1a] text-[18px] top-[20px] translate-y-[-50%] w-[96.728px]">
        <p className="leading-[28px]">MLA Office</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f60] text-[18px] text-nowrap">
        <Link href="/" className="leading-[20px]">
          Home
        </Link>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <Frame71 />
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link href="/about" className="leading-[20px]">
          About
        </Link>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link href="/news" className="leading-[20px]">
          News
        </Link>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link
          href="/interviews"
          className="leading-[20px]"
        >{`Interviews & Articles`}</Link>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link href="/team" className="leading-[20px]">
          Team Members
        </Link>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link href="/gallery" className="leading-[20px]">
          Gallery
        </Link>
      </div>
      <div className="flex flex-col font-['Mukta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(54,65,83,0.8)] text-nowrap">
        <Link href="/contact" className="leading-[20px]">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#f60] content-stretch flex h-[40px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Mukta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[20px]">Join Now</p>
      </div>
    </div>
  );
}

function DHeader() {
  return (
    <div className="mx-auto bg-white py-[16px]">
      <div className="flex justify-between items-center relative shrink-0 w-full">
        <Frame1 />
        <div className="flex gap-10">
          <Frame70 />
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

export default function MlaWebsite() {
  return (
    <div className="bg-white mx-auto" data-name="MLA website">
      {/* Header */}
      <div className="max-w-[1440px] px-5 mx-auto">
        <DHeader />
      </div>
      {/* Hero Section */}
      <div className="relative bg-[#f60] custom-height w-full pl-[72px]">
        <Frame130 />
        <div className="absolute w-full custom-wave bg-white h-[128px] bottom-0 left-0"></div>
      </div>

      <Frame111 />

      <Frame137 />
      <Frame32 />
      <Frame118 />
      <div
        className="absolute bg-[#925126] left-[88px] opacity-0 rounded-[9999px] size-[12px] top-[4922px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#f60] left-[calc(33.33%+50px)] opacity-0 rounded-[9999px] size-[12px] top-[4922px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#f60] left-[calc(66.67%+14px)] opacity-0 rounded-[9999px] size-[12px] top-[4922px]"
        data-name="Background"
      />
      <Frame140 />
      <Frame114 />
      <Frame113 />
      <Group2 />
    </div>
  );
}
