"use client";
import { menus } from "@/constance/menus";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DrawerNav from "./DrawerNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between py-4 border-b border-[#FAF9FF] px-6 sm:px-[100px] shadow-sm w-full">
        <div className="flex items-center justify-center md:justify-start flex-grow">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="max-w-[90px] max-h-[45px] min-w-[81px] max-h-[41px]"
          />
        </div>

        <div className="hidden md:flex flex-row items-center gap-6 ">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              className={`!no-underline hover:no-underline focus:outline-none outline-none ${
                pathname === menu.href ? "text-red-700" : "text-gray-900"
              } `}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden items-center">
          <Image
            src="/assets/bars.png"
            alt="toggle-drawer"
            width={24}
            height={24}
            className="max-w-[24px] max-h-[24px] cursor-pointer"
            onClick={toggleDrawer(!open)}
          />
        </div>
      </div>
      <div className="block md:hidden">
        <DrawerNav open={open} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
};

export default Navbar;
