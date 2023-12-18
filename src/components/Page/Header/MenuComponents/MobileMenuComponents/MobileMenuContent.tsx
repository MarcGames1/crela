import React from 'react';
import styles from './MobileMenuContent.module.css';
import { menuItems } from '@/StaticData/constants';
import Link from 'next/link';
import { Menu } from 'react-daisyui';
import { ActionBtn } from '@/components/Buttons';

const MobileMenuContent = () => {
  return (
    <div
      onScroll={(e) => {}}
      className="fixed top-20  z-30  min-h-full h-auto "
    >
      <div className={`${styles.Overlay} flex place-content-center `}>
        <Menu
          className={`${styles.Content} transparent  bg-base-100 w-full flex items-center text-center`}
        >
          {menuItems.map((menuItem) => (
            <Menu.Item key={menuItem.href} className=" text-center text-3xl">
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </Menu.Item>
          ))}
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
