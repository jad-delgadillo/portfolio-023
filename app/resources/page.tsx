"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/Accordion";
import { motion, AnimatePresence } from "framer-motion";
import { RESOURCES } from "@/utils/data";

export default function pageResources({}) {
  const sortedArr = RESOURCES.sort((a, b) =>
    a.section.localeCompare(b.section)
  );
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" flex flex-col"
      >
        <h1 className="text-6xl font-semibold leading-none pb-2 mb-2 bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-600 text-transparent">
          Resources.
        </h1>
        <p className=" max-w-[500px] text-justify">
          Here are a few resources I&#39;ve have compiled along the way that I
          reference frequently and find very useful. <br /> It&#39;s a work in
          progress.
        </p>
        <div>
          {sortedArr.map((item, idx) => {
            const sortedSubArr = item.data.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            return (
              <Accordion
                key={idx}
                className="flex flex-col"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.section}</AccordionTrigger>

                  <AccordionContent>
                    <ul className="ml-8 list-disc text-stone-100 ">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              {" "}
                              <a
                                href={i.link}
                                target="_blank"
                                className="underline hover:text-stone-400"
                              >
                                {i.name}
                              </a>
                              {" - "}
                              {i.description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
