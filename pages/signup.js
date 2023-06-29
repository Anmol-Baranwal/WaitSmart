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

      try {
        const response = await fetch("/api/createUser", {
          method: "POST",
          body: JSON.stringify({
            collectionName: "users", // Specify the collection name
            data: user, // Data to be added to the collection
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const { docId } = await response.json();
          router.push(`/doctor/${docId}`);
        } else {
          console.log("Error:", response.status);
          // Handle error response from the API
        }
      } catch (error) {
        console.log(error);
        // Handle error from the API request
      }
    } else {
      // Handle the case when result is null or user property is missing
      console.log("Error: Unable to add user information");
    }
  };

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
              pattern="[A-Za-z]+"
              title="Please enter alphabets only"
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
              pattern="[A-Za-z]+"
              title="Please enter alphabets only"
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
              title="Please enter 12 digits"
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
              pattern="[0-9]{10}"
              title="Please enter 10 digits phone number without country code"
              maxLength={10}
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
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter correct email"
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
                title="Password must be at least 6 characters long and include one uppercase letter and one number"
                pattern="^(?=.*[A-Z])(?=.*[0-9]).{6,}$"
                minLength={6}
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
