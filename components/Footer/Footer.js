import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <Box as="footer" className={styles.footer}>
      <Container className={styles.container}>
        <Box className={styles.linksWrap}>
          <Image
            src="/static/icons/org.png"
            alt="smart wait logo"
            width="30"
            height="30"
            className={styles.logoImage}
          />
          <Text as="p" className={styles.text}>
            Copyright &copy; {new Date().getFullYear()} waitSmart, Inc
          </Text>
        </Box>
        <Box className={styles.linksWrap}>
          <Link href="/">Home</Link>
          <Link href="/">Why Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Testimonials</Link>
          <Link href="/">FAQ</Link>
        </Box>
      </Container>
    </Box>
  );
}
