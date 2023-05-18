import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import SectionHeader from "components/SectionHeading/SectionHeader";
import Rating from "../Rating/Rating";
import ButtonGroup from "./ButtonGroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import testimonialData from "@/data/testimonial.json";

import styles from "./testimonial.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be anything based on your choice
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Testimonial = () => {
  return (
    <section id="testimonial">
      <Container textAlign="center">
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>
      <Box>
        <Carousel
          responsive={responsive}
          // styles={styles.carouselWrapper}
          // additionalTransforms={0}
          // arrows={false}
          // autoPlaySpeed={9000}
          // centerMode={false}
          // containerClass={styles.carouselContainer}
          // customButtonGroup={<ButtonGroup />}
          // dotListClass=""
          // draggable
          // focusOnSelect={false}
          // infinite={false}
          // itemClass=""
          // keyBoardControl
          // minimumTouchDrag={80}
          // renderButtonGroupOutside
          // renderDotsOutside={false}
          // showDots={false}
          // sliderClass=""
          // slidesToSlide={0}
        >
          {testimonialData.map((item) => (
            <Box key={`${item.id}`} className={styles.reviewCard}>
              <Rating rating={item.review} />
              <Heading as="h3" className={styles.title}>
                {item.title}
              </Heading>
              <Text className={styles.description}>{item.description}</Text>
              <Box
                display="flex"
                alignItems="center"
                className={styles.cardFooter}
              >
                <Image
                  src={`/static/team/${item.avatar}.png`}
                  alt="Client Image"
                  boxSize="45px"
                  borderRadius="full"
                  mr={4}
                  className={styles.image}
                />
                <Box>
                  <Heading className={styles.heading}>{item.name}</Heading>
                  <Text className={styles.designation}>{item.designation}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
};

export default Testimonial;

// additionalTransforms={0}
//           arrows={false}
//           autoPlaySpeed={9000}
//           centerMode={false}
//           // className={styles.carouselWrapper}
//           containerClass={styles.carouselContainer}
//           // // `${styles["carousel-container"]} carousel-container`
//           customButtonGroup={<ButtonGroup />}
//           dotListClass=""
//           draggable
//           focusOnSelect={false}
//           infinite={true}
//           itemClass=""
//           keyBoardControl
//           minimumTouchDrag={80}
//           renderButtonGroupOutside
//           renderDotsOutside={false}
//           responsive={responsive}
//           showDots={false}
//           sliderClass=""
//           slidesToSlide={0}
