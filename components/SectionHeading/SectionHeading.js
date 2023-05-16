import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./SectionHeading.module.css";
import Image from "next/image";

const SectionHeading = ({ title, description, emoji, ...props }) => {
  return (
    <Box className={styles.heading} {...props}>
      <Heading className={styles.title}>
        {emoji && <span>{title}</span>}
        {emoji && <Image src={emoji} alt="emoji" className={styles.emoji} />}
        {!emoji && title}
      </Heading>
      <Text className={styles.description} as="p">
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;
