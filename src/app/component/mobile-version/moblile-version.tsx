import { useState } from 'react';
import svgPaths from "../../../imports/svg-r68gq8h7xx";
// import imgAbout from "figma:asset/a89fc7653352221e9858f351a1a030629839018c.png";
// import imgNews1 from "figma:asset/61a4c0d7a37bae33d4a5d3bdf13e517baffa4a5a.png";
// import imgRectangle17 from "figma:asset/4af2500d6979b48b670eaa8de7c33c06b8d2316b.png";
// import imgRectangle18 from "figma:asset/0580dda2f6996da973cfaa6f996d35bf764cae0b.png";
// import imgRectangle22 from "figma:asset/a65afa0209148ad9e2898762a08cfd90ffc1e4d7.png";
// import imgRectangle21 from "figma:asset/a7fba473cdcdaf0bff5ab36adc804dabc32404c2.png";
// import imgEvent from "figma:asset/083c464a6dadaeeb9ab05a11f75e647b076d7438.png";

const imgAbout = "/assets/images/about-mobile.jpg";
const imgNews1 = "/assets/images/news1-mobile.jpg";
const imgRectangle17 = "/assets/images/rectangle17.png";
const imgRectangle18 = "/assets/images/rectangle18.png";
const imgRectangle22 = "/assets/images/rectangle22.png";
const imgRectangle21 = "/assets/images/rectangle21.png";
const imgEvent = "/assets/images/event-mobile.jpg";

