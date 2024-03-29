import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import styles from "./Banner.module.css";
import CustomInput from "../Input/CustomInput";
import CustomButton from "../Button/CustomButton";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <Box className={styles.section} id="home">
      <Box className={styles.container}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.content}>
            <Box className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <div className={styles.starText}>
                Trused by over 4,332 hospitals
              </div>
            </Box>
            <Heading as="h1" className={styles.bannerHeading}>
              {/* `${styles.h1} ${styles.bannerHeading}` */}
              Shorter queues, happier customers
            </Heading>
            <Text className={`${styles.p} ${styles.bannerSubHeading}`}>
              Queue management system for better waiting line experience in
              walk‑in locations.
            </Text>
            <Box className={styles.subscribe}>
              <CustomInput
                id="email"
                type="email"
                placeholder="Enter Email address"
              />
              <CustomButton
                className={styles.primaryButton}
                colorScheme="primary"
              >
                Subscribe
              </CustomButton>
            </Box>
            <Box className={styles.sponsoredBy}>
              <Text className={styles.span}>Sponsored by:</Text>
              <Flex className={styles.logos}>
                <Box as="figure" className={styles.figure}>
                  <Image src="/static/banner/paypal.png" alt="paypal" />
                </Box>
                <Box as="figure" className={styles.figure}>
                  <Image src="/static/banner/google.png" alt="google" />
                </Box>
                <Box as="figure" className={styles.figure}>
                  <Image src="/static/banner/dropbox.png" alt="dropbox" />
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box as="figure" className={styles.illustration}>
            <Image src="/static/banner/heroimage.jpg" alt="banner" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
