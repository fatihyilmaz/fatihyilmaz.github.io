import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/50">Senior Software Project Manager</p>
            <h1 className="font-display text-6xl md:text-7xl leading-[1.05] text-ink mt-6">
              Fatih Yılmaz
            </h1>
            <p className="text-xl text-ink/70 mt-6 max-w-2xl">
              Senior software project manager with a strong technical background. Leading software platform initiatives that
              provide identity access management, dashboards, logging, and license management to speed time-to-market of
              multiple products, including Industrial 5G.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink/60 uppercase tracking-[0.15em]">
              <span>Karlsruhe, Germany</span>
              <span>Open to project management mentorship</span>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/about/"
                className="text-sm uppercase tracking-[0.3em] border-b border-ink pb-2 hover:text-ink/70"
              >
                View Resume
              </Link>
              <Link
                href="/contact/"
                className="text-sm uppercase tracking-[0.3em] border-b border-ink pb-2 hover:text-ink/70"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/profile.jpg"
              alt="Fatih Yılmaz"
              className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-full border border-ink/10"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {[
          {
            value: '€10M R&D',
            label: 'Led software projects totaling around 10 million euros in R&D budget.'
          },
          {
            value: 'Teams of 10+',
            label: 'Led teams of more than 10 people, including offshore teams.'
          },
          {
            value: 'Team building',
            label: 'Built up teams and hired team members.'
          }
        ].map((stat) => (
          <div key={stat.value} className="border-t border-ink/20 pt-6">
            <p className="font-display text-2xl text-ink">{stat.value}</p>
            <p className="text-sm text-ink/60 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Selected Work</p>
            <h2 className="font-display text-4xl text-ink mt-4">Software platforms for industrial solutions.</h2>
          </div>
          <Link href="/about/" className="text-sm uppercase tracking-[0.2em] text-ink/70 hover:text-ink">
            Explore the full story →
          </Link>
        </div>
        <div className="mt-10 border-t border-ink/10 pt-2 divide-y divide-ink/10">
          {[
            {
              title: 'Software Platform Project (Siemens AG, Karlsruhe)',
              desc:
                'Leading a platform that provides identity access management, dashboard, logging, and license management to speed time-to-market of multiple products, including Industrial 5G.'
            },
            {
              title: 'SINEC INS (Siemens Türkiye, Istanbul)',
              desc: 'Built a new team and delivered SINEC INS, a tool for central network services in the OT field.'
            },
            {
              title: 'Product Ownership',
              desc: 'Product owner responsibilities alongside software project management.'
            }
          ].map((item) => (
            <div key={item.title} className="grid md:grid-cols-[220px_1fr] gap-6 py-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="text-sm text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
        <div className="border-t border-ink/10 pt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Expertise</p>
          <h2 className="font-display text-3xl text-ink mt-4">Project management and platform delivery.</h2>
          <div className="mt-6 space-y-4 text-ink/70 text-sm">
            <p>Software project management, stakeholder management, and requirement elicitation.</p>
            <p>Team growth, people management, and leading offshore teams.</p>
            <p>Agile project management, product ownership, and software platform development.</p>
            <p>Open to project management mentorship.</p>
          </div>
        </div>
        <div className="border-t border-ink/10 pt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Education</p>
          <h2 className="font-display text-3xl text-ink mt-4">Formal background.</h2>
          <div className="mt-6 space-y-3 text-sm text-ink/70">
            <p>MBA — Istanbul Technical University (2016).</p>
            <p>Computer Engineering — Istanbul Technical University (2010).</p>
            <p>Exchange Student — Eindhoven University of Technology (2014).</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="border-t border-ink/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Contact</p>
            <h2 className="font-display text-3xl text-ink mt-4">Let’s work on what matters.</h2>
          </div>
          <Link
            href="/contact/"
            className="text-sm uppercase tracking-[0.3em] border-b border-ink pb-2 hover:text-ink/70"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
