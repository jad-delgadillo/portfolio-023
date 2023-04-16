import Link from "next/link";
import React from "react";

export default function Project({ name, description, icon, id, i }: any) {
  return (
    <section key={i} className="mr-4 md:w-1/4 md:items-start  flex-1">
      <Link href={`/projects/${id}`} passHref scroll={false}>
        <div className="hover:text-green-300 transition-all mt-4 bg-neutral-900 hover:bg-neutral-800 p-3 flex-1 rounded-xl md:inline-block">
          <div className="">
            <div className="flex flex-row items-center mb-2">
              <h1 className="text-2xl border-b-2 border-b-green-300">{name}</h1>
              <div className="ml-3">{icon}</div>
            </div>
            <p className="font-extralight text-xl ">{description}</p>
          </div>
        </div>
      </Link>
      {/* <Link href={`/projects/${id}`} passHref scroll={false}>
        </Link> */}
    </section>
  );
}
