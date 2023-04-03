import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className=" text-white ">
        <nav className="  flex w-full top-0 ">
          <ul className="hidden pb-1 mb-8 px-6 md:flex gap-4 ml-auto text-lg font-extralight border-b border-white">
            <li className=" ">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/"
              >
                Home
              </Link>
            </li>
            /
            <li className="">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/about"
              >
                Tech
              </Link>
            </li>
            /
            <li className="">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/services"
              >
                Reviews
              </Link>
            </li>
            /
            <li className="">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/portfolio"
              >
                Science
              </Link>
            </li>
            /
            <li className="">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/blog"
              >
                Entertainment
              </Link>
            </li>
            /
            <li className="">
              <Link
                className="hover:text-gray-400 hover:transition-all hover:ease-in-out"
                href="/contact"
              >
                More
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="h-12 block align-middle items-center md:hidden pb-1 mb-8 px-3  ml-auto text-lg font-extralight border-b border-white hover:text-gray-400 hover:transition-all hover:ease-in-out"
          >
            <span className="  " href="/contact">
              Menu
            </span>
            <span className="inline-block font-normal hover:text-white-400 content-['+'] pl-1 text-4xl">
              +
            </span>
          </button>
        </nav>
      </div>
      <div className=" clear-both" />
      {/* <div className=" flex flex-row content-end md:hidden">
        <nav className=" text-white flex top-0  ml-auto">
          <Link className="" href="/">
            <div className="ml-auto hover:text-gray-400 hover:border-b-gray-400 pb-1 mb-8 px-6 flex self-end gap-4  text-lg font-extralight border-b border-white">
              Home
            </div>
          </Link>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
