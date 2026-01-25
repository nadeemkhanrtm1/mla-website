import Gallery from "../component/home-content/gallery";
import MainBanner from "../component/main-banner/main-banner";

const GalleryPage = () => {
  return (
    <main>
      <MainBanner bannerTitle="Gallery" subTitle="Explore our photo gallery"/>
      <Gallery/>
    </main>
  );
};

export default GalleryPage;
