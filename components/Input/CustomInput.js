import { Input } from "@chakra-ui/react";
import styles from "./CustomInput.module.css";

const CustomInput = ({ placeholder, ...props }) => {
  return (
    <Input
      backgroundColor="#EFF3F7"
      borderRadius="5px"
      fontFamily="body"
      flexGrow={1}
      padding={["0 24px"]}
      height="auto"
      minHeight="60px"
      width="auto"
      placeholderTextColor="rgba(2, 7, 62, 0.4)"
      _focus={{
        borderColor: "#db4a87",
      }}
      className={styles.input}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default CustomInput;
