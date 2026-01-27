"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  type: "photo" | "video";
}

interface FilterButtonProps {
  label: string;
  value: "all" | "photo" | "video";
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer h-10 px-5 py-2.5 rounded-lg flex justify-center items-center gap-1.5 transition-all ${isActive ? "bg-[#ff6600]" : "outline outline-1 outline-[#ff6600]"
      }`}
  >
    <div
      className={`text-center text-base font-semibold font-['Open_Sans'] ${isActive ? "text-white" : "text-[#1a1a1a]"
        }`}
    >
      {label}
    </div>
  </div>
);

const Gallery = () => {
  const { t } = useLanguage();

  const defaultGalleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/gallery_image_1.png",
      alt: t.home.gallery.items[0].alt,
      title: t.home.gallery.items[0].title,
      type: "photo",
    },
    {
      id: 2,
      src: "/gallery_video_1.mp4",
      alt: t.home.gallery.items[1].alt,
      title: t.home.gallery.items[1].title,
      type: "video",
    },
    {
      id: 3,
      src: "/gallery_video_2.mp4",
      alt: t.home.gallery.items[2].alt,
      title: t.home.gallery.items[2].title,
      type: "video",
    },
    {
      id: 4,
      src: "/gallery_image_2.png",
      alt: t.home.gallery.items[3].alt,
      title: t.home.gallery.items[3].title,
      type: "photo",
    },
    {
      id: 5,
      src: "/gallery_image_3.png",
      alt: t.home.gallery.items[4].alt,
      title: t.home.gallery.items[4].title,
      type: "photo",
    },
    {
      id: 6,
      src: "/gallery_image_4.png",
      alt: t.home.gallery.items[5].alt,
      title: t.home.gallery.items[5].title,
      type: "photo",
    },
    {
      id: 7,
      src: '/gallery_video_3.mp4',
      alt: "",
      title: "",
      type: "video",
    },
    {
      id: 8,
      src: "/gallery_image_5.JPG",
      alt: t.home.gallery.items[6].alt,
      title: t.home.gallery.items[6].title,
      type: "photo",
    },
    {
      id: 9,
      src: "/gallery_image_6.jpg",
      alt: t.home.gallery.items[7].alt,
      title: t.home.gallery.items[7].title,
      type: "photo",
    },
    {
      id: 10,
      src: "/gallery_image_7.jpg",
      alt: t.home.gallery.items[8].alt,
      title: t.home.gallery.items[8].title,
      type: "photo",
    },
    {
      id: 11,
      src: "/gallery_image_8.jpg",
      alt: t.home.gallery.items[9].alt,
      title: t.home.gallery.items[9].title,
      type: "photo",
    },
    {
      id: 12,
      src: "/gallery_image_9.jpg",
      alt: t.home.gallery.items[10].alt,
      title: t.home.gallery.items[10].title,
      type: "photo",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "photo" | "video">(
    "all",
  );

  const [allItems, setAllItems] = useState<GalleryItem[]>(defaultGalleryItems);
  const [visibleCount, setVisibleCount] = useState(6);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      // Set initial visible count based on screen size
      setVisibleCount(mobile ? 4 : 6);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filters: Array<{ label: string; value: "all" | "photo" | "video" }> = [
    { label: t.home.gallery.filters.all, value: "all" },
    { label: t.home.gallery.filters.photos, value: "photo" },
    { label: t.home.gallery.filters.videos, value: "video" },
  ];

  const handlerFilterClick = (filterValue: "all" | "photo" | "video") => () => {
    setActiveFilter(filterValue);
    setVisibleCount(isMobile ? 4 : 6); // Reset visible count when filter changes
    if (filterValue === "all") {
      setAllItems(defaultGalleryItems);
    } else if (filterValue === "photo") {
      setAllItems(defaultGalleryItems.filter((item) => item.type === "photo"));
    } else if (filterValue === "video") {
      setAllItems(defaultGalleryItems.filter((item) => item.type === "video"));
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + (isMobile ? 4 : 6));
  };

  const handleShowLess = () => {
    setVisibleCount(isMobile ? 4 : 6);
  };

  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;
  const canShowLess = visibleCount > (isMobile ? 4 : 6);

  return (
    <section id="gallery" className="py-30 py-40px bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 mb-24px">
          <span className="inline-block text-[#f60] bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full text-sm mb-2 mukta-medium">
            {t.home.gallery.badge}
          </span>
          <h2 className="text-[44px] leading-15 text-foreground mb-4 open-sans-semibold-normal text-mobile-32">
            {t.home.gallery.title}{" "}
            <span className="text-gradient">{t.home.gallery.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground mukta-regular text-16px">
            {t.home.gallery.description}
          </p>
        </div>

        <div className="flex mx-auto justify-center items-center gap-3 mb-12 mb-32px">
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              label={filter.label}
              value={filter.value}
              isActive={activeFilter === filter.value}
              onClick={handlerFilterClick(filter.value)}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visibleItems?.map((item: any) => (
            <div
              key={item.id}
              className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-500"
                  controls
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {item.type === "photo" && (
                <>
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-background font-heading font-semibold">
                      {item.title}
                    </span>
                  </div>
                </>
              )}

              <div className="absolute top-4 left-4 bg-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow h-8 px-4 py-2 bg-[#ff6600] rounded-full inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-center text-white text-sm font-medium font-['Mukta'] leading-5">
                  {item.type.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {(hasMore || canShowLess) && (
          <div className="text-center w-full mt-8 flex gap-4 justify-center">
            {/* On mobile: show only Load More if hasMore, otherwise show Show Less */}
            {/* On desktop: show both buttons if applicable */}
            {isMobile ? (
              <>
                {hasMore ? (
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base"
                  >
                    {t.home.gallery.loadMoreButton}
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
                      className="lucide lucide-arrow-down w-4 h-4"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </button>
                ) : canShowLess ? (
                  <button
                    onClick={handleShowLess}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base"
                  >
                    {t.home.gallery.showLessButton}
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
                      className="lucide lucide-arrow-up w-4 h-4"
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </button>
                ) : null}
              </>
            ) : (
              <>
                {hasMore && (
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base"
                  >
                    {t.home.gallery.loadMoreButton}
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
                      className="lucide lucide-arrow-down w-4 h-4"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </button>
                )}

                {canShowLess && (
                  <button
                    onClick={handleShowLess}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-md px-8 text-base"
                  >
                    {t.home.gallery.showLessButton}
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
                      className="lucide lucide-arrow-up w-4 h-4"
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
