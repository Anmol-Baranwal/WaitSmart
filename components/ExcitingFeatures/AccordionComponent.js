import { useState } from "react";
import styles from "./accordionComponent.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const AccordionItem = ({ title, contents, isOpen, onClick }) => {
  return (
    <div
      className={`${styles.accordionWrapper} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.accordionItem}>
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
    if (openIndex === index) {
      // Avoid the closing of the only open option
      return;
    }

    setOpenIndex(index);
    //   setOpenIndex(index === openIndex ? -1 : index);
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
