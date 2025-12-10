import TypewriterText from "@/components/TypewriterText";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const typewriterPhrases = [
  "Aspiring Software Engineer",
  "Tech explorer & problem solver",
  "Writing code that makes an impact",
  "Always curious, always creating",
  "Learning. Building. Improving."
]

export default function Home() {
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center gap-12 py-8 text-[color:var(--text-primary)] md:flex-row">
      <div className="flex max-w-xl flex-col">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Computer Science Student
        </p>

        <h1 className="mt-3 text-5xl font-semibold leading-tight text-[color:var(--text-primary)]">
          Hi, I'm <span className="text-[color:var(--text-muted)]">Emily!</span>
        </h1>

        <TypewriterText
          phrases={typewriterPhrases}
          className="mt-3 text-[0.7rem] uppercase tracking-[0.7em] text-[color:var(--text-muted)]"
          speed={65}
          pause={900}
        />

        <p className="mt-6 text-lg text-[color:var(--text-muted)]">
          I'm a computer science senior at Virginia Tech interested in software engineering. I enjoy
          building user-focused applications and learning new technologies along the way.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-base font-medium">
          <a href="/experience" className="button button--solid">
            Experience
          </a>
          <a href="/projects" className="button button--outline">
            Projects
          </a>
        </div>
        <div className="mt-6 flex gap-6 text-2xl text-[color:var(--text-muted)]">
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
        className="h-60 w-60 rounded-full border border-[color:var(--pill-border)] object-cover shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
      />
    </section>
  );
}
