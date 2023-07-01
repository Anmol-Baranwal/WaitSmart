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
          key={index}
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
