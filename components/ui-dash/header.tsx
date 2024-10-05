"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { PiNotebook } from "react-icons/pi";
import { BiHomeSmile } from "react-icons/bi";
import { PiGearSix } from "react-icons/pi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import clsx from "clsx";

const Header = () => {
    const pathname = usePathname()

    console.log(pathname.slice(1))
  return (
    <header className="p-4 flex justify-between items-center">
      <h2 className="font-medium tracking-tight text-2xl">{pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}</h2>

      <Sheet>
        <SheetTrigger className="md:hidden hover:bg-gray-100 p-2 rounded-md text-2xl">
          <HiOutlineMenuAlt4 />
        </SheetTrigger>
        <SheetContent side="left" className="max-w-[250px] w-full">
            <SheetTitle></SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-4">
              <h1 className="logo">Studily</h1>

              <div className="flex flex-col font-medium mt-4">
                <SheetClose asChild>
                  <Link href="/dashboard" className="menu-item">
                    <BiHomeSmile /> Dashboard
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/assignments" className="menu-item">
                    <PiNotebook /> Assignments
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/settings" className="menu-item">
                    <PiGearSix /> Settings
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
