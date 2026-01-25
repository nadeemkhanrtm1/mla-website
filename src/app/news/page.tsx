"use client";

import React, { useState } from "react";
import {
  Calendar,
  ArrowRight,
  Search,
  Filter,
  Clock,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import MainBanner from "../component/main-banner/main-banner";
import { Input } from "../component/ui/Input";
import { Button } from "../component/ui/Button";
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
    date: "December 10, 2024",
    category: "Development",
    title: "MLA Inaugurates New Community Center in Sector 15",
    excerpt:
      "A state-of-the-art community center with facilities for youth activities and senior citizen programs was inaugurated today.",
    content:
      "The new community center will serve over 5,000 families in the area with modern amenities including a library, computer lab, and recreational facilities.",
    author: "Press Office",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    date: "December 8, 2024",
    category: "Infrastructure",
    title: "Road Redevelopment Work Started in Ward 7",
    excerpt:
      "Major infrastructure upgrade project begins, expected to benefit over 10,000 residents with improved connectivity.",
    content:
      "The Rs. 5 crore project will include road widening, drainage systems, and new streetlights.",
    author: "Development Cell",
    image:
      "https://images.unsplash.com/photo-1590496793907-51d60c2ae95a?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    date: "December 5, 2024",
    category: "Healthcare",
    title: "Free Medical Camp Organized for Senior Citizens",
    excerpt:
      "Over 500 elderly citizens received free health checkups and medicines at the mega health camp.",
    content:
      "Specialists from various departments provided consultations including cardiology, orthopedics, and general medicine.",
    author: "Health Department",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    date: "December 1, 2024",
    category: "Youth",
    title: "Meeting with Youth Groups on Employment Opportunities",
    excerpt:
      "Discussed skill development programs and job placement initiatives for local youth.",
    content:
      "MLA announced new skill development centers to be opened in 3 locations within the constituency.",
    author: "Youth Affairs",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    date: "November 28, 2024",
    category: "Welfare",
    title: "Women Self-Help Group Initiative Launched",
    excerpt:
      "New initiative to support women entrepreneurs with training and micro-finance opportunities.",
    content:
      "The program aims to empower 1,000 women with skills training and access to credit facilities.",
    author: "Women Welfare",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    date: "November 25, 2024",
    category: "Education",
    title: "Smart Classroom Project Inaugurated in Government School",
    excerpt:
      "Digital learning facilities introduced to enhance quality of education for students.",
    content:
      "The smart classroom project will benefit over 2,000 students with interactive learning tools.",
    author: "Education Cell",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 7,
    date: "November 20, 2024",
    category: "Infrastructure",
    title: "New Water Pipeline Project Completed",
    excerpt:
      "Clean drinking water now available to 3,000 additional households in the constituency.",
    content:
      "The Rs. 2 crore water supply project ensures 24x7 clean water availability.",
    author: "PWD Department",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 8,
    date: "November 15, 2024",
    category: "Development",
    title: "Street Light Installation Drive Completed",
    excerpt:
      "Over 500 new LED streetlights installed across 10 wards for better safety.",
    content:
      "The initiative has improved night-time safety and reduced crime rates in the area.",
    author: "Municipal Office",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    featured: false,
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

      <section className="bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
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

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredNews.map((news) => (
                <article
                  key={news.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {news.author}
                      </div>
                      <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleNews.map((news) => (
                  <article
                    key={news.id}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                          {news.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {news.excerpt}
                      </p>
                      <button className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                        Read Full Article <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
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
