"use client";
import Gallery from "../component/home-content/gallery";
import MainBanner from "../component/main-banner/main-banner";
import { useLanguage } from "@/app/context/LanguageContext";

const GalleryPage = () => {
  const { t } = useLanguage();

  return (
    <main>
      <MainBanner
        bannerTitle={t.gallery.banner.title}
        subTitle={t.gallery.banner.subtitle}
      />
      <Gallery />
    </main>
  );
};

export default GalleryPage;
