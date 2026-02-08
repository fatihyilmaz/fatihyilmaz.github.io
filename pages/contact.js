import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/50">Contact</p>
        <h1 className="font-display text-5xl text-ink mt-6">Get in touch</h1>
        <p className="text-ink/70 mt-4 max-w-2xl">
          If you&apos;d like to discuss software platform delivery, project management leadership, or mentorship opportunities,
          feel free to reach out.
        </p>
        <div className="mt-10 grid gap-6 text-sm text-ink/70">
          <div className="border-t border-ink/10 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Email</p>
            <a href="mailto:ylmz.fth@gmail.com" className="mt-2 inline-block text-ink underline">
              ylmz.fth@gmail.com
            </a>
          </div>
          <div className="border-t border-ink/10 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/ylmzfth/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-ink underline"
            >
              linkedin.com/in/ylmzfth
            </a>
          </div>
          <div className="border-t border-ink/10 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Location</p>
            <p className="mt-2 text-ink/70">Karlsruhe, Germany</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
