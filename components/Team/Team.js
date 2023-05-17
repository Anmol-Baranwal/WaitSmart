import { Container, Grid } from "@chakra-ui/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../Card/Card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import data from "@/data/team.json";
import styles from "./team.module.css";

const Team = () => {
  const iconComponents = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  };

  return (
    <section className={styles.team}>
      <Container>
        <SectionHeading
          title="The most qualified and talented individuals"
          description="our team"
        />

        <Grid className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              src={`/static/team/${item.imgSrc}.png`}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile.map((profile) => ({
                ...profile,
                icon: iconComponents[profile.name],
              }))}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Team;
