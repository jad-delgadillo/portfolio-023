"use client";
import React from "react";
import { SOCIALS } from "@/utils/data";
import Link from "next/link";
import styles from "./footer.module.scss";
import FramerMagnetic from "../components/framer";

interface SocialItem {
  link: string;
  icon: JSX.Element;
}

export default function Footer() {
  return (
    <footer className={`mx-auto w-full  mt-5 `}>
      <div className="flex items-center justify-center">
        <FramerMagnetic>
          <Link
            legacyBehavior
            href="mailto:jorge.aldem@gmail.com"
            target="_blank"
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </a>
          </Link>
        </FramerMagnetic>

        <FramerMagnetic>
          <Link href={"https://www.linkedin.com/in/alwaysjad"} target="_blank">
            <svg
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
            </svg>
          </Link>
        </FramerMagnetic>
      </div>
    </footer>
  );
}

{
  /* <ul className="flex flex-row items-center space-x-6">
            {SOCIALS.map((item: SocialItem, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul> */
}
