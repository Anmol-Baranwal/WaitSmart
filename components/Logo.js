import React from "react";
import { Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo({ image, width = 57, height = 70 }) {
  const iconPath = `/static/icons/${image}.png`;
  return (
    <Link href="/" passHref>
      <ChakraLink
        as="a"
        style={{ variant: "links.logo", display: "flex", alignItems: "center" }}
      >
        <Image
          src={iconPath}
          alt="wait smart logo"
          width={width}
          height={height}
          as="img"
        />
      </ChakraLink>
    </Link>
  );
}
