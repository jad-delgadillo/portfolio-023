import React from "react";
import { SOCIALS } from "@/utils/data";
import Link from "next/link";

interface SocialItem {
  link: string;
  icon: JSX.Element;
}

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 mt-5">
      <div className="flex h-16 flex-col items-center justify-center">
        <ul className="flex flex-row items-center space-x-6">
          {SOCIALS.map((item: SocialItem, idx: number) => {
            return (
              <li key={idx}>
                <Link href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
