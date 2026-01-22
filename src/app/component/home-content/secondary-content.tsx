const SecondartContent = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 bg-gradient-saffron opacity-20"></div>
              <img
                src="/mla-shri-rajesh-kumar.jpg"
                alt="MLA Shri Rajesh Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10"></div>
            <div className="absolute -bottom-12 left-1/2 w-34 h-18 text-center rounded-lg" style={{ transform: 'translateX(-50%)', boxShadow: '0px 10px 40px 0px #0000001A' }}>
              <div className="flex flex-col bg-white rounded-lg p-2.5">
                <span className="text-sm text-[#364153CC] leading-5">Serving Since</span>
                <span className="text-xl leading-7 font-semibold text-gradient">Khanakul</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-saffron-light text-primary font-semibold rounded-full text-sm mb-4">
              About Your MLA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">Shri Susanta Ghosh</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Susanta Ghosh is a dedicated public leader and the elected Member
              of the Legislative Assembly from Khanakul. Deeply rooted in the
              constituency, he represents a brand of leadership that believes in
              action over promises and delivery over delay.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With years of continuous engagement at the grassroots level, he
              has built strong connections with people from villages, towns, and
              communities across Khanakul. His leadership style is direct,
              accessible, and firmly focused on real issues affecting everyday
              lives.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-start">
                <div className="font-semibold text-5xl leading-12 text-gradient">
                  10+
                </div>
                <span className="text-lg leading-7 text-[#364153]">
                  Years of Active Public Service
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="font-semibold text-5xl leading-12 text-[#117707]">
                  100+
                </div>
                <span className="text-lg leading-7 text-[#364153]">
                  Development Initiatives & Public Programs
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="font-semibold text-5xl leading-12 text-gradient">
                  05K
                </div>
                <span className="text-lg leading-7 text-[#364153]">
                  Citizens Directly Impacted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondartContent;
