import { useState } from "react";
import { Box, Container, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./navbar.module.css";
import CustomButton from "../Button/CustomButton";
import { FaHamburger, FaChevronRight } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Logo from "../Logo";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleMenu = () => {
    onOpen();
  };

  // Define the array of links to avoid repitition
  const navLinks = [
    { name: "Features", path: "/#ExcitingFeatures" },
    { name: "How this works?", path: "/#workflow" },
    { name: "Our Team", path: "/#team" },
    { name: "FAQ", path: "/#FAQ" },
    { name: "Testimonials", path: "/" },
    { name: "Behind the Design", path: "/#techStack" },
    { name: "Subscribe the Newsletter", path: "/#subscribe" },
  ];

  return (
    <nav className={styles.navbar}>
      <Container>
        <Box className={styles.navbarContainer}>
          <Link href="/" className={styles.logo}>
            {/* <Image
              src="/static/icons/logo.png"
              alt="brand logo"
              width="57"
              height="70"
            /> */}
            <Logo image="logo" />
          </Link>
          <Box className={styles.content}>
            <Box
              className={`${styles.menuLinks} ${!isOpen ? styles.open : ""}`}
            >
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={styles.navItem}
                  scroll={false}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
            <Box className={styles.buttonWrapper}>
              <CustomButton className={styles.btn} text="Login" path="/login">
                Login
              </CustomButton>
              <CustomButton
                className={styles.btn}
                text="Choose"
                path="appointment"
              >
                Appointment
              </CustomButton>
            </Box>
          </Box>
          <Box onClick={toggleMenu} className={styles.hamburgerWrapper}>
            <FaHamburger
              className={`${styles.hamburger} ${styles.hamburgerIcon}`}
            />
          </Box>
          <Drawer
            placement="right"
            onClose={onClose}
            isOpen={isOpen}
            className={styles.drawer}
          >
            <DrawerOverlay />
            <DrawerContent className={styles.drawerWrapper}>
              <DrawerCloseButton className={styles.closeBtn} />
              <Box className={styles.drawerContent}>
                <DrawerHeader
                  borderBottomWidth="1px"
                  className={styles.drawerHeader}
                >
                  {/* Custom greetings */}
                </DrawerHeader>
                <DrawerBody className={styles.drawerBody}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={styles.navItem}
                    >
                      <FaChevronRight className={styles.iconSm} />{" "}
                      <span className={styles.link}>{link.name}</span>
                    </Link>
                  ))}
                  <CustomButton className={styles.btn} text="Login" path="#">
                    Login
                  </CustomButton>
                  <CustomButton className={styles.btn} text="Choose" path="#">
                    Appointment
                  </CustomButton>
                </DrawerBody>
              </Box>
            </DrawerContent>
          </Drawer>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
