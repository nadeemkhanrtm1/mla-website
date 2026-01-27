"use client";

import Public from "@/assets/public_welfair.svg";
import Road from "@/assets/women.svg";
import Grass from "@/assets/grass.svg";
import Youth from "@/assets/youth_and_sports.svg";
import Comm from "@/assets/community.svg";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const KeyIntui = () => {
  const { t } = useLanguage();

  // Icon mapping based on index
  const iconMap = [Road, Public, Youth, Comm, Grass, Road];

  return (
    <section id="initiatives" className="py-20 py-40px bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14 mb-24px">
          <span className="inline-block text-[#f60] bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full text-sm mb-2 mukta-medium">
            {t.home.key.badge}
          </span>
          <h2 className="text-[44px] leading-15 text-foreground mb-4 open-sans-semibold-normal text-mobile-32">
            {t.home.key.title}{" "}
            <span className="text-gradient">{t.home.key.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground mukta-regular text-16px">
            {t.home.key.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.home.key.initiatives.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-saffron-light flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-saffron transition-colors">
                  <Image
                    src={iconMap[idx]}
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

