import { Box, Image, Heading, Text } from "@chakra-ui/react";
import styles from "./feature.module.css";
import Link from "next/link";

const Feature = ({ data, ...props }) => {
  const iconPath = `/static/icons/${data?.icon}.png`;

  return (
    <Box className={styles.feature} {...props}>
      <Box as="figure">
        <Image src={iconPath} alt={data?.title} className={styles.icon} />
      </Box>
      <Box className={styles.content}>
        <Heading as="h3" className={styles.title}>
          {data?.title}
        </Heading>
        <Text as="p" className={styles.para}>
          {data?.description}
        </Text>
        {data?.path && (
          <Link href={data?.path} className={styles.learnMore}>
            Learn More
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Feature;
