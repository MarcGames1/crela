"use client";
import React, { useEffect, useState } from "react";
import { despre, servicii, ilustratii } from "@/StaticData/constants";
import Link from "next/link";
import MenuLink, { MenuItemVariants } from "@/components/UI/MenuLink";

const Menu = () => {
  const [currentLink, setCurrentLink] = useState("/");
  useEffect(() => {
    window &&
      window.location &&
      window.location.pathname &&
      setCurrentLink(window.location.pathname);
  }, [typeof window]);

  return (
    <div className="flex justify-self-center ml-auto self-stretch place-items-around menu menu-horizontal  gap-3 ">
      <MenuLink
        variant={currentLink === despre.href ? "active" : "default"}
        key={despre.name}
        // className={`hover:text-white rounded-lg p-3 hover:bg-accent uppercase transition-colors font-semibold `}
        href={despre.href}
      >
        {despre.name}
      </MenuLink>
      <div
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`dropdown dropdown-hover`}
      >
        <div tabIndex={0} role="button" className={MenuItemVariants()}>
          Servicii &#9662;
        </div>
        <ul
          tabIndex={0}
          className={
            "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96 "
          }
        >
          {servicii.map((s, idx) => {
            return (
              <li key={idx + s.name}>
                <MenuLink
                  variant={currentLink === s.href ? "active" : "default"}
                  href={s.href}
                >
                  {s.name}
                </MenuLink>
              </li>
            );
          })}
        </ul>
      </div>
      <MenuLink
        variant={currentLink === ilustratii.href ? "active" : "default"}
        href={ilustratii.href}
      >
        {ilustratii.name}
      </MenuLink>
    </div>
  );
};
export default Menu;
