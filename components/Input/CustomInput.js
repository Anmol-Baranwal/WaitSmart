import { Input } from "@chakra-ui/react";
import styles from "./CustomInput.module.css";

const CustomInput = ({ placeholder, ...props }) => {
  return (
    <Input
      borderRadius="5px"
      fontFamily="body"
      flexGrow={1}
      padding={["0 24px"]}
      height="auto"
      minHeight="60px"
      width="auto"
      _focus={{
        borderColor: "var(--primary-200)",
      }}
      className={styles.input}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default CustomInput;
