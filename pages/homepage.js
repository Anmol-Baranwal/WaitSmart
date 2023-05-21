import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import TechStack from "@/components/TechStack/TechStack";
import Team from "@/components/Team/Team";
import WorkFlow from "@/components/Workflow/workflow";
import ExcitingFeatures from "@/components/ExcitingFeatures/ExcitingFeatures";
import Faq from "@/components/Faq/Faq";
import Navbar from "@/components/Navbar/Navbar";
// import Testimonial from "@/components/Testimonial/Testimonial";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ExcitingFeatures />
      <TechStack />
      <Team />
      <WorkFlow />
      <Faq />
      <Subscribe />
      <Footer />
      {/* <Testimonial /> */}
    </>
  );
}
