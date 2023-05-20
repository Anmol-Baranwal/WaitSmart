import { Container, Grid, Box, Heading, Text } from "@chakra-ui/react";
import SectionHeader from "components/SectionHeading/SectionHeader";
// import ArrowOdd from "/static/workflow/arrowOdd.svg";
// import ArrowEven from "/static/workflow/arrowEven.svg";
import styles from "./workflow.module.css";
import data from "@/data/workflow.json"; // Update the path to the data file

const WorkFlow = () => {
  // const renderArrow = (index) => {
  //   if (index % 2 === 0) {
  //     return (
  //       <div
  //         className={styles.arrow}
  //         style={{ backgroundImage: `url(${ArrowEven})` }}
  //       />
  //     );
  //   } else {
  //     return (
  //       <div
  //         className={styles.arrow}
  //         style={{ backgroundImage: `url(${ArrowOdd})`, top: "17px" }}
  //       />
  //     );
  //   }
  // };

  return (
    <section className={styles.workflow} id="workflow">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let’s see how it works"
          isWhite={true}
        />

        <Grid className={styles.grid} columns={[1, 1, 2, 2]} gap={4}>
          {data.map((item, index) => (
            <Box className={styles.card} key={item.id}>
              <Box className={styles.iconBox}>{`0${item.id}`}</Box>
              <Box className={styles.wrapper}>
                <Heading className={styles.title}>{item.title}</Heading>
                <Text className={styles.subTitle}>{item.text}</Text>
              </Box>
              {/* {renderArrow(index + 1)} */}
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WorkFlow;