export default function MobileVersion() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen w-full relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-[rgba(54,65,83,0.1)] shadow-[0px_4px_78px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}>
              <span className="font-['Poppins:Bold',sans-serif] text-white text-lg leading-7">M</span>
            </div>
            <span className="font-['Poppins:Bold',sans-serif] text-[#1a1a1a] text-lg leading-7">MLA Office</span>
          </div>

          {/* Hamburger Menu */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[rgba(54,65,83,0.1)] shadow-lg">
            <nav className="flex flex-col p-4">
              <a href="#home" className="px-4 py-3 border border-[#f60] rounded-lg mb-3 font-['Mukta:Medium',sans-serif] text-[#f60] text-lg">Home</a>
              <a href="#about" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">About</a>
              <a href="#news" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">News</a>
              <a href="#articles" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">Interviews & Articles</a>
              <a href="#team" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">Team Members</a>
              <a href="#gallery" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">Gallery</a>
              <a href="#contact" className="px-4 py-3 font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">Contact Us</a>
              <button className="bg-[#f60] px-4 py-3 rounded-lg font-['Mukta:Medium',sans-serif] text-white text-lg mt-3">Join Now</button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="bg-[#f60] relative px-4 pt-12 pb-20">
          {/* Curved Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-[60px]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 60">
              <path d="M0 60L13.672 49.4118C27.344 38.8235 54.688 17.6471 82.031 8.47059C109.375 -0.705882 136.719 -0.705882 164.063 3.35294C191.406 7.41176 218.75 15.5294 246.094 23.6471C273.438 31.7647 300.781 39.8824 328.125 42C355.469 44.1176 382.813 40.2353 396.484 38.2941L410.156 36.3529V60H396.484C382.813 60 355.469 60 328.125 60C300.781 60 273.438 60 246.094 60C218.75 60 191.406 60 164.063 60C136.719 60 109.375 60 82.031 60C54.688 60 27.344 60 13.672 60H0Z" fill="white"/>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="font-['Mukta:Medium',sans-serif] text-white text-sm leading-5">Rising for the nation</p>
            </div>
            <h1 className="font-['Open_Sans:SemiBold',sans-serif] text-white text-[32px] leading-[40px] mb-4">
              Committed to Service.<br />Dedicated to Pursurah.
            </h1>
            <p className="font-['Mukta:Medium',sans-serif] text-white text-base leading-7 mb-6 max-w-[343px]">
              A strong voice for development, accountability, and people-centric governance. Working relentlessly to build a progressive, secure, and empowered Pursurah.
            </p>
            <button className="bg-white px-5 py-3 rounded-lg flex items-center gap-2">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-lg">Know More</span>
              <svg className="w-3 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                <path d={svgPaths.p18a2a6f0} fill="#FF6600"/>
              </svg>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-12">
          {/* Image Card */}
          <div className="relative mb-8">
            <div className="border-2 border-[#f60] rounded-xl absolute top-4 right-4 w-full h-full"></div>
            <div className="bg-[#f2f2f2] rounded-xl overflow-hidden relative z-10">
              <img src={imgAbout} alt="About" className="w-full h-[280px] object-cover" />
            </div>
          </div>

          {/* Serving Badge */}
          <div className="bg-white border border-[#e6e6e6] rounded-2xl shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] px-4 py-3.5 flex flex-col items-center mb-8">
            <p className="font-['Mukta:Medium',sans-serif] text-[rgba(54,65,83,0.8)] text-sm leading-5">Serving Since</p>
            <p className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-xl leading-7">Pursurah</p>
          </div>

          {/* Content */}
          <div className="mb-8">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">About Your MLA</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-[32px] leading-[40px] mb-4">
              About <span className="text-[#f60]">Shri Biman Ghosh</span>
            </h2>
            <div className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg leading-7 space-y-3">
              <p>
                Shri Biman Ghosh is a dedicated public representative, serving as the <span className="font-['Mukta:Bold',sans-serif] text-[#1a1a1a]">Member of the Legislative Assembly (MLA) from Pursurah</span> and <span className="font-['Mukta:Bold',sans-serif] text-[#1a1a1a]">State Secretary of the Bharatiya Janata Party, West Bengal.</span>
              </p>
              <p>
                With a deep commitment to public service, he has consistently worked at the grassroots level to address the real issues of citizens — from infrastructure development and social welfare to youth empowerment and cultural preservation.
              </p>
              <p className="font-['Mukta:Bold',sans-serif] text-[#f60] text-xl">Learn More</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-[32px] leading-[40px] mb-3">10+</p>
              <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7">of Active Public Service</p>
            </div>
            <div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[#117707] text-[32px] leading-[40px] mb-3">100+</p>
              <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7">Development Initiatives & Public Programs</p>
            </div>
            <div>
              <p className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-[32px] leading-[40px] mb-3">05K</p>
              <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7">Citizens Directly Impacted</p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#f2f2f2] px-4 py-12">
          <div className="text-center mb-8">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">Vision & Mission</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-[32px] leading-[40px] mb-4">
              Vision for a Stronger & Better<br /><span className="text-[#f60]">Constituency</span>
            </h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7 max-w-[343px] mx-auto">
              Our vision is to create a developed, self-reliant, and inclusive Pursurah, where every citizen has access to opportunities, safety, and a dignified quality of life. Through effective governance, community engagement, and development-oriented policies, we aim to ensure that progress reaches every household
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-5" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}></div>
              <div className="relative z-10">
                <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] mb-4" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}>
                  <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.pd5bb600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M9 22V18H15V22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M8 6H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M16 6H16.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M12 6H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M12 10H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M12 14H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M16 10H16.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M16 14H16.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M8 10H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                    <path d="M8 14H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667"/>
                  </svg>
                </div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[#1a1a1a] text-xl leading-7 mb-1.5">Development for All</h3>
                <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-[26px]">
                  Focused on improving roads, housing, water supply, sanitation, and basic civic amenities across urban and rural areas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-5" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}></div>
              <div className="relative z-10">
                <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] mb-4" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}>
                  <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p31a60500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429"/>
                  </svg>
                </div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[#1a1a1a] text-xl leading-7 mb-1.5">Youth & Education</h3>
                <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-[26px]">
                  Empowering youth through education support, sports initiatives, skill development programs, and employment opportunities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_0px_rgba(255,102,0,0.1)] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-5" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}></div>
              <div className="relative z-10">
                <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center shadow-[0px_4px_15px_0px_rgba(255,102,0,0.3)] mb-4" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}>
                  <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1f707000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-[#1a1a1a] text-xl leading-7 mb-1.5">Welfare & Healthcare</h3>
                <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-[26px]">
                  Strengthening healthcare access, social security schemes, women welfare programs, and support for senior citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="px-4 py-12">
          <div className="mb-6">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">Stay Updated</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-[32px] leading-[40px] mb-3">Latest Updates</h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7 mb-6">
              Stay informed about ongoing development works, constituency initiatives, public meetings, and important announcements from Pursurah
            </p>
            <button className="border border-[#f60] px-5 py-3 rounded-lg flex items-center justify-center gap-2 w-full">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-lg">View All News</span>
              <svg className="w-3 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                <path d={svgPaths.p18a2a6f0} fill="#FF6600"/>
              </svg>
            </button>
          </div>

          {/* News Cards */}
          <div className="flex flex-col gap-6">
            {/* Large Card */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] mb-6">
                <div className="relative h-[260px]">
                  <img src={imgAbout} alt="News" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent"></div>
                </div>
              </div>
              <p className="font-['Open_Sans:Bold',sans-serif] text-[#ff6a00] text-base leading-5 mb-2">December 5, 2025</p>
              <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-lg leading-7">
                Infrastructure Improvement Project Launched in Rural Areas
              </h3>
            </div>

            {/* Small Cards */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mb-6">
                <img src={imgNews1} alt="News" className="w-full h-[180px] object-cover" />
              </div>
              <p className="font-['Open_Sans:Bold',sans-serif] text-[#ff6a00] text-base leading-5 mb-2">December 5, 2025</p>
              <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-lg leading-7">
                Road Development Work Initiated in Ward 7
              </h3>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mb-6">
                <img src={imgNews1} alt="News" className="w-full h-[180px] object-cover" />
              </div>
              <p className="font-['Open_Sans:Bold',sans-serif] text-[#ff6a00] text-base leading-5 mb-2">December 5, 2025</p>
              <h3 className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-lg leading-7 mb-1.5">
                Field Visit to Review Ongoing Public Works
              </h3>
              <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-[26px]">
                Major road reconstruction project underway covering 8 km stretch.
              </p>
            </div>
          </div>
        </section>

        {/* Key Initiatives Section */}
        <section className="bg-[#f2f2f2] px-4 py-12">
          <div className="text-center mb-8">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">Out Work</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[32px] leading-[40px] mb-4">
              <span className="text-[#1a1a1a]">Key Initiatives &</span>
              <span className="text-[#f60]"> Achievements</span>
            </h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[#364153] text-lg leading-7 max-w-[343px] mx-auto">
              A snapshot of impactful initiatives undertaken to improve lives and strengthen infrastructure in the Pursurah constituency.
            </p>
          </div>

          {/* Initiative Cards */}
          <div className="flex flex-col gap-6">
            {[
              { icon: imgRectangle17, title: "Road & Infrastructure", desc: "Strengthening connectivity through road construction, repair, and drainage projects.", projects: "20+" },
              { icon: imgRectangle18, title: "Public Welfare Programs", desc: "Implementation of central government schemes for housing, health, and financial inclusion.", projects: "50+" },
              { icon: imgRectangle18, title: "Youth & Sports Promotion", desc: "Organizing sports tournaments like MLA CUP to encourage youth participation and talent development.", projects: "100+" },
              { icon: imgRectangle22, title: "Community Safety & Awareness", desc: "Public awareness programs on women's safety, law & order, and social responsibility", projects: "70+" },
              { icon: imgRectangle21, title: "Grassroots Outreach", desc: "Regular constituency visits, grievance redressal meetings, and direct citizen interaction.", projects: "110+" },
              { icon: null, title: "Grassroots Outreach", desc: "Regular constituency visits, grievance redressal meetings, and direct citizen interaction.", projects: "110+" }
            ].map((card, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-6 border-[1.2px] ${idx === 0 ? 'border-[#f60]' : 'border-[rgba(54,65,83,0.1)]'}`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-[#fff2e6] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    {card.icon ? (
                      <div className="absolute inset-[14px]">
                        <div className="w-7 h-7 bg-[#f60]" style={{ maskImage: `url('${card.icon}')`, maskSize: '28px 28px', maskRepeat: 'no-repeat' }}></div>
                      </div>
                    ) : (
                      <svg className="w-7 h-7" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <path d={svgPaths.p35ef3000} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d={svgPaths.p3cf08e20} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d={svgPaths.pcc42cc0} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d="M11.667 7H16.3337" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d="M11.667 11.666H16.3337" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d="M11.667 16.334H16.3337" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                        <path d="M11.667 21H16.3337" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[#1a1a1a] text-lg leading-7 mb-2.5">{card.title}</h3>
                    <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-[26px]">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(11,132,47,0.1)] px-3 py-1.5 rounded-[19px] inline-block">
                  <p className="font-['Mukta:Bold',sans-serif] text-[#0b842f] text-xs leading-4">{card.projects} Projects</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events & Public Interaction */}
        <section className="px-4 py-12">
          <div className="text-center mb-8">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">Photo & Video Gallery</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[32px] leading-[40px] mb-4">
              <span className="text-[#1a1a1a]">Recent Events & Public</span><br />
              <span className="text-[#f60]">Interaction</span>
            </h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg leading-7 max-w-[343px] mx-auto mb-8">
              Engaging directly with citizens is at the heart of our approach. From public meetings and cultural programs to sports events and awareness campaigns, these interactions strengthen trust and participation.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <button className="bg-[#f60] px-5 py-2.5 rounded-lg flex-shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-white text-base">All</span>
            </button>
            <button className="bg-[#f60] px-5 py-2.5 rounded-lg flex-shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-white text-base">Photos</span>
            </button>
            <button className="border border-[#f60] px-5 py-2.5 rounded-lg flex-shrink-0">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-base">Videos</span>
            </button>
          </div>

          {/* Image Gallery - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Photo Card */}
            <div className="rounded-2xl overflow-hidden relative h-[160px] col-span-2">
              <img src={imgEvent} alt="Event" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.6)] to-transparent"></div>
              <div className="absolute top-3 left-3 bg-[#f60] px-3 py-1 rounded-full">
                <p className="font-['Mukta:Medium',sans-serif] text-white text-xs leading-5">Photo</p>
              </div>
              <p className="absolute bottom-3 left-3 font-['Open_Sans:Bold',sans-serif] text-white text-sm leading-6">
                Town Hall Meeting
              </p>
            </div>

            {/* Video Card */}
            <div className="rounded-2xl overflow-hidden relative h-[160px] col-span-2">
              <img src={imgEvent} alt="Event" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.6)] to-transparent"></div>
              <div className="absolute top-3 left-3 bg-[#f60] px-3 py-1 rounded-full">
                <p className="font-['Mukta:Medium',sans-serif] text-white text-xs leading-5">Video</p>
              </div>
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-[#f60] flex items-center justify-center">
                  <svg className="w-5 h-5 ml-0.5" fill="white" viewBox="0 0 48 48">
                    <path d={svgPaths.p10ba1f80} fill="white"/>
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-3 left-3 font-['Open_Sans:Bold',sans-serif] text-white text-sm leading-6">
                Town Hall Meeting
              </p>
            </div>

            {/* Regular Cards - 2 column grid */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-[160px]">
                <img src={imgEvent} alt="Event" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <button className="border border-[#f60] px-5 py-3 rounded-lg w-full">
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[#1a1a1a] text-lg">Load More Photo</span>
          </button>
        </section>

        {/* Join the Movement */}
        <section className="px-4 py-16" style={{ backgroundImage: "linear-gradient(98.6021deg, rgb(255, 102, 0) 0.34135%, rgb(11, 132, 47) 88.593%)" }}>
          <div className="text-center">
            <div className="bg-[rgba(255,255,255,0.2)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-white text-sm leading-5">Call To Action</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-white text-[32px] leading-[40px] mb-5">
              Join the Movement
            </h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.8)] text-lg leading-7 mb-6 max-w-[343px] mx-auto">
              Be a part of the development journey. Volunteer, support campaigns, and stay updated with every initiative.
            </p>

            {/* CTA Buttons - Stacked */}
            <div className="flex flex-col gap-4">
              <button className="bg-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p39559880} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                  <path d={svgPaths.p3427f480} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                  <path d={svgPaths.p3f8e7d80} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                  <path d={svgPaths.p3747f2c0} stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                </svg>
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-[#f60] text-lg">Become a Volunteer</span>
              </button>
              <button className="border border-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 w-full">
                <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p2357fa00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                  <path d={svgPaths.p14d2c600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                </svg>
                <span className="font-['Open_Sans:SemiBold',sans-serif] text-white text-lg">Get Updates</span>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-12">
          <div className="text-center mb-8">
            <div className="bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-['Mukta:Medium',sans-serif] text-[#f60] text-sm leading-5">Get in Touch</p>
            </div>
            <h2 className="font-['Open_Sans:SemiBold',sans-serif] text-[32px] leading-[40px] mb-4">
              <span className="text-[#1a1a1a]">Contact </span>
              <span className="text-[#f60]">Biman Ghosh</span>
            </h2>
            <p className="font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg leading-7 max-w-[343px] mx-auto mb-12">
              For suggestions, grievances, or public matters, feel free to connect.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f2f2f2] rounded-2xl p-6 mb-12">
            <div className="flex flex-col gap-4 mb-8">
              {/* Name */}
              <div>
                <label className="font-['Mukta:Medium',sans-serif] text-[#1a1a1a] text-lg leading-5 block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full Name"
                  className="bg-white border border-[#e6e6e6] rounded-md px-2.5 py-2.5 w-full font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-7"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-['Mukta:Medium',sans-serif] text-[#1a1a1a] text-lg leading-5 block mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white border border-[#e6e6e6] rounded-md px-2.5 py-2.5 w-full font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-7"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-['Mukta:Medium',sans-serif] text-[#1a1a1a] text-lg leading-5 block mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your full Name"
                  className="bg-white border border-[#e6e6e6] rounded-md px-2.5 py-2.5 w-full font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-7"
                />
              </div>

              {/* Query */}
              <div>
                <label className="font-['Mukta:Medium',sans-serif] text-[#1a1a1a] text-lg leading-5 block mb-2">Your Query</label>
                <input
                  type="text"
                  placeholder="Enter your full Name"
                  className="bg-white border border-[#e6e6e6] rounded-md px-2.5 py-2.5 w-full font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-7"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-['Mukta:Medium',sans-serif] text-[#1a1a1a] text-lg leading-5 block mb-2">Message</label>
                <textarea
                  placeholder="Enter your full Name"
                  rows={5}
                  className="bg-white border border-[#e6e6e6] rounded-md px-2.5 py-2.5 w-full font-['Mukta:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-base leading-7"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button className="bg-[#f60] px-5 py-3 rounded-lg w-full">
              <span className="font-['Open_Sans:SemiBold',sans-serif] text-white text-lg">Submit</span>
            </button>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <div className="pb-5 border-b border-[rgba(54,65,83,0.2)]">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p212f3d80} fill="#1A1A1A"/>
                </svg>
                <p className="font-['Mukta:Regular',sans-serif] text-[#1a1a1a] text-xl leading-7">Phone:</p>
              </div>
              <p className="font-['Outfit:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">+91 8967463346</p>
            </div>

            {/* WhatsApp */}
            <div className="pb-5 border-b border-[rgba(54,65,83,0.2)]">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p93fc700} fill="#1A1A1A"/>
                </svg>
                <p className="font-['Mukta:Regular',sans-serif] text-[#1a1a1a] text-xl leading-7">Whatsapp Number:</p>
              </div>
              <p className="font-['Outfit:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">+91 8967463346</p>
            </div>

            {/* Email */}
            <div className="pb-5 border-b border-[rgba(54,65,83,0.2)]">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3e50e500} fill="#1A1A1A"/>
                </svg>
                <p className="font-['Mukta:Regular',sans-serif] text-[#1a1a1a] text-xl leading-7">Email:</p>
              </div>
              <p className="font-['Outfit:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">contact@bimanghosh.com</p>
            </div>

            {/* Opening Hours */}
            <div className="pb-5 border-b border-[rgba(54,65,83,0.2)]">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p34d3500} fill="#1A1A1A"/>
                  <path clipRule="evenodd" d={svgPaths.p170c62f0} fill="#1A1A1A" fillRule="evenodd"/>
                  <path d="M5 1V4M15 1V4" stroke="#1A1A1A" strokeLinecap="round" strokeWidth="2"/>
                </svg>
                <p className="font-['Mukta:Regular',sans-serif] text-[#1a1a1a] text-xl leading-7">Opening Hours:</p>
              </div>
              <p className="font-['Outfit:Regular',sans-serif] text-[rgba(54,65,83,0.8)] text-lg">Monday – Saturday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center mt-12">
            <div className="w-10 h-10 rounded-full bg-[#f60] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3ae7b900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#364153] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p39373e40} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#364153] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3e2da800} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                <path d={svgPaths.p2e9a0fc0} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                <path d="M14.584 5.41602H14.5923" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#364153] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3a470400} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                <path d={svgPaths.p350a8700} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#364153] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p99e5b00} fill="#364153"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] px-4 py-12">
          {/* Logo & Description */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 102, 0) 0%, rgb(255, 128, 0) 100%)" }}>
                <span className="font-['Poppins:Bold',sans-serif] text-white text-xl leading-7">M</span>
              </div>
              <div>
                <h3 className="font-['Open_Sans:Bold',sans-serif] text-white text-xl leading-7">Shri Biman Ghosh</h3>
                <p className="font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.7)] text-base leading-5">MLA, Vidhan Sabha Constituency</p>
              </div>
            </div>
            <p className="font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.7)] text-base leading-[26px] mb-8">
              Dedicated to serving the people with transparency, integrity, and a commitment to continuous development. Together, we build a stronger tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f60] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3ae7b900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p39373e40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3e2da800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                  <path d={svgPaths.p2e9a0fc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                  <path d="M14.584 5.41602H14.5923" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3a470400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                  <path d={svgPaths.p350a8700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p17d5a380} fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,0.3)]">
            <h4 className="font-['Open_Sans:Bold',sans-serif] text-white text-lg leading-7 mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4 font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.7)] text-base leading-6">
              <a href="#about">About</a>
              <a href="#news">News</a>
              <a href="#articles">Interviews & Articles</a>
              <a href="#team">Team Members</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,0.3)]">
            <h4 className="font-['Poppins:Bold',sans-serif] text-white text-lg leading-7 mb-6">Contact</h4>
            <div className="flex flex-col gap-4 font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.7)] text-base leading-6">
              <p>Pursurah, Hooghly District,</p>
              <p>West Bengal, India</p>
              <p>+91 8967463346</p>
              <p>contact@bimanghosh.com</p>
            </div>
          </div>

          {/* Copyright & Color Dots */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f60]"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-[#0b842f]"></div>
            </div>
            <p className="font-['Mukta:Regular',sans-serif] text-[rgba(255,255,255,0.5)] text-sm leading-5 text-center">
              © 2025 Shri Biman Ghosh All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
