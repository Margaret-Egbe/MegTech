"use client";

import type { ReactNode } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

type Props = {
  children: ReactNode[];
  stagger?: number;
};

const StaggeredList = ({ children, stagger = 0.15 }: Props) => {
  return (
    <>
      {children.map((child, i) => (
        <FadeInWhenVisible key={i} delay={i * stagger}>
          {child}
        </FadeInWhenVisible>
      ))}
    </>
  );
};

export default StaggeredList;
