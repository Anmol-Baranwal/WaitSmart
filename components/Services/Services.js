import { Box, Container } from "@chakra-ui/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Feature from "./Feature";
import styles from "./services.module.css";
import data from "@/data/services.json";

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          className={styles.heading}
          title="Successful business starts with great features"
          description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing content."
        />
        <Box className={styles.features}>
          {data.map((item) => (
            <Feature key={item.id} className={styles.featureItem} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
