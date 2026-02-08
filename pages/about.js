import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/50">About</p>
        <h1 className="font-display text-5xl text-ink mt-6">Profile</h1>
        
        <div className="mt-8 space-y-6 text-ink/70">
          <p>
            I am a senior software project manager with a strong technical background, enabling me to understand complex
            challenges and lead my teams effectively. My experience spans software project management, stakeholder
            management, requirement elicitation, leading offshore teams, software platform development, agile project
            management, product ownership, and team growth.
          </p>
          <p>
            I have successfully led software projects with around 10 million euros R&amp;D budget in total and I am open to
            mentorship for project management.
          </p>

          <div className="grid md:grid-cols-2 gap-6 border-t border-ink/10 pt-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-ink/50">Core Competencies</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Software project management</li>
                <li>Stakeholder management</li>
                <li>Requirement elicitation</li>
                <li>Software platform development</li>
                <li>Agile project management</li>
                <li>Product ownership</li>
                <li>Team growth and people management</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-ink/50">Contact</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Karlsruhe, Germany</li>
                <li>ylmz.fth@gmail.com</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ylmzfth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline"
                  >
                    LinkedIn profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-ink/50">Key Achievements</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Leading a software platform that provides identity access management, dashboard, logging, and license
                management, speeding time-to-market of multiple software products including Industrial 5G.
              </li>
              <li>
                Built a new team from scratch and led delivery of SINEC INS (Infrastructure Network Services), a tool for
                central network services in the Operational Technology (OT) field.
              </li>
              <li>Led teams of more than 10 people, including offshore teams.</li>
              <li>Built up teams and hired team members.</li>
            </ul>
          </div>

          <div className="mt-6 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink/50">Professional Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-xl text-ink">
                  Senior Software Project Manager
                  <span className="text-ink/60 text-sm font-normal"> — Siemens AG, Karlsruhe | May 2022–Present</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>
                    Leading a software platform project providing identity access management, dashboard, logging, and
                    license management to speed time-to-market of multiple software products including Industrial 5G.
                  </li>
                  <li>
                    Product owner responsibility of the platform alongside software project management.
                  </li>
                  <li>
                    Led teams of more than 10 people, including offshore teams.
                  </li>
                  <li>
                    Cross-functional collaboration with other product teams and stakeholders such as UI/UX experts and product managers.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-xl text-ink">
                  Product and Solution Development Team Leader
                  <span className="text-ink/60 text-sm font-normal"> — Siemens Türkiye, Istanbul | May 2021–May 2022</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>
                    Project manager of the future software platform of Siemens Industrial Communication, starting from ideation.
                  </li>
                  <li>
                    Led teams of more than 10 people, including line management and hiring.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl text-ink">
                  Software Project Manager
                  <span className="text-ink/60 text-sm font-normal"> — Siemens Türkiye, Istanbul | Feb 2018–May 2021</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>Built a new team from scratch and delivered SINEC INS.</li>
                  <li>Released SINEC INS V1.0 and V1.0 SP1.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl text-ink">
                  Software Engineer
                  <span className="text-ink/60 text-sm font-normal"> — Siemens Türkiye, Istanbul | Dec 2014–Feb 2018</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>
                    Worked on performance optimization of TIA Portal (controllers, distributed I/O, HMI, drives, motion
                    control, and motor management).
                  </li>
                  <li>Owned an internal debugger tool for investigating TIA Portal performance issues.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl text-ink">
                  Software Engineer
                  <span className="text-ink/60 text-sm font-normal"> — Evoline TR | Nov 2010–Aug 2013</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>Consulted on user interfaces and developed UI components for Siemens Audiology Technic.</li>
                  <li>Developed multiple iOS applications from scratch and led development team technically.</li>
                  <li>Responsible for Buggy Floor Management application for P&amp;G.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 border-t border-ink/10 pt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink/50">Education & Certifications</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-xl text-ink">
                  Istanbul Technical University
                  <span className="text-ink/60 text-sm font-normal"> — Istanbul, Turkey</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>Master of Business Administration (MBA), 2016</li>
                  <li>Computer Engineering, 2010</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-xl text-ink">
                  Eindhoven University of Technology
                  <span className="text-ink/60 text-sm font-normal"> — Exchange Student, 2014</span>
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>Exchange Student</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-xl text-ink">Professional Certifications</h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>RDPM@Siemens B level certification</li>
                  <li>ISAQB</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl text-ink">Additional Contributions</h4>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>
                    Articles:{' '}
                    <a
                      href="https://www.linkedin.com/in/ylmzfth/detail/recent-activity/posts/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline"
                    >
                      LinkedIn posts
                    </a>
                  </li>
                  <li>Mentor at Istanbul Technical University alumni group</li>
                  <li>Technical consultancy for “Coding for Children” (CoderDojo)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
