import { Container, Grid } from "@chakra-ui/react";
import SectionHeader from "../SectionHeading/SectionHeader";
import Card from "../Card/Card";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDev,
  FaProductHunt,
  FaDribbble,
  FaUserCircle,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import data from "@/data/team.json";
import styles from "./team.module.css";

const Team = () => {
  const iconComponents = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    dev: <FaDev />,
    producthunt: <FaProductHunt />,
    dribbble: <FaDribbble />,
    user: <FaUserCircle />,
    mail: <IoMdMail />,
  };

  return (
    <section className={styles.team} id="team">
      <Container>
        <SectionHeader
          title="The most qualified and talented individuals"
          slogan="our creative team"
          isWhite={false}
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
