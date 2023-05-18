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
    <section className={styles.workflow}>
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

// import { Container, Grid, Box, Heading, Text } from 'theme-ui';
// import SectionHeader from 'components/section-header';

// import PatternBG from "/static/workflow/patternBG.png";
// import ArrowOdd from "/static/workflow/arrowOdd.svg";
// import ArrowEven from "/static/workflow/arrowEven.svg";

// const data = [
//   {
//     id: 1,
//     title: 'Set disbursement Instructions',
//     text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
//   },
//   {
//     id: 2,
//     title: 'Assembly retrieves funds from your account',
//     text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
//   },
//   {
//     id: 3,
//     title: 'Assembly initiates disbursement',
//     text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
//   },
//   {
//     id: 4,
//     title: 'Customer receives funds payment',
//     text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
//   },
// ];

// export default function WorkFlow() {
//   return (
//     <section>
//       <Container>
//         <SectionHeader
//           slogan="Whats the function"
//           title="Let’s see how it works"
//           isWhite={true}
//         />

//         <Grid columns={[1, 1, 2, 2]} gap={4}>
//           {data.map((item) => (
//             <Box key={item.id}>
//               <Box>{`0${item.id}`}</Box>
//               <Box>
//                 <Heading>{item.title}</Heading>
//                 <Text>{item.text}</Text>
//               </Box>
//             </Box>
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }

// import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
// import SectionHeader from "../components/section-header";

// import PatternBG from "/static/workflow/patternBG.png";
// import ArrowOdd from "/static/workflow/arrowOdd.svg";
// import ArrowEven from "/static/workflow/arrowEven.svg";

// const data = [
//   {
//     id: 1,
//     title: "Set disbursement Instructions",
//     text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
//   },
//   {
//     id: 2,
//     title: "Assembly retrieves funds from your account",
//     text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
//   },
//   {
//     id: 3,
//     title: "Assembly initiates disbursement",
//     text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
//   },
//   {
//     id: 4,
//     title: "Customer receives funds payment",
//     text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
//   },
// ];

// export default function WorkFlow() {
//   return (
//     <section>
//       <Container>
//         <SectionHeader
//           slogan="Whats the function"
//           title="Let’s see how it works"
//           isWhite={true}
//         />

//         <Grid
//           templateColumns={[
//             "1fr",
//             "1fr",
//             "1fr 1fr",
//             "1fr 1fr",
//             "1fr 1fr 1fr 1fr",
//           ]}
//           gap={6}
//         >
//           {data.map((item) => (
//             <Box key={item.id}>
//               <Box
//                 width={["50px", "60px", "70px"]}
//                 height={["50px", "60px", "70px"]}
//                 borderRadius={["15px", "23px", "30px"]}
//                 backgroundColor="white"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 mb={[5, null, null, null, null, 6]}
//                 mx={["auto", null, 0]}
//                 fontSize={[6, 7, "30px"]}
//                 fontWeight={700}
//                 color="#234582"
//               >
//                 {`0${item.id}`}
//               </Box>
//               <Box>
//                 <Heading
//                   fontSize={[3, 4, 5]}
//                   color="white"
//                   lineHeight={[1.4, null, 1.55]}
//                   mb={[2, 3]}
//                 >
//                   {item.title}
//                 </Heading>
//                 <Text
//                   fontSize={1}
//                   fontWeight={400}
//                   lineHeight={[1.85, null, 1.9, 2]}
//                   color="white"
//                   opacity={0.75}
//                 >
//                   {item.text}
//                 </Text>
//               </Box>
//             </Box>
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }
