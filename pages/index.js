import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import TechStack from "@/components/TechStack/TechStack";
import Team from "@/components/Team/Team";
import WorkFlow from "@/components/Workflow/workflow";
// import Testimonial from "@/components/Testimonial/Testimonial";
import ExcitingFeatures from "@/components/ExcitingFeatures/ExcitingFeatures";

export default function Home() {
  return (
    <>
      <Head>
        <title>waitSmart: Smart Solution</title>
        <meta name="description" content="Stop waiting in queues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Banner />
        <Services />
        <TechStack />
        <Team />
        {/* <Testimonial /> */}
        <ExcitingFeatures />
        <WorkFlow />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
