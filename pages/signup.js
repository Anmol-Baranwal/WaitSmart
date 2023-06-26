// "use client";
import { firebase_app, firestore } from "@/firebaseConfig";

import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Divider,
  useToast,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "@/styles/auth.module.css";
import CustomButton from "@/components/Button/CustomButton";
import { useRouter } from "next/router";
import Link from "next/link";
import addData from "@/lib/firebase/firestore/addData"; // addData function to add data in firestore

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

  const doctorId = `4zH5iYM4wJo`; // to use as default value for doctor dynamic user id

  const handleSignup = async (e) => {
    if (e) {
      e.preventDefault();
    }

    console.log(e);

    const { result, error } = await signUp(email, password);

    console.log({ result, error });

    if (result && result.user) {
      const user = {
        firstName,
        lastName,
        phoneNumber,
        aadhaarCard,
        email: result.user.email, // Store the user's email
      };

      const { result: addDataResult, error: addDataError } = await addData(
        "users", // Collection name
        result.user.uid || doctorId, // Document ID or default value to avoid error
        user // Data to be added
      );

      if (addDataError) {
        console.log(addDataError);
        return;
      }

      // Successful signup and data addition
      router.push(`doctor/${result.user.uid}`);
    } else {
      // Handle the case when result is null or user property is missing
      console.log("Error: Unable to add user information");
    }

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
          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter your first name"
              required
              //   isInvalid={!validateName(firstName)}
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              placeholder="Enter your last name"
              required
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Aadhaar Card</FormLabel>
            <Input
              type="text"
              value={aadhaarCard}
              id="aadhaarCard"
              onChange={(e) => setAadhaarCard(e.target.value)}
              className={styles.input}
              placeholder="Enter your Aadhaar card number"
              maxLength={12}
              required
            />
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              id="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
              placeholder="Enter your phone number"
              required
            />
          </FormControl>

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
                type={showPassword ? "text" : "password"}
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

          <CustomButton className={styles.btn} onClick={handleSignup}>
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
