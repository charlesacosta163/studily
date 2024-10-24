"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";

import { PiNotebook } from "react-icons/pi";
import { BiHomeSmile } from "react-icons/bi";
import { PiGearSix } from "react-icons/pi";
import { GiBookmark } from "react-icons/gi";

type LinkProps = {
  id: number;
  name: string;
  link: string;
  icon: React.JSX.Element;
};

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      id: 0,
      name: "Dashboard",
      link: "/dashboard",
      icon: <BiHomeSmile />,
    },
    {
      id: 1,
      name: "Assignments",
      link: "/assignments",
      icon: <PiNotebook />,
    },
    {
      id: 2,
      name: "Settings",
      link: "/settings",
      icon: <PiGearSix />,
    },
  ];

  return (
    <div className="hidden max-w-[250px] md:flex md:flex-col md:items-center w-full py-8">
      <h1 className="logo text-3xl flex items-center gap-2">
        <GiBookmark className="text-2xl text-blue-400" />
        Studily
      </h1>

      <div className="flex flex-col font-medium mt-4 p-4 w-full self-start">
        {links.map((e: LinkProps) => {
          return (
            <Link
              key={e.id}
              href={e.link}
              className={clsx(
                `flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer`,
                pathname.slice(1).toLowerCase() === e.name.toLowerCase() &&
                  "bg-blue-600 text-white"
              )}
            >
              {e.icon}
              <span>{e.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
