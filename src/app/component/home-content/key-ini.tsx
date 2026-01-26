import Public from "@/assets/public_welfair.svg";
import Road from "@/assets/women.svg";
import Grass from "@/assets/grass.svg";
import Youth from "@/assets/youth_and_sports.svg";
import Comm from "@/assets/community.svg";
import Image from "next/image";

const initiatives = [
  {
    title: "Road & Infrastructure",
    description:
      "Strengthening connectivity through road construction, repair, and drainage projects.",
    stat: "20+ Projects",
    icon: Road,
  },
  {
    title: "Public Welfare Programs",
    description:
      "Implementation of central government schemes for housing, health, and financial inclusion.",
    stat: "50+ Projects",
    icon: (
      Public
    ),
  },
  {
    title: "Youth & Sports Promotion",
    description:
      "Organizing sports tournaments like MLA CUP to encourage youth participation and talent development.",
    stat: "100+ Projects",
    icon: (
     Youth
    ),
  },
  {
    title: "Community Safety & Awareness",
    description:
      "Public awareness programs on women’s safety, law & order, and social responsibility",
    stat: "70+ Projects",
    icon: (
      Comm
    ),
  },
  {
    title: "Grassroots Outreach",
    description:
      "Regular constituency visits, grievance redressal meetings, and direct citizen interaction.",
    stat: "110+ Projects",
    icon: (
      Grass
    ),
  },
  {
    title: "Women Enpowerment",
    description:
      "Self-help groups, safety initiatives & employment support programs in Khanakul",
    stat: "110+ Projects",
    icon: Road,
  },
];

const KeyIntui = () => {
  return (
    <section id="initiatives" className="py-20 py-40px bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14 mb-24px">
          <span className="inline-block text-[#f60] bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full text-sm mb-2 mukta-medium">
            Our Work
          </span>
          <h2 className="text-[44px] leading-15 text-foreground mb-4 open-sans-semibold-normal text-mobile-32">
            Key Initiatives &amp;{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground mukta-regular text-16px">
            A snapshot of impactful initiatives undertaken to improve lives and
            strengthen infrastructure in the Pursurah constituency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <div
              key={item.title}
              className="cursor-pointer group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-saffron-light flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-saffron transition-colors">
                  <Image
                    src={item.icon}
                    unoptimized
                    alt=""
                    className="lucide lucide-users w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-foreground mb-2 open-sans-bold-normal text-16px">
                    {item.title}
                  </h3>
                  <p className="mukta-regular text-muted-foreground text-[16px] leading-6.5 mb-3">
                    {item.description}
                  </p>
                  <span className="mukta-bold inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-xs">
                    {item.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyIntui;
