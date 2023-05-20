import { Container, Flex } from "@chakra-ui/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import styles from "./buttonGroup.module.css";

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex className={styles.buttonGroupWrapper}>
      <Container>
        <Flex className={styles.buttonGroup}>
          <button
            onClick={previous}
            aria-label="Previous"
            className={styles.button}
          >
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next" className={styles.button}>
            <IoIosArrowRoundForward />
          </button>
        </Flex>
      </Container>
    </Flex>
  );
}
