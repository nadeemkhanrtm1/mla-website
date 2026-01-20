import React from "react";

const initiatives = [
  {
    title: "Road & Infrastructure",
    description:
      "Strengthening connectivity through road construction, repair, and drainage projects.",
    stat: "20+ Projects",
    icon: (
      <svg
        className="lucide lucide-users w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="12" fill="#FFF2E6" />
        <path
          d="M21 39.6673V18.6673C21 18.0485 21.2458 17.455 21.6834 17.0174C22.121 16.5798 22.7145 16.334 23.3333 16.334H32.6667C33.2855 16.334 33.879 16.5798 34.3166 17.0174C34.7542 17.455 35 18.0485 35 18.6673V39.6673H21Z"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9997 28H18.6663C18.0475 28 17.454 28.2458 17.0164 28.6834C16.5788 29.121 16.333 29.7145 16.333 30.3333V37.3333C16.333 37.9522 16.5788 38.5457 17.0164 38.9832C17.454 39.4208 18.0475 39.6667 18.6663 39.6667H20.9997"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 24.5H37.3333C37.9522 24.5 38.5457 24.7458 38.9832 25.1834C39.4208 25.621 39.6667 26.2145 39.6667 26.8333V37.3333C39.6667 37.9522 39.4208 38.5457 38.9832 38.9832C38.5457 39.4208 37.9522 39.6667 37.3333 39.6667H35"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 21H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 25.666H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 30.334H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 35H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Public Welfare Programs",
    description:
      "Implementation of central government schemes for housing, health, and financial inclusion.",
    stat: "50+ Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="12" fill="#FFF2E6" />
        <path
          d="M21 39.6673V18.6673C21 18.0485 21.2458 17.455 21.6834 17.0174C22.121 16.5798 22.7145 16.334 23.3333 16.334H32.6667C33.2855 16.334 33.879 16.5798 34.3166 17.0174C34.7542 17.455 35 18.0485 35 18.6673V39.6673H21Z"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9997 28H18.6663C18.0475 28 17.454 28.2458 17.0164 28.6834C16.5788 29.121 16.333 29.7145 16.333 30.3333V37.3333C16.333 37.9522 16.5788 38.5457 17.0164 38.9832C17.454 39.4208 18.0475 39.6667 18.6663 39.6667H20.9997"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 24.5H37.3333C37.9522 24.5 38.5457 24.7458 38.9832 25.1834C39.4208 25.621 39.6667 26.2145 39.6667 26.8333V37.3333C39.6667 37.9522 39.4208 38.5457 38.9832 38.9832C38.5457 39.4208 37.9522 39.6667 37.3333 39.6667H35"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 21H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 25.666H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 30.334H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 35H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Youth & Sports Promotion",
    description:
      "Organizing sports tournaments like MLA CUP to encourage youth participation and talent development.",
    stat: "100+ Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="12" fill="#FFF2E6" />
        <path
          d="M21 39.6673V18.6673C21 18.0485 21.2458 17.455 21.6834 17.0174C22.121 16.5798 22.7145 16.334 23.3333 16.334H32.6667C33.2855 16.334 33.879 16.5798 34.3166 17.0174C34.7542 17.455 35 18.0485 35 18.6673V39.6673H21Z"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9997 28H18.6663C18.0475 28 17.454 28.2458 17.0164 28.6834C16.5788 29.121 16.333 29.7145 16.333 30.3333V37.3333C16.333 37.9522 16.5788 38.5457 17.0164 38.9832C17.454 39.4208 18.0475 39.6667 18.6663 39.6667H20.9997"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 24.5H37.3333C37.9522 24.5 38.5457 24.7458 38.9832 25.1834C39.4208 25.621 39.6667 26.2145 39.6667 26.8333V37.3333C39.6667 37.9522 39.4208 38.5457 38.9832 38.9832C38.5457 39.4208 37.9522 39.6667 37.3333 39.6667H35"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 21H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 25.666H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 30.334H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 35H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Community Safety & Awareness",
    description:
      "Public awareness programs on women’s safety, law & order, and social responsibility",
    stat: "70+ Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="12" fill="#FFF2E6" />
        <path
          d="M21 39.6673V18.6673C21 18.0485 21.2458 17.455 21.6834 17.0174C22.121 16.5798 22.7145 16.334 23.3333 16.334H32.6667C33.2855 16.334 33.879 16.5798 34.3166 17.0174C34.7542 17.455 35 18.0485 35 18.6673V39.6673H21Z"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9997 28H18.6663C18.0475 28 17.454 28.2458 17.0164 28.6834C16.5788 29.121 16.333 29.7145 16.333 30.3333V37.3333C16.333 37.9522 16.5788 38.5457 17.0164 38.9832C17.454 39.4208 18.0475 39.6667 18.6663 39.6667H20.9997"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 24.5H37.3333C37.9522 24.5 38.5457 24.7458 38.9832 25.1834C39.4208 25.621 39.6667 26.2145 39.6667 26.8333V37.3333C39.6667 37.9522 39.4208 38.5457 38.9832 38.9832C38.5457 39.4208 37.9522 39.6667 37.3333 39.6667H35"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 21H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 25.666H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 30.334H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 35H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Grassroots Outreach",
    description:
      "Regular constituency visits, grievance redressal meetings, and direct citizen interaction.",
    stat: "110+ Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Grassroots Outreach",
    description:
      "Regular constituency visits, grievance redressal meetings, and direct citizen interaction.",
    stat: "110+ Projects",
    icon: (
      <svg
        className="lucide lucide-users w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" rx="12" fill="#FFF2E6" />
        <path
          d="M21 39.6673V18.6673C21 18.0485 21.2458 17.455 21.6834 17.0174C22.121 16.5798 22.7145 16.334 23.3333 16.334H32.6667C33.2855 16.334 33.879 16.5798 34.3166 17.0174C34.7542 17.455 35 18.0485 35 18.6673V39.6673H21Z"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9997 28H18.6663C18.0475 28 17.454 28.2458 17.0164 28.6834C16.5788 29.121 16.333 29.7145 16.333 30.3333V37.3333C16.333 37.9522 16.5788 38.5457 17.0164 38.9832C17.454 39.4208 18.0475 39.6667 18.6663 39.6667H20.9997"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 24.5H37.3333C37.9522 24.5 38.5457 24.7458 38.9832 25.1834C39.4208 25.621 39.6667 26.2145 39.6667 26.8333V37.3333C39.6667 37.9522 39.4208 38.5457 38.9832 38.9832C38.5457 39.4208 37.9522 39.6667 37.3333 39.6667H35"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 21H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 25.666H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 30.334H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.667 35H30.3337"
          stroke="#FF6600"
          stroke-width="2.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const KeyIntui = () => {
  return (
    <section id="initiatives" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Key Initiatives &amp;{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real progress through dedicated action. Here are the key initiatives
            transforming our constituency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <div
              key={item.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-saffron-light flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-saffron transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-xs">
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
