const MainBanner = ({
  bannerTitle,
  subTitle,
  pillText,
}: {
  bannerTitle: string;
  subTitle: string;
  pillText?: string;
}) => {
  return (
    <div className="py-20 md:py-28 bg-flag-color relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-col justify-start items-center gap-4">
            {pillText && (
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-[2px] inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-center text-white text-sm font-medium font-['Mukta'] leading-5">
                  {pillText}
                </div>
              </div>
            )}
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="text-background text-[44px] leading-15 open-sans-semibold-normal">
                {bannerTitle}
              </div>
            </div>
            <div className="text-lg text-muted-foreground mukta-regular text-white">
              {subTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
