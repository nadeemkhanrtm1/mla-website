const MainBanner = ({
  bannerTitle,
  subTitle,
}: {
  bannerTitle: string;
  subTitle: string;
}) => {
  return (
    <div className="py-20 md:py-28 bg-flag-color relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-col justify-start items-center gap-4">
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
