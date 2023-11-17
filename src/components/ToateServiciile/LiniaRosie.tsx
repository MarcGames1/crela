import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LiniaRosie = ({ y = 55.2 }) => {
  const lineAnimation = useAnimation();

  useEffect(() => {
    lineAnimation.start({
      y,
      transition: {
        type: 'linear',
        duration: 0.1,
        delay: 0.2,
      },
    });

    console.log(y);
  }, [y]);

  return (
    <motion.div
      animate={lineAnimation}
      className="absolute left-0 top-0 h-[3px] w-full  bg-[#C61D23] transition-all duration-300 ease-in-out"
    ></motion.div>
  );
};

export default LiniaRosie