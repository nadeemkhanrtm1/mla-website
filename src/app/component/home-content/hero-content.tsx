import Image from "next/image";

const HeroContent = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-188.5"
        style={{
          background: "linear-gradient(132deg, #FF6600 0%, #0B842F 100%)",
        }}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="px-4 text-white flex-1">
            <span
              className="px-4 mukta-medium text-background text-sm font-medium py-2 bg-background/20 backdrop-blur-sm rounded-full border border-background/30 animation-delay-200"
              style={{ animationDelay: "0.1s" }}
            >
              Rising for the nation
            </span>

            <h1 className="text-5xl max-w-[550px] leading-16 font-semibold open-sans-semibold-normal mb-4 mt-6">
              Rising for the Nation. Fighting for Khanakul.
            </h1>

            <p className="mb-6 max-w-[490px] mukta-medium text-xl">
              A strong grassroots leader committed to development, decisive
              governance, and people-first politics. Working relentlessly to
              ensure that the voice of Khanakul is heard, respected, and acted
              upon.
            </p>
            
            <button className="inline-flex cursor-pointer text-[#FF6600] items-center justify-center gap-2 whitespace-nowrap font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background text-primary border-2 border-background hover:bg-transparent hover:text-background hover:border-background font-bold shadow-elevated h-14 rounded-lg px-10 text-lg open-sans-semibold-normal">
              Explore the Vision
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right w-5 h-5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
          <Image
            src="/hero_image.png"
            alt="Hero Image"
            className="w-[477px] h-[630px] relative -bottom-16"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="absolute w-full h-32 bottom-0 left-0">
          <Image
            src="/hero_bottom_img.png"
            className="w-full h-full"
            alt="Wave"
            unoptimized
            width={100}
            height={100}
          />
        </div>
      </section>
    </>
  );
};

export default HeroContent;
