import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import styles from "./sectionHeader.module.css";

export default function SectionHeader({ title, slogan, isWhite }) {
  const sectionHeaderClass = isWhite ? styles.white : "";

  const subTitleClass = isWhite
    ? `${styles.subTitle} ${styles.white}`
    : styles.subTitle;

  const titleClass = isWhite ? `${styles.title} ${styles.white}` : styles.title;

  return (
    <Box className={`${styles.sectionHeader} ${sectionHeaderClass}`}>
      <Text
        as="p"
        className={subTitleClass}
        style={{
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        className={titleClass}
        style={{ color: isWhite ? "white" : "heading" }}
      >
        {title}
      </Heading>
    </Box>
  );
}
