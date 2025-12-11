import { FaGithub } from "react-icons/fa";

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

export default function ProjectsPage() {
  return (
    <section className="space-y-10 text-[color:var(--text-primary)]">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold leading-tight">Projects</h1>
        <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
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
              <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h2>
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
  );
}
