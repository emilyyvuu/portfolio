import ExperienceTimeline, { type ExperienceItem } from "@/components/ExperienceTimeline";

const experiences: ExperienceItem[] = [
  {
    company: "SAP NS2",
    role: "Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    location: "Newtown Square, PA",
    summary:
      "Applied a custom Vue 2 to Vue 3 migration framework across multiple enterprise apps, replacing incompatible libraries, fixing 30+ regressions, and validating production deployments through full regression suites.",
    stack: ["Vue.js", "Vite", "TypeScript", "Python"],
  },
  {
    company: "Hume Center for National Security and Technology",
    role: "Research Assistant",
    period: "Dec 2024 - May 2025",
    location: "Blacksburg, VA",
    summary:
      "Worked with SAP NS2 to build a repeatable Vue 2 to Vue 3 upgrade workflow: component refactors, library swaps, a Webpack-to-Vite migration, and Python automation that accelerated 200+ syntax updates.",
    stack: ["Vue.js", "Vite", "Python", "TypeScript"],
  },
  {
    company: "Virginia Tech Department of Computer Science",
    role: "Undergraduate Researcher",
    period: "Aug 2024 - Dec 2024",
    location: "Blacksburg, VA",
    summary:
      "Built front-end components for the Computer Systems Genome project and upgraded D3.js visualizations from v5 to v7 to modernize event handling and rendering.",
    stack: ["React", "D3.js", "TypeScript"],
  },
  {
    company: "Phronesis Concepts Inc.",
    role: "Software Engineer Intern",
    period: "May 2024 - Aug 2024",
    location: "Oakton, VA",
    summary:
      "Developed a full-stack business management system centralizing employees, projects, and finances with responsive UI for time sheets and admin workflows.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
  },
];

const education = {
  school: "Virginia Tech",
  location: "Blacksburg, VA",
  programs: [
    {
      name: "B.S. Computer Science",
      period: "Aug 2023 - May 2026",
      detail:
      "Relevant coursework: Data Structures and Algorithms, Operating Systems, Computer Organization, Software Engineering, Object-Oriented Programming, Database Management Systems",
    },
    {
      name: "M.Eng. Computer Science and Applications",
      period: "Aug 2026 - May 2027",
      detail: "Accelerated Master's Program",
    },
  ],
};

const skills = [
  {
    label: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "C", "Python", "HTML/CSS", "SQL", "MATLAB"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Vue.js", "React.js", "Next.js", "Node.js", "Express.js", "D3.js"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "Vite", "Docker", "Postman", "MySQL", "PostgreSQL"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="space-y-16 text-[color:var(--text-primary)]">
      <div className="space-y-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight">
            Experience <br/>
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--text-muted)]">
            Learn more about my recent roles, education, and skills.
          </p>
        </div>
      </div>

      <section aria-labelledby="experience-heading" className="space-y-10">
        <div className="space-y-2">
          <h2 id="experience-heading" className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            Roles
          </h2>
          <p className="text-lg font-semibold text-[color:var(--text-primary)]">Recent teams & missions</p>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </section>

      <section aria-labelledby="education-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="education-heading" className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            Education
          </h2>
          <p className="text-lg font-semibold text-[color:var(--text-primary)]">Foundations</p>
        </div>
        <article className="rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/70 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-lg">
          <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">{education.location}</p>
              <h3 className="mt-2 text-2xl font-semibold">{education.school}</h3>
            </div>
          </header>
          <ul className="mt-5 space-y-4 text-sm text-[color:var(--text-muted)]">
            {education.programs.map((program) => (
              <li
                key={program.name}
                className="rounded-2xl border border-[color:var(--pill-border)]/70 bg-[color:var(--surface)]/80 p-4"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">{program.period}</p>
                <p className="mt-2 text-base font-semibold text-[color:var(--text-primary)]">{program.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{program.detail}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section aria-labelledby="skills-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="skills-heading" className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            Skills
          </h2>
          <p className="text-lg font-semibold text-[color:var(--text-primary)]">Tools I reach for</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.label}
              className="rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/70 p-5 text-sm text-[color:var(--text-muted)] shadow-[0_15px_35px_rgba(0,0,0,0.25)] backdrop-blur-lg"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">{group.label}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-[color:var(--text-primary)]">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-[color:var(--pill-border)] px-3 py-1 text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
