import React from "react";
import { Button, Input, Box, Container, Heading, Text } from "@chakra-ui/react";
import styles from "./subscribe.module.css";
import CustomInput from "../Input/CustomInput";
import CustomButton from "../Button/CustomButton";

const Subscribe = () => {
  return (
    <Box as="section" className={styles.subscribe}>
      <Container>
        <Heading as="h3">Subscribe to get notified about events</Heading>
        <Text as="p">
          By subscribing with your email, you accept our privacy policy
        </Text>
        <Box as="form" className={styles.form}>
          <CustomInput
            placeholder="Enter your email address"
            type="email"
            id="subscribeEmail"
            className={styles.input}
          />
          <CustomButton type="submit" className={styles.button}>
            Subscribe
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;
