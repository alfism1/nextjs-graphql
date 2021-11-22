import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

function Playground() {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <div>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Click me!</button>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div>My name is methos</div>
      </motion.div>
    </div>
  );
}

export default Playground;
