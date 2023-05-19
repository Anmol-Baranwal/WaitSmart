import { Box, Container, Image } from "@chakra-ui/react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import AccordionComponent from "./AccordionComponent";
import styles from "./excitingFeatures.module.css";
import data from "@/data/excitingFeatures.json";

const ExcitingFeatures = () => {
  return (
    <Box as="section" variant="section.excitingFeatures" id="ExcitingFeatures">
      <Container>
        <Box className={styles.featureWrapper}>
          <Box className={styles.illustrationWrapper}>
            <Image
              src={`/static/icons/feature.png`}
              alt="feature"
              className={styles.illustration}
            />
          </Box>
          <Box className={styles.contentWrapper}>
            <SectionHeading
              className={styles.heading}
              title="Meet our exciting features that make you wow"
              description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
            />
            <Box className={styles.accordionGroup}>
              <AccordionComponent
                className={styles.accordionStyle}
                items={data}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;
