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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleMenu = () => {
    onOpen();
  };

  // Define the array of links to avoid repitition
  const navLinks = [
    { name: "Features", path: "/" },
    { name: "How this works?", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Our Team", path: "/" },
    { name: "FAQ", path: "/" },
    { name: "Behind the Design", path: "/" },
    { name: "Subscribe the Newsletter", path: "/" },
  ];

  return (
    <nav>
      <Container className={styles.navbar}>
        <Box className={styles.navbarContainer}>
          <Link href="/" className={styles.logo}>
            Logo
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
                >
                  {link.name}
                </Link>
              ))}
            </Box>
            <Box className={styles.buttonWrapper}>
              <CustomButton className={styles.btn} text="Login" path="#">
                Login
              </CustomButton>
              <CustomButton className={styles.btn} text="Choose" path="#">
                Appointment
              </CustomButton>
            </Box>
          </Box>
          <Box onClick={toggleMenu}>
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

{
  /* <Link href="/" className={styles.navItem}>
  <FaChevronRight className={styles.iconSm} />{" "}
  <span className={styles.link}> Features </span>
</Link>
<Link href="/" className={styles.navItem}>
  <FaChevronRight className={styles.iconSm} />{" "}
  <span className={styles.link}> How this works? </span>
</Link>
<Link href="/" className={styles.navItem}>
  <FaChevronRight className={styles.iconSm} />{" "}
  <span className={styles.link}> Testimonials </span>
</Link>
<Link href="/" className={styles.navItem}>
  <FaChevronRight className={styles.iconSm} />{" "}
  <span className={styles.link}> Team </span>
</Link> */
}

{
  /* <Link href="/" className={styles.navItem}>
  Features
</Link>
<Link href="/" className={styles.navItem}>
  How this works?
</Link>
<Link href="/" className={styles.navItem}>
  Testimonials
</Link>
<Link href="/" className={styles.navItem}>
  Team
</Link> */
}

// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from "@chakra-ui/react";

// import {
//   FaHamburger,
//   FaChevronDown,
//   FaChevronRight,
//   FaWindowClose,
// } from "react-icons/fa";

// export default function WithSubnavigation() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex
//         bg={useColorModeValue("white", "gray.800")}
//         color={useColorModeValue("gray.600", "white")}
//         minH={"60px"}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//       >
//         <Flex
//           flex={{ base: 1, md: "auto" }}
//           ml={{ base: -2 }}
//           display={{ base: "flex", md: "none" }}
//         >
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? (
//                 <FaWindowClose w={3} h={3} />
//               ) : (
//                 <FaHamburger w={5} h={5} />
//               )
//             }
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
//           <Text
//             fontFamily={"heading"}
//             color={useColorModeValue("gray.800", "white")}
//           >
//             Logo
//           </Text>

//           <Flex display={{ base: "none", md: "flex" }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={"flex-end"}
//           direction={"row"}
//           spacing={6}
//         >
//           <Button
//             as={"a"}
//             fontSize={"sm"}
//             fontWeight={400}
//             variant={"link"}
//             href={"#"}
//           >
//             Sign In
//           </Button>
//           <Button
//             as={"a"}
//             display={{ base: "none", md: "inline-flex" }}
//             fontSize={"sm"}
//             fontWeight={600}
//             color={"white"}
//             bg={"pink.400"}
//             href={"#"}
//             _hover={{
//               bg: "pink.300",
//             }}
//           >
//             Sign Up
//           </Button>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={FaChevronRight} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={FaChevronDown}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// const NAV_ITEMS = [
//   {
//     label: "Inspiration",
//     children: [
//       {
//         label: "Explore Design Work",
//         subLabel: "Trending Design to inspire you",
//         href: "#",
//       },
//       {
//         label: "New & Noteworthy",
//         subLabel: "Up-and-coming Designers",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Find Work",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Learn Design",
//     href: "#",
//   },
//   {
//     label: "Hire Designers",
//     href: "#",
//   },
// ];
