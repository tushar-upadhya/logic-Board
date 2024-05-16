import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import { socials } from "../utils/socialsUtils";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentMonth = useMemo(
    () => new Date().toLocaleString("default", { month: "long" }),
    []
  );

  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="pt-8 border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs font-semibold lg:justify-end">
            <li>
              ©
              <Link
                to={"https://tusharupadhyay.vercel.app/"}
                rel="noopener noreferrer"
                className="text-gray-500 transition cursor-pointer hover:opacity-75"
              >
                {"  "} Tushar Upadhyay
              </Link>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                {currentMonth} {currentYear}
              </a>
            </li>
          </ul>

          <ul className="flex justify-center gap-6 mt-8 font-semibold sm:mt-0 lg:justify-end">
            {socials.map((item, index) => {
              return (
                <li
                  className="text-gray-700 transition hover:opacity-75"
                  key={index}
                >
                  <Link
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.Icon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
