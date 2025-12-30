import ExperienceTimeline, { type ExperienceItem } from "@/components/ExperienceTimeline";
import TypewriterText from "@/components/TypewriterText";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const typewriterPhrases = [
  "Aspiring Software Engineer",
  "Tech explorer & problem solver",
  "Writing code that makes an impact",
  "Always curious, always creating",
  "Learning. Building. Improving.",
];

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

const projects = [
  {
    title: "Project 1 Coming Soon",
    summary: "Project description coming soon.",
    stack: ["Tool 1", "Tool 2", "Tool 3", "Tool 4"],
    link: "#",
  },
  {
    title: "Project 2 Coming Soon",
    summary: "Project description coming soon.",
    stack: ["Tool 1", "Tool 2"],
    link: "#",
  },
  {
    title: "Project 3 Coming Soon",
    summary: "Project description coming soon.",
    stack: ["Tool 1", "Tool 2"],
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-8 text-[color:var(--text-primary)]">
      <section
        id="home"
        className="scroll-mt-24 flex min-h-[calc(100svh-var(--nav-offset))] flex-col items-center justify-center gap-10 py-6 text-center md:flex-row md:gap-12 md:text-left"
      >
        <div className="flex max-w-xl flex-col">
          <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--text-muted)] sm:text-xs">
            Computer Science Student
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[color:var(--text-primary)] sm:text-5xl">
            Hi, I'm <span className="text-[color:var(--text-muted)]">Emily!</span>
          </h1>

          <TypewriterText
            phrases={typewriterPhrases}
            className="mt-3 text-[0.6rem] uppercase tracking-[0.4em] text-[color:var(--text-muted)] sm:text-[0.7rem] sm:tracking-[0.7em]"
            speed={65}
            pause={900}
          />

          <p className="mt-6 text-base text-[color:var(--text-muted)] sm:text-lg">
            I'm a computer science senior at Virginia Tech interested in software engineering. I enjoy
            building user-focused applications and learning new technologies along the way.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-base font-medium md:justify-start">
            <a href="/#experience" className="button button--solid">
              Experience
            </a>
            <a href="/#projects" className="button button--outline">
              Projects
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-2xl text-[color:var(--text-muted)] md:justify-start">
            <a
              href="https://github.com/emilyyvuu"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[color:var(--text-primary)]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/emilybvu"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[color:var(--text-primary)]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:emilyvu@vt.edu"
              className="transition hover:text-[color:var(--text-primary)]"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <img
          src="/headshot.jpg"
          alt="Emily Vu headshot"
          className="h-44 w-44 rounded-full border border-[color:var(--pill-border)] object-cover shadow-[0_25px_45px_rgba(0,0,0,0.35)] sm:h-56 sm:w-56 md:h-60 md:w-60"
        />
      </section>

      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 space-y-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Experience</p>
          <h2 id="experience-title" className="text-3xl font-semibold leading-tight sm:text-4xl">
            Experience
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)] sm:text-base">
            Learn more about my recent roles, education, and skills.
          </p>
        </div>

        <section aria-labelledby="experience-roles-heading" className="space-y-10">
          <div className="space-y-2">
            <h3
              id="experience-roles-heading"
              className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]"
            >
              Roles
            </h3>
            <p className="text-lg font-semibold text-[color:var(--text-primary)]">Recent teams & missions</p>
          </div>
          <ExperienceTimeline experiences={experiences} />
        </section>

        <section aria-labelledby="education-heading" className="space-y-6">
          <div className="space-y-2">
            <h3 id="education-heading" className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Education
            </h3>
            <p className="text-lg font-semibold text-[color:var(--text-primary)]">Foundations</p>
          </div>
          <article className="rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/70 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-lg">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
                  {education.location}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{education.school}</h3>
              </div>
            </header>
            <ul className="mt-5 space-y-4 text-sm text-[color:var(--text-muted)]">
              {education.programs.map((program) => (
                <li
                  key={program.name}
                  className="rounded-2xl border border-[color:var(--pill-border)]/70 bg-[color:var(--surface)]/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
                    {program.period}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[color:var(--text-primary)]">{program.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{program.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section aria-labelledby="skills-heading" className="space-y-6">
          <div className="space-y-2">
            <h3 id="skills-heading" className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              Skills
            </h3>
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

      <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Projects</p>
          <h2 id="projects-title" className="text-3xl font-semibold leading-tight sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)] sm:text-base">
            A collection of the projects I've worked on.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="space-y-4 rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/75 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.25)] backdrop-blur-lg"
            >
              <header className="space-y-1">
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
              </header>
              <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{project.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-full border border-[color:var(--pill-border)] px-3 py-1 text-[color:var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="button button--outline flex items-center justify-center gap-2 text-sm"
                  aria-label={`${project.title} GitHub link`}
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Contact</p>
          <h2 id="contact-title" className="text-3xl font-semibold leading-tight sm:text-4xl">
            Contact
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)] sm:text-base">
            Please feel free to reach out!
          </p>
        </div>
        <form
          action="https://formspree.io/f/movgkrzn"
          method="POST"
          className="space-y-5 rounded-3xl border border-[color:var(--pill-border)] bg-[color:var(--surface)]/70 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.3)] backdrop-blur-lg"
        >
          <input type="hidden" name="_subject" value="Portfolio contact" />
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[color:var(--text-primary)]">
              Name
            </label>
            <input id="name" type="text" name="name" required className="input" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[color:var(--text-primary)]">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="input"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[color:var(--text-primary)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="input"
              placeholder="Write your message here..."
            />
          </div>
          <button type="submit" className="button button--solid w-full">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
