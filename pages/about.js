import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            I am a Senior Software Project Manager with 14+ years of experience in software development, 
            including 7+ years in project management. My expertise lies in leading international teams 
            and managing complex software platform projects for industrial applications.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Core Competencies</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Software Project Management</li>
            <li>International Team Leadership</li>
            <li>Software Platform Development</li>
            <li>Industrial Solutions</li>
            <li>Agile Methodologies</li>
            <li>Team Building & Development</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Achievements</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Led the development of SINEC Network Services Platform (NSP) as a foundational software platform 
              that enables various industrial applications, with 5G being one of its key applications. The platform 
              serves as a versatile foundation for developing industrial solutions.
            </li>
            <li>
              Successfully managed SINEC INS (Industrial Network Solutions), delivering enterprise-grade 
              network solutions for industrial environments
            </li>
            <li>
              Built and scaled high-performing development teams from scratch, fostering a culture of 
              innovation and excellence
            </li>
            <li>
              Established effective project management practices and methodologies across international teams
            </li>
          </ul>

          <div className="mt-6 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">
                  Senior Software Project Manager
                  <span className="text-gray-500 text-sm font-normal"> — Siemens AG, Karlsruhe | May 2022–Present</span>
                </h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>
                    Led end-to-end delivery of <strong>SINEC NSP</strong>, industrial network services platform powering private 5G deployments—coordinating cross-functional teams across multiple countries.
                  </li>
                  <li>
                    Led the SINEC INS initiative: defined product vision, roadmap, and release plan—driving significant improvement in service reliability.
                  </li>
                  <li>
                    Managed stakeholder alignment, ran quarterly business reviews, and secured executive buy-in for new feature development.
                  </li>
                  <li>
                    Championed Agile transformations and CI/CD pipelines, improving sprint predictability and reducing time-to-market.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Software Project Manager
                  <span className="text-gray-500 text-sm font-normal"> — Siemens AG, Karlsruhe | January 2019–April 2022</span>
                </h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>
                    Led international software development teams across multiple countries, fostering collaboration and innovation.
                  </li>
                  <li>
                    Managed complex software platform projects, ensuring successful delivery and stakeholder satisfaction.
                  </li>
                  <li>
                    Established and maintained effective project management practices, driving continuous improvement.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">
                  Istanbul Technical University
                  <span className="text-gray-500 text-sm font-normal"> — Istanbul, Turkey</span>
                </h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Master of Business Administration (MBA)</li>
                  <li>Bachelor of Science in Computer Engineering</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Professional Certifications</h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>RDPM@Siemens B Level</li>
                  <li>iSAQB Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}