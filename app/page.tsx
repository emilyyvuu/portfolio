import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-[75vh] flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Computer Science Student
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Hi, I'm <span className="text-sky-400">Emily!</span>
        </h1>

        <p className="mt-6 text-lg text-slate-500">
          I'm a computer science senior at Virginia Tech interested in software
          engineering. I enjoy building user-focused applications and learning
          new technologies along the way. 
        </p>

        <div className="flex gap-3 mt-6">
          <a href="/experience" className="px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition">
            Experience
          </a>
          <a href="/projects" className="px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">
            Projects
          </a>
        </div>
        <div className="flex gap-6 mt-6 text-2xl text-slate-400">
          <a
            href="https://github.com/emilyyvuu"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/emilybvu"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:emilyvu@vt.edu"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>

      <img
        src="/headshot.jpg"
        alt="Emily Vu headshot"
        className="w-60 h-60 rounded-full object-cover shadow-lg"
      />
    </section>
  );
}
