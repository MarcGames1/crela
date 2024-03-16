"use client";
import React, { useState } from "react";
import Hamburger from "./MobileMenuComponents/hamburger";
import MobileMenuContent from "./MobileMenuComponents/MobileMenuContent";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileMenuContent />}
    </div>
  );
};

export default MobileMenu;
