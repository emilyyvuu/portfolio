import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-5xl font-bold mt-2">
          Hi, I'm <span className="text-sky-400">Emily!</span>
        </h1>

        <p className="mt-6 text-lg text-slate-500">
          I'm a computer science student at Virginia Tech interested in software
          engineering. Welcome to my portfolio!
        </p>
        <div className="flex gap-4 mt-6">
          <a href="/experience" className="px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition">
            Experience
          </a>
          <a href="/projects" className="px-4 py-2 rounded-md border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">
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
        className="w-70 h-70 rounded-full object-cover shadow-lg"
      />
    </section>
  );
}
