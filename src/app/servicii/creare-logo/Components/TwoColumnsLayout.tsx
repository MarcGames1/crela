'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './TwoColumnsLayout.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TwoColumnLayout = ({
  leftSideContent,
  rightSideContent,
}: {
  leftSideContent: ReactNode;
  rightSideContent: ReactNode;
}) => {

const [currentWindowHeight, setCurrentWindowHeight] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  // Obținem înălțimea containerului
  const containerHeight = targetRef.current
    ? targetRef.current.offsetHeight
    : 0;

    const stickyContentHeight = stickyContentRef.current
      ? stickyContentRef.current.offsetHeight
      : 0;

    // obtinem window innerHeight
  const getWindowInnerHeight = ():number =>{
    if (typeof window !== "undefined"){
        return window.innerHeight;
    }
    return 1;
  }
useEffect(() => {
  setCurrentWindowHeight(getWindowInnerHeight());
}, [
  getWindowInnerHeight,
  (typeof window !== 'undefined' )&& window?.innerHeight,
]); 

  const positionY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight - stickyContentHeight / 2]
  );

  return (
    <>
      <motion.div
        ref={targetRef}
        className="flex flex-col lg:flex-row relative "
      >
        {/* Partea stângă */}
        <motion.div
          className={`flex-none w-1/4 h-auto self-stretch relative overflow-visible`}
        >
          <motion.div ref={stickyContentRef} style={{ y: positionY }} className='bg-gray-300/70 drop-shadow-lg rounded-xl'>
            {leftSideContent}
          </motion.div>
        </motion.div>

        {/* Partea dreaptă */}
        <div className="flex-grow">{rightSideContent}</div>
      </motion.div>
    </>
  );
};

export default TwoColumnLayout;
