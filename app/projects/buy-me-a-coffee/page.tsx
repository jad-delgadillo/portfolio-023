import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumb from "../buy-me-a-coffee/thumb.png";

export default function BMACPage() {
  return (
    <section>
      <main className="text-xl">
        <div>
          <h1 className="text-4xl font-semibold leading-none pb-2 mb-1 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
            Buy me a Coffee
          </h1>
          <Link target="_blank" href={"https://coffee.alwaysjad.dev"}>
            <Image
              src={thumb}
              alt="picture of the website project."
              width={500}
              height={500}
              className="rounded-2xl mb-1"
            />
          </Link>
          <p>In this website </p>
        </div>
      </main>
    </section>
  );
}
