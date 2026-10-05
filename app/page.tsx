import About from "./_components/sections/About";
import Categories from "./_components/sections/Categories";
import Collaboration from "./_components/sections/Collaboration";
import FeaturedContent from "./_components/sections/FeaturedContent";
import Hero from "./_components/sections/Hero";
import LatestContent from "./_components/sections/LatestContent";
import SocialPlatforms from "./_components/sections/SocialPlatforms";

function page() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedContent />
      <Categories />
      <SocialPlatforms />
      <LatestContent />
      <Collaboration />
    </>
  );
}

export default page;
