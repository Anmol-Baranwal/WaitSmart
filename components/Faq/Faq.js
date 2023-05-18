import { Box, Container, Flex, Link, Heading, Text } from "@chakra-ui/react";
import AccordionComponent from "./AccordionComponent";
import faqData from "@/data/faq.json";
import styles from "./faq.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const Faq = () => {
  return (
    <Box as="section" className={styles.faqSection}>
      <Container>
        <SectionHeading
          title="Frequently Ask Question"
          description="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <AccordionComponent data={faqData} />
          </Box>
          <Box sx={styles.content}>
            {/* <SectionHeading
              title="Do you have any quesiton? Please ask here we ready to support"
              description="If your question is not list here, please feel free to make a
              manual support."
            /> */}
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link className={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Faq;
