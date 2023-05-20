import { Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { AccordionButton, AccordionItem, AccordionContents } from "./shared";
import { BaseAccordion } from "./BaseAccordion";
import styles from "./accordionExciting.module.css";

const Accordion = ({ items, ...props }) => {
  return (
    <BaseAccordion {...props}>
      {({ openIndexes, handleItemClick }) => (
        <Fragment>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
              className={
                openIndexes.includes(index)
                  ? styles.accordionItem + " is-open"
                  : styles.accordionItem + " is-closed"
              }
            >
              <AccordionButton
                onClick={() => handleItemClick(index)}
                className={styles.accordionButton}
              >
                <Heading as="h4">{item.title}</Heading>
                {!openIndexes.includes(index) && (
                  <BsArrowRight size="28px" className={styles.arrowIcon} />
                )}
              </AccordionButton>
              <AccordionContents
                isOpen={openIndexes.includes(index)}
                className={styles.accordionContents}
              >
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </Fragment>
      )}
    </BaseAccordion>
  );
};

export default Accordion;
