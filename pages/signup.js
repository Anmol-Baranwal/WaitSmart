// "use client";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "@/styles/auth.module.css";
import CustomButton from "@/components/Button/CustomButton";
import { useRouter } from "next/router";
import Link from "next/link";

import signUp from "@/lib/firebase/auth/signup";

const Signup = () => {
  const router = useRouter();
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const doctorId = `4zH5iYM4wJo`;

  const handleSignup = async (e) => {
    e.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }
    // we have successfully signed up if it reaches here
    console.log(result);
    return router.push(`doctor/${doctorId}`);

    // e.preventDefault();
    // console.log({ firstName, lastName, email, password, aadhaarCard });
    // Validate form inputs
    // if (
    // /  !validateName(firstName) ||
    // /  !validateName(lastName) ||
    // /  !validateAadhaarCard(aadhaarCard) ||
    // /  !phoneNumber.match(/^\d+$/) ||
    // /  !email.includes("@") ||
    //   password.length < 6
    // ) {
    //   toast({
    //     title: "Error",
    //     description: "Please fill in all required fields correctly",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }
    // Handle signup logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateAadhaarCard = (value) => {
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(value);
  };

  const validateName = (value) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(value);
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Divider orientation="horizontal" className={styles.divider} />

        <form onSubmit={handleSignup}>
          {/* <FormControl id="firstName" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter your first name"
              //   isInvalid={!validateName(firstName)}
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
              maxLength={12}
            />
          </FormControl>

          <FormControl id="phoneNumber" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
              placeholder="Enter your phone number"
            />
          </FormControl> */}

          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email address"
              required
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Password</FormLabel>
            <div className={styles.passwordInputContainer}>
              <Input
                // type={showPassword ? "text" : "password"}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
              <div
                className={styles.passwordIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </FormControl>

          <CustomButton type="submit" className={styles.btn}>
            Sign up
          </CustomButton>
        </form>

        <p className={styles.switchTxt}>
          Dont have an account?{" "}
          <Link className={styles.switchLink} href="/login">
            Login
          </Link>
        </p>
      </Box>
    </section>
  );
};

export default Signup;
