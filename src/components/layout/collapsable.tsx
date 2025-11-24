'use client'

import React, {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

export default function Collapsible({title, children,}: Readonly<{
  title: React.ReactNode;
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
          <div className="w-full">
            <button onClick={() => setOpen((o) => !o)}
                    className="w-full text-left py-2 font-semibold flex justify-between items-center border-b-3 ">
              <span className=" bg-gradient-to-r  bg-[length:200%_100%] bg-clip-text animate-shimmer motion-reduce:animate-none">
                {title}
              </span>
              <span>{open ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
            </button>

            {open && (
                    <div className="mt-2 pl-2">
                      {children}
                    </div>
            )}
          </div>
  );
}
