import AboutUs from "@/components/About/AboutUs";
import Breadcrumbs from "@/components/About/Breadcrumbs";
import FeatureCards from "@/components/shared/FeatureCards";
import Footer from "@/components/shared/Footer";

const About = () => {
  return (
    <div className="mt-4 sm:pb-[50px]">
      <Breadcrumbs />
      <AboutUs />
      <div className="flex px-6 sm:px-[60px] xl:px-[100px] w-full my-8 sm:my-10">
        <FeatureCards />
      </div>
      <Footer />
    </div>
  );
};

export default About;
