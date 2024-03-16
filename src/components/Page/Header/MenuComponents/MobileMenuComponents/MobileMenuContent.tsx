import React from "react";
import styles from "./MobileMenuContent.module.css";
import { despre, ilustratii, servicii } from "@/StaticData/constants";
import Link from "next/link";
import { Menu } from "react-daisyui";
import { ActionBtn } from "@/components/Buttons";

const MobileMenuContent = () => {
  return (
    <div
      onScroll={(e) => {}}
      className="absolute top-15  z-20  max-h-80 h-auto "
    >
      <div className={`${styles.Overlay} flex place-content-center z-20 `}>
        <Menu
          className={`${styles.Content} transparent  bg-base-100 w-full flex items-center text-center`}
        >
          <Menu.Item className=" text-center  sm:text-2xl text-3xl">
            <Link href={despre.href}>{despre.name}</Link>
          </Menu.Item>

          {servicii.map((s, i) => {
            return (
              <Menu.Item
                key={i + s.name}
                className=" text-center sm:text-2xl text-3xl"
              >
                <Link href={s.href}>{s.name}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item className=" text-center sm:text-2xl text-3xl">
            <Link href={ilustratii.href}>{ilustratii.name}</Link>
          </Menu.Item>
          <div className="flex flex-col gap-5">
            <ActionBtn.MainCta />
            <ActionBtn.Whatsapp />
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default MobileMenuContent;
