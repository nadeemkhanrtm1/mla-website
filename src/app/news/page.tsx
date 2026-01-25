"use client";

import { useState } from "react";
import { ArrowRight, Search, Filter } from "lucide-react";
import MainBanner from "../component/main-banner/main-banner";
import { Input } from "../component/ui/Input";
import { Button } from "../component/ui/Button";
import Image from "next/image";
import Link from "next/link";
const categories = [
  "All",
  "Development",
  "Infrastructure",
  "Healthcare",
  "Youth",
  "Welfare",
  "Education",
];

const allNews = [
  {
    id: 1,
    date: "January 17, 2026",
    category: "Education",
    title: "Celebrating Education & Legacy at Balai Chak High School, Chingra",
    excerpt:
      "Education remains the foundation of a strong society. In (Diamond Jubilee) celebration",
    content: "",
    author: "",
    image: "/news_updates_ar_1.png",
    featured: true,
    navigation:
      "/news/celebrating-education-legacy-at-balai-chak-high-school-chingra",
  },
  {
    id: 2,
    date: "January 18, 2026",
    category: "Healthcare",
    title: "Hon’ble Prime Minister Narendra Modi Attends Poriborton Sankalpa ",
    excerpt:
      "the safety of daughters is at risk, the education system has fallen into the hands of mafias,",
    content: "",
    author: "",
    image: "/news_updates_ar_2.png",
    featured: true,
    navigation:
      "/news/honble-prime-minister-narendra-modi-attends-poriborton-sankalpa",
  },
  {
    id: 3,
    date: "January 12, 2026",
    category: "Youth",
    title: "Run For Youth: Khanakul’s Young Energy on the Streets",
    excerpt:
      "Running from Ramnagar to Chakpur, the marathon was not just about physical endurance",
    content: "",
    author: "",
    image: "/news_updates_ar_3.png",
    featured: false,
    navigation: "/news/run-for-youth-khanakuls-young-energy-on-the-streets",
  },
  {
    id: 4,
    date: "January 10, 2026",
    category: "Welfare",
    title: "Listen to People’s Voices in Khanakul",
    excerpt:
      "To stay close to the people and understand their real problems, Uthan Baithak",
    content: "",
    author: "",
    image: "/news_updates_ar_4.png",
    featured: false,
    navigation: "/news/listen-to-peoples-voices-in-khanakul",
  },
  {
    id: 5,
    date: "January 09, 2026",
    category: "Development",
    title: "Poriborton Sankalpa Sabha at Chingra",
    excerpt:
      "The meeting was attended by Hon’ble Member of Parliament Locket Chatterjee",
    content: "",
    author: "",
    image: "/news_updates_ar_5.png",
    featured: false,
    navigation: "/news/poriborton-sankalpa-sabha-at-chingra",
  },
];

const NewsAndUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredNews = allNews.filter((news) => {
    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = allNews.filter((news) => news.featured);
  const visibleNews = filteredNews.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <MainBanner
        bannerTitle="News & Updates"
        subTitle="Stay informed about the latest developments, initiatives, and announcements from the constituency."
      />

      {/* Filter Bar */}
      <section className="bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-3 w-5 h-5 text-muted-foreground"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              />

              <Input
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Featured News
              </h2>
            </div>

            <div className="flex flex-wrap gap-6">
              {featuredNews.map((news) => (
                <Link
                  href={news.navigation}
                  key={news.id}
                  className="w-102.75 group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
                  style={{ borderColor: "#FF6600" }}
                >
                  <div
                    style={{ height: "222px" }}
                    className="w-full overflow-hidden"
                  >
                    <Image
                      className="w-full h-full group-hover:scale-105 duration-500"
                      src={news.image}
                      alt={news.title}
                      unoptimized
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-2.5 p-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="inline-flex justify-start items-center gap-6">
                        <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
                          <div className="text-center justify-center text-[#ff6600] text-xs font-bold font-['Mukta'] leading-4">
                            {news.category}
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <div className="w-4 h-4 relative">
                            <div className="w-0 h-[2.67px] left-[5.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                            <div className="w-0 h-[2.67px] left-[10.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                            <div className="w-3 h-3 left-[2px] top-[2.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                            <div className="w-3 h-0 left-[2px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                          </div>
                          <div className="w-[123.36px] h-5 justify-center text-[#364153]/80 text-sm font-normal font-['Mukta'] leading-5">
                            {news.date}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-[#1a1a1a] text-lg font-bold font-['Open_Sans'] leading-7">
                          {news.title}
                        </div>
                        <div className="self-stretch justify-center text-[#364153]/80 text-base font-normal font-['Mukta'] leading-[26px]">
                          {news.excerpt}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-end gap-2">
                      <div className="flex items-center gap-2.5 text-center justify-center text-[#ff6600] text-base font-medium font-['Mukta'] leading-6">
                        Read More{" "}
                        <ArrowRight className="w-4 h-4 inline-block" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {selectedCategory === "All"
                ? "All News"
                : `${selectedCategory} News`}
            </h2>
            <span className="ml-auto text-muted-foreground text-sm">
              {filteredNews.length} articles found
            </span>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No news found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-6">
                {visibleNews.map((news) => (
                  <Link
                    key={news.id}
                    className="w-102.75 group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
                    style={{ borderColor: "#FF6600" }}
                    href={news.navigation}
                  >
                    <div
                      style={{ height: "222px" }}
                      className="w-full overflow-hidden"
                    >
                      <Image
                        className="w-full h-full group-hover:scale-105 duration-500"
                        src={news.image}
                        alt={news.title}
                        unoptimized
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-2.5 p-4">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div className="inline-flex justify-start items-center gap-6">
                          <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
                            <div className="text-center justify-center text-[#ff6600] text-xs font-bold font-['Mukta'] leading-4">
                              {news.category}
                            </div>
                          </div>
                          <div className="flex justify-start items-center gap-2">
                            <div className="w-4 h-4 relative">
                              <div className="w-0 h-[2.67px] left-[5.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                              <div className="w-0 h-[2.67px] left-[10.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                              <div className="w-3 h-3 left-[2px] top-[2.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                              <div className="w-3 h-0 left-[2px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-[#364153]/80" />
                            </div>
                            <div className="w-[123.36px] h-5 justify-center text-[#364153]/80 text-sm font-normal font-['Mukta'] leading-5">
                              {news.date}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch justify-center text-[#1a1a1a] text-lg font-bold font-['Open_Sans'] leading-7">
                            {news.title}
                          </div>
                          <div className="self-stretch justify-center text-[#364153]/80 text-base font-normal font-['Mukta'] leading-[26px]">
                            {news.excerpt}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex justify-start items-end gap-2">
                        <div className="flex items-center gap-2.5 text-center justify-center text-[#ff6600] text-base font-medium font-['Mukta'] leading-6">
                          Read More{" "}
                          <ArrowRight className="w-4 h-4 inline-block" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {visibleCount < filteredNews.length && (
                <div className="text-center mt-12">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    className="px-8"
                  >
                    Load More News
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    Showing {visibleNews.length} of {filteredNews.length}{" "}
                    articles
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsAndUpdates;
