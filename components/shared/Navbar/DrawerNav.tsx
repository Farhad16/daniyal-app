import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { menus } from "@/constance/menus";
import Link from "next/link";
import Image from "next/image";

export default function DrawerNav({ open, toggleDrawer }: any) {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor="top">
      <div className="flex flex-row items-center justify-between py-4 border-b border-[#FAF9FF] px-6 sm:px-[60px] xl:px-[100px] shadow-sm w-full">
        <div className="flex items-center justify-center md:justify-start flex-grow">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="max-w-[90px] max-h-[45px] min-w-[81px] max-h-[41px]"
          />
        </div>

        <Image
          src="/assets/x-mark.png"
          alt="toggle-drawer"
          width={24}
          height={24}
          className="max-w-[24px] max-h-[24px] cursor-pointer"
          onClick={toggleDrawer(!open)}
        />
      </div>
      <div className="bg-red-700 text-[#E5E7EB] flex flex-col px-6 gap-7 py-6 pb-10 ">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            className={`!no-underline hover:no-underline focus:outline-none outline-none`}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </Drawer>
  );
}
