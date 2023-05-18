import { motion } from "framer-motion";
import styles from "./shared.module.css";

export const AccordionButton = ({ children, ...rest }) => (
  <div className={styles.buttonToggle} {...rest}>
    {children}
  </div>
);

const AccordionContents = ({ isOpen, ...props }) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={styles.accordionContent}
      {...props}
    />
  );
};

export const AccordionItem = ({ isOpen, children, className, ...rest }) => (
  <div
    // className={`accordionItem ${className}`}
    className={styles.accordionItem}
    {...rest}
  >
    {children}
  </div>
);

export const preventClose = (state, changes) =>
  changes.type === "closing" && state.openIndexes.length < 2
    ? { ...changes, openIndexes: state.openIndexes }
    : changes;

export const single = (state, changes) =>
  changes.type === "opening"
    ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
    : changes;

export const combineReducers =
  (...reducers) =>
  (state, changes) =>
    reducers.reduce((acc, reducer) => reducer(state, acc), changes);

export default AccordionContents;
