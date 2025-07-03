import { HeroSection } from "../../sections/HeroSection/HeroSection";
// import { ContinueWatchingSection } from '../sections/ContinueWatchingSection';
// import { PopularSection } from '../sections/PopularSection';
// import { TrailerSection } from '../sections/TrailerSection';
// import { GenreSection } from '../sections/GenreSection';

const HomeLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      {/* <ContinueWatchingSection />
      <PopularSection />
      <TrailerSection />
      <GenreSection /> */}
    </div>
  );
};

export default HomeLayout;