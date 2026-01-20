const HeroContent = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#FF6600] z-10"></div>
        <div className="absolute z-10 px-4 text-white w-1/3 left-0">
          <div
            className="inline px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full border border-background/30 animation-delay-200"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-medium text-background">
              Rising for the nation
            </span>
          </div>
          <h1 className="text-7xl md:text-6xl font-bold mb-4 mt-4">
            Rising for the Nation. Fighting for Khanakul.
          </h1>
          <p className="mb-4">
            A strong grassroots leader committed to development, decisive
            governance, and people-first politics. Working relentlessly to
            ensure that the voice of Khanakul is heard, respected, and acted
            upon.
          </p>

          <button className="inline-flex cursor-pointer text-[#FF6600] items-center justify-center gap-2 whitespace-nowrap font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background text-primary border-2 border-background hover:bg-transparent hover:text-background hover:border-background font-bold shadow-elevated h-14 rounded-lg px-10 text-lg">
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right w-5 h-5"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"></path></svg></div>
      </section>
    </>
  );
};

export default HeroContent;
