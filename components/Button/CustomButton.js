import { Button } from "@chakra-ui/react";

const CustomButton = ({ ...props }) => {
  return (
    <Button
      variant="primary"
      minHeight={["45px"]}
      fontSize={["14px"]}
      sx={{
        marginTop: "0rem",
        backgroundColor: "#DB4A87",
        color: "#fff",
        outline: 0,
        borderRadius: ".3rem",
        padding: "1rem 2.5rem",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 800,
        letterSpacing: ".05rem",
        border: "none",
        _hover: {
          transition: ".3s ease-in-out",
          backgroundColor: "#02073E",
        },
      }}
      {...props}
    />
  );
};

export default CustomButton;
