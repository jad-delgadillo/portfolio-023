import React from "react";
import Figures from "./Figures";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <div>
      <main className="">
        <div className="max-h-screen">
          <div className="opacity-100">
            <Figures />
          </div>
          <HeroTitle />
        </div>
      </main>
    </div>
  );
}
