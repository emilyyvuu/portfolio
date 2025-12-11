export default function ContactPage() {
  return (
    <section className="space-y-10 text-[color:var(--text-primary)]">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight">Contact</h1>
        <p className="max-w-2xl text-base text-[color:var(--text-muted)]">
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
  );
}
