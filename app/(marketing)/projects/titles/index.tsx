import React, { useRef } from "react";
import styles from "./style.module.scss";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  speed: number;
  slug: string; // Add the slug property
}

interface Props {
  data: Project[];
  setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Titles({ data, setSelectedProject }: Props) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        if (!project.slug) {
          console.error(`Missing slug for project title: ${project.title}`);
          return null; // Don't render this title
        }
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

interface TitleProps {
  data: {
    title: string;
    speed: number;
    i: number;
    slug: string; // Add the slug
  };
  setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
}

function Title({ data, setSelectedProject }: TitleProps) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className={styles.title}>
      <Link href={data.slug}>
        <div>
          <div
            className={styles.wrapper}
            onMouseOver={() => {
              setSelectedProject(data.i);
            }}
            onMouseLeave={() => {
              setSelectedProject(null);
            }}
          >
            <motion.p style={{ clipPath: clip }}>{data.title}</motion.p>
            <p>{data.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
