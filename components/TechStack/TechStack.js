import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Image as ChakraImage,
} from "@chakra-ui/react";
import styles from "./techstack.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import CustomButton from "../Button/CustomButton";

const TechStack = () => {
  return (
    <Box as="section" className={styles.techStack} id="techStack">
      <Container>
        <Flex className={styles.flex}>
          <Box className={styles.content}>
            <Text as="span">Behind the design</Text>
            <SectionHeading
              className={styles.heading}
              title="Code that we used to built the website with integrating apps"
              description="Get your tests delivered at let home collect sample from the
          victory of the managements that supplies best design system
          guidelines ever. Get your tests delivered at let home collect
          sample."
            />
            <CustomButton href="#" className={styles.button}>
              Explore More
            </CustomButton>
          </Box>
          <Box className={styles.images}>
            <ChakraImage
              src="/static/icons/techstack.png"
              alt="tech stack"
              width="320"
              height="320"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TechStack;
