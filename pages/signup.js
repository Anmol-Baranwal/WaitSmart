import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";
import styles from "@/styles/login.module.css";
import CustomButton from "@/components/Button/CustomButton";
import { useRouter } from "next/router";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Divider orientation="horizontal" className={styles.divider} />

        <form onSubmit={handleSignup}>
          <FormControl id="firstName" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter your first name"
            />
          </FormControl>

          <FormControl id="lastName" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              placeholder="Enter your last name"
            />
          </FormControl>

          <FormControl id="aadhaarCard" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Aadhaar Card</FormLabel>
            <Input
              type="text"
              value={aadhaarCard}
              onChange={(e) => setAadhaarCard(e.target.value)}
              className={styles.input}
              placeholder="Enter your Aadhaar card number"
            />
          </FormControl>

          <FormControl id="phoneNumber" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Phone Number</FormLabel>
            <Input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
              placeholder="Enter your phone number"
            />
          </FormControl>

          <FormControl id="email" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="password" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
            />
          </FormControl>

          <CustomButton type="submit" className={styles.btn}>
            Signup
          </CustomButton>
        </form>

        <p className={styles.switchTxt}>
          Already have an account?{" "}
          <Link className={styles.switchLink} href="/login">
            Login
          </Link>
        </p>
      </Box>
    </section>
  );
};

export default Signup;
