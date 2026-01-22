const HeroContent = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen bg-[#FF6600]"
      >
        <div className="relative container mx-auto px-4 md:pt-50">
          <div className="absolute z-10 px-4 text-white lg:w-[50%] w-1/2 left-0">
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
        </div>
          <div className="absolute w-full custom-wave bg-white h-32 bottom-0 left-0"></div>
      </section>
    </>
  );
};

export default HeroContent;
