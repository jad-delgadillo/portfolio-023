import React from "react";
import styles from "./style.module.scss";

export default function index({ data, selectedProject }: any) {
  const crop = ({ string, maxLength }: any) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map(
        (project: { title: string; description: string }, i: number) => {
          const { title, description } = project;
          return (
            <div
              key={i}
              className={styles.description}
              style={{
                clipPath:
                  selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
              }}
            >
              <p>{crop({ string: title, maxLength: 20 })}</p>

              <p className="hidden md:flex">{description}</p>
            </div>
          );
        }
      )}
    </div>
  );
}
