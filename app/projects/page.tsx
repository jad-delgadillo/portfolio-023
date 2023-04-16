import Project from "@/components/Project";
import Link from "next/link";
import React from "react";
import { FiCoffee, FiMusic, FiMessageCircle } from "react-icons/fi";

export default function ProjectsPage() {
  return (
    <>
      <section>
        <div className="flex felx-row">
          <h1 className="text-6xl font-semibold leading-none pb-2 mb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-green-500 text-transparent">
            Projects.
          </h1>
          {/* <div className="flex ml-3 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </div> */}
        </div>
        <p className="mb-1 text-xl">
          Here are a few side projects I&#39;ve been working on. Check them out!
        </p>
        <h2 className="text-4xl font-semibold leading-relaxed inline-block">
          Web Apps
        </h2>
        <div className="flex flex-row">
          <Project
            id="buy-me-a-coffee"
            icon={<FiCoffee size={30} className="flex items-center" />}
            name="Buy me a coffee"
            description="A good way to support your favorite web developer."
          />
          <Project
            id="chat-app"
            icon={<FiMessageCircle size={30} className="flex items-center" />}
            name="Chat"
            description="The correct way to communicate."
          />
          <Project
            id="music-portfolio"
            icon={<FiMusic size={30} className="flex items-center" />}
            name="Music Portfolio"
            description="Dangerously good music."
          />
        </div>
        <h2 className="text-4xl font-semibold mt-4 leading-relaxed inline-block ">
          Mobile Apps
        </h2>
      </section>
    </>
  );
}
