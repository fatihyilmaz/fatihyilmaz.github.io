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
              Building confident, high-impact software platforms for industrial networks.
            </h1>
            <p className="text-lg text-ink/70 mt-6">
              I lead global teams that ship resilient, secure, and user-first platforms. My sweet spot:
              turning ambitious infrastructure ideas into products that feel calm, clear, and human.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/contact"
                className="bg-ink text-frost px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-dune transition"
              >
                Schedule a Call
              </a>
              <a
                href="/about"
                className="border border-ink/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:border-ink/40"
              >
                View Resume
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-ink/70">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint"></span>
                Open to advisory roles
              </span>
              <span>Based in Istanbul • Working globally</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-6 bg-frost shadow-soft rounded-2xl px-4 py-3 text-xs font-semibold text-ink/70">
              10+ years in industrial software
            </div>
            <div className="absolute -bottom-6 -right-4 bg-ink text-frost shadow-glow rounded-2xl px-5 py-4 text-sm">
              Trusted by global manufacturing teams
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
                  Platform leader focused on industrial network services, product clarity, and cross-functional rhythm.
                </p>
                <div className="flex gap-3 mt-4 text-xs uppercase tracking-[0.2em] text-ink/60">
                  <span>Strategy</span>
                  <span>Delivery</span>
                  <span>Team Health</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { value: '18+ countries', label: 'Teams & stakeholders aligned across regions' },
          { value: '3 platforms', label: 'Industrial network suites launched end-to-end' },
          { value: '100+ releases', label: 'Disciplined cadence with zero drama' }
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
            <h2 className="font-display text-4xl text-ink mt-4">Complex platforms, calm execution.</h2>
          </div>
          <a href="/about" className="text-sm uppercase tracking-[0.2em] text-ink/70 hover:text-ink">
            Explore the full story →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: 'SINEC NSP',
              desc: 'Program lead for the network services platform that powers industrial 5G private networks and OT connectivity.'
            },
            {
              title: 'SINEC INS',
              desc: 'Built the Infrastructure Network Services product from the ground up with a focus on reliability and UX.'
            },
            {
              title: 'Global Team Rhythm',
              desc: 'Scaled a multi-country delivery model that improved collaboration and cross-time-zone clarity.'
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
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">How I Work</p>
          <h2 className="font-display text-3xl text-ink mt-4">Structured, human, and a little playful.</h2>
          <div className="mt-8 space-y-4 text-ink/70">
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 rounded-full bg-sun/20 text-sun flex items-center justify-center font-semibold">1</span>
              <p>Translate technical complexity into crisp, shared mental models.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 rounded-full bg-mint/20 text-mint flex items-center justify-center font-semibold">2</span>
              <p>Build delivery systems that respect people and protect focus.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-10 w-10 rounded-full bg-sky/20 text-sky flex items-center justify-center font-semibold">3</span>
              <p>Celebrate wins, learn fast, and keep stakeholders confidently aligned.</p>
            </div>
          </div>
        </div>
        <div className="bg-ink text-frost rounded-[28px] p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-frost/50">Highlights</p>
          <h2 className="font-display text-3xl mt-4">A few career moments.</h2>
          <div className="mt-8 space-y-5 text-sm text-frost/70">
            <p>Led international software development teams across multiple countries, fostering collaboration and innovation.</p>
            <p>
              Project Manager for SINEC NSP, enabling industrial solutions including the{' '}
              <a
                href="https://www.siemens.com/global/en/products/automation/industrial-communication/industrial-5g.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-frost underline"
              >
                Industrial 5G Private Network
              </a>
              .
            </p>
            <p>
              Led{' '}
              <a
                href="https://www.siemens.com/global/en/products/automation/industrial-communication/sinec-network-software/networkmanagement.html#SINECINSThesoftwarethatprovidescentralservicesfornetworkinfrastructure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-frost underline"
              >
                SINEC INS
              </a>{' '}
              (Infrastructure Network Services) project from scratch.
            </p>
            <p>Expert in software platform project management focused on industrial network solutions.</p>
            <p>BSc in Computer Engineering from Istanbul Technical University; MBA from Istanbul Technical University.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-frost border border-ink/10 rounded-[28px] p-8 md:p-12 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">Let&apos;s Build</p>
            <h2 className="font-display text-3xl text-ink mt-4">Need a steady hand for a complex platform?</h2>
            <p className="text-ink/70 mt-3">I help teams ship resilient software with momentum and clarity.</p>
          </div>
          <a
            href="/contact"
            className="bg-ink text-frost px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-dune transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </Layout>
  );
}
