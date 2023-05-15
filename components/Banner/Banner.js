import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import styles from "./Banner.module.css";
import CustomInput from "../Input/CustomInput";
import CustomButton from "../Button/CustomButton";

const Banner = () => {
  return (
    <Box className={styles.section} id="home">
      <Box className={styles.container}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.content}>
            <Heading as="h1" className={styles.bannerHeading}>
              {/* `${styles.h1} ${styles.bannerHeading}` */}
              Build your audience &amp; grow your business online smarter
            </Heading>
            <Text className={`${styles.p} ${styles.bannerSubHeading}`}>
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </Text>
            <Box className={styles.subscribe}>
              {/* <label htmlFor="email" className={styles.srOnly}>
                Email
              </label> */}
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
            <Image src="/static/banner/banner.png" alt="banner" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
