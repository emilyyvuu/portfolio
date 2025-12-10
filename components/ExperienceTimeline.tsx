"use client";

import { useEffect, useRef, useState } from "react";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
};

type ExperienceTimelineProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -35% 0px",
        threshold: 0,
      },
    );

    itemRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [experiences.length]);

  return (
    <div className="relative">
      <div
        className="timeline-line absolute left-[1.05rem] top-0 hidden h-full border-l border-[color:var(--pill-border)] md:block"
        aria-hidden="true"
      />
      <ul className="space-y-10">
        {experiences.map((experience, index) => (
          <li
            key={experience.company}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            data-index={index}
            className="relative pl-0 md:pl-12"
          >
            <span
              className={`timeline-dot absolute left-1 top-2 hidden h-3.5 w-3.5 rounded-full md:inline-block ${
                activeIndex === index ? "timeline-dot--active" : ""
              }`}
              aria-hidden="true"
            />

            <article className="rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/70 p-6 shadow-[0_25px_55px_rgba(0,0,0,0.25)] backdrop-blur-lg">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
                    {experience.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{experience.role}</h3>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    {experience.company} - {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--text-muted)]">
                  {experience.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[color:var(--pill-border)] px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </header>

              <p className="mt-5 text-base text-[color:var(--text-muted)]">{experience.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
