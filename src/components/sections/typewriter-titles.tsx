"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTitlesProps {
  titles?: string[];
  className?: string;
}

const TypewriterTitles = ({
  titles = ["Full Stack", "Software", "Web", "Java"],
  className,
}: TypewriterTitlesProps) => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;
    const delay = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setCharIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <span className={cn(className, "relative inline-block")}>
      A {displayText}
      <span
        className="inline-block w-1 bg-current animate-pulse"
        style={{ height: "1em", marginLeft: "4px", marginBottom: "3px", verticalAlign: "text-bottom" }}
      ></span>
      {displayText && <> Developer</>}
    </span>
  );
};

export default TypewriterTitles;
