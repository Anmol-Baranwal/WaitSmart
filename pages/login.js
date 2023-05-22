import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";
import Link from "next/link";
import CustomButton from "@/components/Button/CustomButton";
import { useRouter } from "next/router";
import styles from "@/styles/auth.module.css";

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

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if email exists in the database, if not, route to signup page
    const emailExists = false; // Replace this with your logic to check if the email exists
    if (!emailExists) {
      router.push("/signup"); // Route to the signup page
    } else {
      // Handle login logic here
    }
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Divider orientation="horizontal" className={styles.divider} />

        <form onSubmit={handleLogin}>
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
            Login
          </CustomButton>
        </form>

        <p className={styles.switchTxt}>
          Dont have an account?{" "}
          <Link className={styles.switchLink} href="/signup">
            Sign up
          </Link>
          {/* <span
            className={styles.signupLink}
            onClick={() => router.push("/signup")}
          >
            Sign up
          </span> */}
        </p>
      </Box>
    </section>
  );
};

export default Signup;
