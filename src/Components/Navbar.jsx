import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto p-6 flex items-center justify-between">
      {/* Logo - always visible */}
      <img
        className="h-6"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="Refokus Logo"
      />

      {/* Links - visible only on medium screens and above */}
      <div className="hidden md:flex gap-14 ml-2">
        {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
          ) : (
            <a
              key={index}
              className="font-regular text-sm flex items-center gap-2"
              href="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.55em #00FF19" }}
                  className="inline-block w-[5px] h-[5px] rounded-full bg-green-600"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>

      <Button />
    </div>
  );
}

export default Navbar;
