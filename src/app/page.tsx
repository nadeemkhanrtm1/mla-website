import AboutContent from "./component/home-content/about-content";
import Gallery from "./component/home-content/gallery";
import HeroContent from "./component/home-content/hero-content";
import JoinTheMoment from "./component/home-content/join-the-moment";
import KeyIntui from "./component/home-content/key-ini";

export default function App() {
  return (
    <>
      <HeroContent />
      <AboutContent />
      <KeyIntui />
      <Gallery />
      <JoinTheMoment />
    </>
  );
}
