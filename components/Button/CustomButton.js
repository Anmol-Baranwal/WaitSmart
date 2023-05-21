import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CustomButton = ({ path, ...props }) => {
  const href = path || "";
  return (
    <Link href={href} passHref>
      <Button
        as="button"
        // as={href ? "a" : "button"}
        variant="primary"
        minHeight={["45px"]}
        fontSize={["14px"]}
        sx={{
          marginTop: "0rem",
          backgroundColor: "var(--primary-200)",
          color: "var(--color-white)",
          outline: 0,
          borderRadius: ".3rem",
          padding: "1rem 2.5rem",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          letterSpacing: ".05rem",
          border: "none",
          _hover: {
            transition: ".3s ease-in-out",
            backgroundColor: "var(--primary-300)",
          },
        }}
        {...props}
      />
    </Link>
  );
};

export default CustomButton;
