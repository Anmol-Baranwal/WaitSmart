import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import styles from "@/styles/login.module.css";

const Signup = () => {
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
    // Handle login logic here
  };

  return (
    <Box className={styles.container}>
      <Tabs isLazy>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabPanel>
              <form onSubmit={handleLogin}>
                <FormControl id="email" className={styles.formControl}>
                  <FormLabel className={styles.formLabel}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </FormControl>

                <FormControl id="password" className={styles.formControl}>
                  <FormLabel className={styles.formLabel}>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  className={styles.button}
                >
                  Login
                </Button>
              </form>
            </TabPanel>
          </TabPanel>
          <TabPanel>
            <form onSubmit={handleSignup}>
              <FormControl id="firstName" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <FormControl id="lastName" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <FormControl id="aadhaarCard" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>Aadhaar Card</FormLabel>
                <Input
                  type="text"
                  value={aadhaarCard}
                  onChange={(e) => setAadhaarCard(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <FormControl id="phoneNumber" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>Phone Number</FormLabel>
                <Input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <FormControl id="email" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <FormControl id="password" className={styles.formControl}>
                <FormLabel className={styles.formLabel}>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                className={styles.button}
              >
                Signup
              </Button>
            </form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Signup;
