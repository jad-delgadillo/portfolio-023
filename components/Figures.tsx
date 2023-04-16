import React from "react";

export default function Figures() {
  return (
    <main>
      <div className="absolute top-20 flex max-w-md flex-col items-center -z-10  justify-start filter dark:mix-blend-screen md:max-w-7xl">
        <div className="animation-delay-2000 absolute -left-4 top-20 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-90 mix-blend-multiply blur-2xl filter md:h-96 md:w-96"></div>
        <div className="absolute left-0 top-96 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-90 mix-blend-multiply blur-2xl filter md:left-80 md:top-20 md:h-96 md:w-96 "></div>
        <div className="animation-delay-4000 absolute bottom-1 left-0 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-90 mix-blend-multiply blur-2xl filter md:top-80 md:h-96 md:w-96"></div>
      </div>
    </main>
  );
}
