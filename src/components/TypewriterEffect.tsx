"use client";
import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ strings }: { strings: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentText.length < strings[currentIndex].length) {
        setCurrentText(
          strings[currentIndex].substring(0, currentText.length + 1),
        );
      } else {
        if (currentIndex === strings.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
          setCurrentText("");
        }
      }
    }, 150); // Viteza de scriere, poți ajusta această valoare pentru a regla viteza de afișare

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, strings]);

  return (
    <div>
      <span>{currentText}</span>
      <span className="cursor-animation">|</span>{" "}
      {/* Cursorul pentru efectul de mașină de scris */}
    </div>
  );
};

export default TypewriterEffect;
