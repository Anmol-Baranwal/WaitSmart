import { useState } from "react";
import styles from "./accordionComponent.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const AccordionItem = ({ title, contents, isOpen, onClick }) => {
  return (
    <div className={styles.accordionWrapper}>
      <div
        className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
        onClick={onClick}
      >
        <h2 className={styles.title}>{title}</h2>
        {!isOpen ? (
          <FaLongArrowAltRight className={styles.accordionIcon} />
        ) : (
          ""
        )}
      </div>
      {isOpen && <div className={styles.accordionContent}>{contents}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div>
      {items.map((item, index) => (
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

// {isOpen ? (
//   <FaChevronUp className={styles.accordionIcon} />
// ) : (
//   <FaChevronDown className={styles.accordionIcon} />
// )}
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Box,
// } from "@chakra-ui/react";
// import styles from "./accordionComponent.module.css";

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
