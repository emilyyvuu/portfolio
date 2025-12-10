"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  phrases: string[];
  className?: string;
  speed?: number;
  pause?: number;
};

export default function TypewriterText({
  phrases,
  className = "",
  speed = 80,
  pause = 1400,
}: TypewriterTextProps) {
  const items = useMemo(
    () => (phrases.length > 0 ? phrases : [""]),
    [phrases],
  );
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = items[index % items.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    } else {
      const nextLength = text.length + (isDeleting ? -1 : 1);
      timeout = setTimeout(
        () => setText(currentPhrase.slice(0, nextLength)),
        isDeleting ? speed / 2 : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [items, index, isDeleting, pause, speed, text]);

  useEffect(() => {
    setText("");
    setIsDeleting(false);
    setIndex(0);
  }, [items]);

  return (
    <span className={`typewriter ${className}`.trim()}>
      {text}
      <span className="typewriter__caret" aria-hidden="true" />
    </span>
  );
}
