import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute top-16 -right-16 w-80 h-80 rounded-full bg-sky/30 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-ink text-frost px-3 py-1 rounded-full text-xs uppercase tracking-[0.25em]">
              Senior Software Project Manager
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ink mt-6">
              Fatih Yılmaz
            </h1>
            <p className="text-lg text-ink/70 mt-6">
              Project Manager for SINEC NSP, a network services platform that empowers industrial solutions including the
              <span className="font-semibold text-ink"> Industrial 5G Private Network</span>.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact/"
                className="bg-ink text-frost px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-dune transition"
              >
                Schedule a Call
              </Link>
              <Link
                href="/about/"
                className="border border-ink/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:border-ink/40"
              >
                View Resume
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-ink/70">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint"></span>
                Senior Software Project Manager
              </span>
              <span>Industrial network solutions</span>
              <span>Open to project management mentorship</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-6 bg-frost shadow-soft rounded-2xl px-4 py-3 text-xs font-semibold text-ink/70">
              Industrial software program leadership
            </div>
            <div className="absolute -bottom-6 -right-4 bg-ink text-frost shadow-glow rounded-2xl px-5 py-4 text-sm">
              Software platform project management
            </div>
            <div className="bg-frost border border-ink/10 rounded-[32px] p-6 shadow-glow">
              <img
                src="/profile.jpg"
                alt="Profile Photo"
                className="rounded-[24px] w-full h-[420px] object-cover object-top"
              />
              <div className="mt-6">
                <h2 className="font-display text-2xl text-ink">Fatih Yılmaz</h2>
                <p className="text-sm text-ink/60 mt-2">
                  Senior Software Project Manager focused on industrial network solutions.
                </p>
                <div className="flex gap-3 mt-4 text-xs uppercase tracking-[0.2em] text-ink/60">
                  <span>SINEC NSP</span>
                  <span>SINEC INS</span>
                  <span>Network Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            value: 'International teams',
            label: 'Led software development teams across multiple countries, fostering collaboration and innovation.'
          },
          {
            value: 'SINEC NSP',
            label:
              'Project Manager for the network services platform that empowers industrial solutions including Industrial 5G.'
          },
          {
            value: 'SINEC INS',
            label: 'Led the Infrastructure Network Services project from scratch.'
          }
        ].map((stat) => (
          <div key={stat.value} className="bg-white border border-ink/10 rounded-3xl p-6 shadow-soft">
            <p className="font-display text-3xl text-ink">{stat.value}</p>
            <p className="text-sm text-ink/60 mt-3">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Signature Work</p>
            <h2 className="font-display text-4xl text-ink mt-4">Software platforms for industrial networks.</h2>
          </div>
          <Link href="/about/" className="text-sm uppercase tracking-[0.2em] text-ink/70 hover:text-ink">
            Explore the full story →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: 'SINEC NSP',
              desc:
                'Project Manager for the network services platform that empowers industrial solutions including Industrial 5G.'
            },
            {
              title: 'SINEC INS',
              desc: 'Led the Infrastructure Network Services project from scratch.'
            },
            {
              title: 'International Teams',
              desc: 'Led international software development teams across multiple countries.'
            }
          ].map((item) => (
            <div key={item.title} className="bg-ink text-frost rounded-3xl p-6 shadow-glow">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="text-sm text-frost/70 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white border border-ink/10 rounded-[28px] p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Expertise</p>
          <h2 className="font-display text-3xl text-ink mt-4">Project management for industrial networks.</h2>
          <div className="mt-8 space-y-4 text-ink/70">
            <p>Expert in software platform project management focused on industrial network solutions.</p>
            <p>Led international software development teams across multiple countries, fostering collaboration and innovation.</p>
            <p>Project Manager for SINEC NSP, including Industrial 5G Private Network initiatives.</p>
          </div>
        </div>
        <div className="bg-ink text-frost rounded-[28px] p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-frost/50">Education</p>
          <h2 className="font-display text-3xl mt-4">Formal background.</h2>
          <div className="mt-8 space-y-5 text-sm text-frost/70">
            <p>BSc in Computer Engineering from Istanbul Technical University.</p>
            <p>MBA from Istanbul Technical University.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-frost border border-ink/10 rounded-[28px] p-8 md:p-12 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Let&apos;s Build</p>
            <h2 className="font-display text-3xl text-ink mt-4">Interested in working together?</h2>
            <p className="text-ink/70 mt-3">Reach out to start a conversation.</p>
          </div>
          <Link
            href="/contact/"
            className="bg-ink text-frost px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-dune transition"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
