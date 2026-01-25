"use client";

import React, { useState } from 'react'
import Image from 'next/image';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  type: "photo" | "video";
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/gallery_image_1.png",
    alt: "Public meeting with citizens",
    title: "Education & Legacy at Balai Chak High School",
    type: "photo",
  },
  {
    id: "2",
    src: "/gallery_video_1.mp4",
    alt: "PM Modi at Poriborton Sankalpa Sabha in Singur",
    title: "PM Modi at Poriborton Sankalpa Sabha in Singur",
    type: "video",
  },
  {
    id: "3",
    src: "/gallery_video_2.mp4",
    alt: "Run For Youth: Khanakul's Young Energy",
    title: "Run For Youth: Khanakul's Young Energy",
    type: "video",
  },
  {
    id: "4",
    src: "/gallery_image_2.png",
    alt: "Courtyard meetings to hear Khanakul's people",
    title: "Courtyard meetings to hear Khanakul's people",
    type: "photo",
  },
  {
    id: "5",
    src: "/gallery_image_3.png",
    alt: "It is an investment in Khanakul's future.",
    title: "It is an investment in Khanakul's future.",
    type: "photo",
  },
  {
    id: "6",
    src: "/gallery_image_4.png",
    alt: "Khanakul is ready for change.",
    title: "Khanakul is ready for change.",
    type: "photo",
  },
];

const Gallery = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
    const el = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
    if (el) {
      el.play();
    }
  };

  const handleVideoEnd = (videoId: string) => {
    setPlayingVideoId(null);
  };

  return (
    <section id="gallery" className="py-30 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-[#f60] bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full text-sm mb-2 mukta-medium">
            Photo Gallery
          </span>
          <h2 className="text-[44px] leading-15 text-foreground mb-4 open-sans-semibold-normal">
            Recent Events &amp;{" "}
            <span className="text-gradient">Public Interaction</span>
          </h2>
          <p className="text-lg text-muted-foreground mukta-regular">
            Glimpses of our continuous efforts to connect with and serve the
            people.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {defaultGalleryItems?.map((item: any) => (
            <div
              key={item.id}
              className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  id={`video-${item.id}`}
                  onPlay={() => setPlayingVideoId(item.id)}
                  onPause={() => setPlayingVideoId(null)}
                  onEnded={() => handleVideoEnd(item.id)}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {item.type === "video" && playingVideoId !== item.id && (
                <div
                  className="absolute z-100 top-1/2 left-1/2 transform -translate-x-4.5 -translate-y-4.5 cursor-pointer"
                  onClick={() => handlePlayVideo(item.id)}
                >
                  <Image
                    src="play_icon.png"
                    alt="Play video"
                    className="w-12 h-12"
                    unoptimized
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-background font-heading font-semibold">
                  {item.title}
                </span>
              </div>
              <div className="absolute top-4 left-4 bg-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow h-8 px-4 py-2 bg-[#ff6600] rounded-full inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-center text-white text-sm font-medium font-['Mukta'] leading-5">
                  {item.type.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery