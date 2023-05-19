import { Box, Container, Flex, Link, Heading, Text } from "@chakra-ui/react";
import AccordionComponent from "./AccordionComponent";
import faqData from "@/data/faq.json";
import styles from "./faq.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import CustomButton from "../Button/CustomButton";

const Faq = () => {
  return (
    <Box as="section" className={styles.faqSection} id="FAQ">
      <Container>
        <SectionHeading
          title="Frequently Ask Question"
          description="Ask your question and meet"
          className={styles.heading}
        />
        <Flex className={styles.flex}>
          <Box className={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <CustomButton className={styles.askButton} path="#">
              Ask your Question
            </CustomButton>
          </Box>
          <Box className={styles.faqWrapper}>
            <AccordionComponent data={faqData} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Faq;
