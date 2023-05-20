import { Button } from "@chakra-ui/react";

const CustomButton = ({ ...props }) => {
  return (
    <Button
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
      as="button"
      {...props}
    />
  );
};

export default CustomButton;
