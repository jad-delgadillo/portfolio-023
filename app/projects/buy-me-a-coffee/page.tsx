import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumb from "../buy-me-a-coffee/thumb.png";

const stack = [
  {
    name: "Next",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Typescript",
  },
  {
    name: "Stripe",
  },
];

export default function BMACPage() {
  return (
    <section>
      <main className="text-xl">
        <div className="flex flex-col flex-auto max-w-[500px]">
          <h1 className="text-4xl font-semibold leading-none pb-2 mb-1 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
            Buy me a Coffee
          </h1>
          <div className="mb-1">
            <Link target="_blank" href={"https://coffee.alwaysjad.dev"}>
              <Image
                src={thumb}
                alt="picture of the website project."
                width={500}
                height={500}
                className="rounded-2xl mb-1 border border-neutral-700 hover:scale-[101%] hover:shadow-green-300 shadow-sm transition-all"
              />
            </Link>
          </div>
          <div className="flex flex-row mb-1">
            {stack.map((item, idx) => {
              return (
                <div key={idx}>
                  <h2 className="border flex py-1 px-2 m-1 text-base rounded-lg border-cyan-200 text-cyan-200">
                    {item.name}
                  </h2>
                </div>
              );
            })}
          </div>
          {/* <p>
            Tec-Stack: <br />
            Next.js, Tailwind, TypeScript, and the Stripe API.
          </p> */}
          <p className="text-justify text-base font-light bg-neutral-900 p-2 mt-1 rounded-lg border border-neutral-700">
            Imagine a website that serves as a one-stop-shop for web developers,
            providing valuable tips and tricks on how to build amazing web
            applications. <br />
            This is a convinient tool and solution to support your favorite
            developer.
          </p>
        </div>
      </main>
    </section>
  );
}
