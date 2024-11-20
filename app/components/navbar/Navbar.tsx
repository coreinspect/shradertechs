"use client";

import Image from "next/image";
import "./navbar.css";
import { NavData } from "../data/data";
import Link from "next/link";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

import {
  FaArrowUpRightDots,
  FaBars,
  FaRightFromBracket,
} from "react-icons/fa6";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <div className="w-full h-24 navbar-container flex items-center ">
      <Popover className={"container mx-auto flex items-center px-6 py-2 h24"}>
        {/* *** Logo *** */}
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={230}
            height={100}
            priority
          />
        </div>

        {/* ***  menu *** */}
        <div className="grow ">
          <ul className="hidden sm:flex items-center justify-center gap-2 md:gap-8 menu">
            {NavData.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="uppercase font-[family-name:var(--poppins)] menu-link"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* *** Mobile menu button *** */}
        <div className="flex grow items-center justify-end sm:hidden mobile">
          <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 openmenu">
            {({ open }) => (
              <>
                <span className="sr-only">
                  {open ? "Close Menu" : "Open Menu"}
                </span>
                {open ? (
                  <FaRightFromBracket className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="h-6 w-6" aria-hidden="true" />
                )}
              </>
            )}
          </PopoverButton>
        </div>

        {/* *** Mobile menu Panel *** */}
        <PopoverBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50 " />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition z-50"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-500">
              <div className="px-5 pt-5 pb-6 z-50">
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/logoheader.png"
                    alt="logo"
                    width={150}
                    height={100}
                    loading="eager"
                    priority
                  />
                  <div className="-mr-2">
                    <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 closemenu">
                      <span className="sr-only">Close Menu</span>
                      <FaRightFromBracket
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <ul>
                      {NavData.map((item) => {
                        return (
                          <li
                            key={item.id}
                            className="focus:outline-none focus-ring-inset focus:ring-gray-500 px-2 font-[family-name:var(--poppins)] mobilemenu"
                          >
                            <Link href={item.url}>{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
                <div className="w-full flex justify-center">
                  <Link
                    href="/getstarted"
                    className="py-3 px-6 font-[family-name:var(--poppins)] getstarted-mobile"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
        {/* *** Get Started Button *** */}
        <div className="hidden sm:block">
          <Link
            href="/getstarted"
            className="py-3 px-6 font-[family-name:var(--poppins)] getstarted"
          >
            Let&apos;s Talk
            <span className="ml-2">
              <FaArrowUpRightDots className="h-6 w-6 arrow" />
            </span>
          </Link>
        </div>
      </Popover>
    </div>
  );
}
