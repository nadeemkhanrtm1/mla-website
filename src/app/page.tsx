import AboutContent from "./component/home-content/about-content";
import Form from "./component/home-content/form";
import Gallery from "./component/home-content/gallery";
import HeroContent from "./component/home-content/hero-content";
import JoinTheMoment from "./component/home-content/join-the-moment";
import KeyIntui from "./component/home-content/key-ini";
import News from "./component/home-content/news";
import SecondartContent from "./component/home-content/secondary-content";

export default function App() {
  return (
    <>
      <HeroContent />
      <SecondartContent />
      <AboutContent />
      <News />
      <KeyIntui />
      <Gallery />
      <JoinTheMoment />
      <Form />
    </>
  );
}
