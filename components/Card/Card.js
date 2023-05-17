import { Box, Image, Heading, Text } from "@chakra-ui/react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ src, altText, title, designation, social }) => {
  // console.log({ social });

  return (
    <Box className={styles.card}>
      <Image src={src} alt={altText} className={styles.memberThumb} />
      <Box className={styles.infoWrapper}>
        <Heading className={styles.name}>{title}</Heading>
        <Text className={styles.designation}>{designation}</Text>
      </Box>
      <Box className={styles.socialShare}>
        {social.map((item) => (
          <Link key={item.id} href={item.path} className={styles.socialLink}>
            {item.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Card;
