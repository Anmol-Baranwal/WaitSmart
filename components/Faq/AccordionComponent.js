import { useState } from "react";
import styles from "./accordionComponent.module.css";
import { FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ title, contents, isOpen, onClick }) => {
  return (
    <div
      className={`${styles.accordionWrapper} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.accordionItem}>
        <h2 className={styles.title}>{title}</h2>
        <FaChevronUp className={styles.accordionIcon} />
      </div>
      {isOpen && <div className={styles.accordionContent}>{contents}</div>}
    </div>
  );
};

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    if (openIndex === index) {
      // Avoid the closing of the only open option
      return;
    }

    setOpenIndex(index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          contents={item.contents}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

// Using react icons to change the icon during state of open
// {isOpen ? (
//   <FaChevronUp className={styles.accordionIcon} />
// ) : (
//   <FaChevronDown className={styles.accordionIcon} />
// )}

// ------------- Using Chakra-UI -------------
// import styles from "./accordionComponent.module.css";
// import {
//   Box,
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
// } from "@chakra-ui/react";

// const AccordionComponent = ({ data }) => {
//   return (
//     <Accordion className={styles.accordionWrapper} allowToggle>
//       {data.map((item) => (
//         <AccordionItem className={styles.accordionItem} key={item.id}>
//           <h2>
//             <AccordionButton className={styles.accordionButton}>
//               <Box className={styles.title} as="span" flex="1" textAlign="left">
//                 {item.title}
//               </Box>
//               <AccordionIcon className={styles.accordionIcon} />
//             </AccordionButton>
//           </h2>
//           <AccordionPanel className={styles.accordionContent}>
//             {item.contents}
//           </AccordionPanel>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// };

// export default AccordionComponent;
