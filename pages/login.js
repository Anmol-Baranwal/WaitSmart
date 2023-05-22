import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomButton from "@/components/Button/CustomButton";
import styles from "@/styles/auth.module.css";
import signIn from "@/lib/firebase/auth/signin";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const doctorId = `4zH5iYM4wJo`;

  const handleLogin = async (e) => {
    e.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push(`doctor/${doctorId}`);

    // // Check if email exists in the database, if not, route to signup page
    // const emailExists = false; // Replace this with your logic to check if the email exists
    // if (!emailExists) {
    //   router.push("/signup"); // Route to the signup page
    // } else {
    //   // Handle login logic here
    // }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Divider orientation="horizontal" className={styles.divider} />

        <form onSubmit={handleLogin}>
          <FormControl className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </FormControl>

          <FormControl id="password" className={styles.formControl}>
            <FormLabel className={styles.formLabel}>Password</FormLabel>
            <div className={styles.passwordInputContainer}>
              <Input
                type="password"
                value={password}
                id="password"
                name="password"
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
            Login
          </CustomButton>
        </form>

        <p className={styles.switchTxt}>
          Dont have an account?{" "}
          <Link className={styles.switchLink} href="/signup">
            Sign up
          </Link>
        </p>
      </Box>
    </section>
  );
};

export default Signup;
