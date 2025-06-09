import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center p-8">
        <img 
          src="/profile.jpg" 
          alt="Profile Photo" 
          className="rounded-full w-64 h-64 object-cover object-top shadow-lg mb-4" 
        />
        <h1 className="text-4xl font-bold mb-2">Fatih Yılmaz</h1>
        <p className="text-xl text-gray-600 mb-4">Senior Software Project Manager & Technical Leader</p>
      </section>
      <section className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              Led international software development teams across multiple countries, fostering collaboration and innovation
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              Project Manager for SINEC NSP, network services platform that empowers industrial solutions including <a href="https://www.siemens.com/global/en/products/automation/industrial-communication/industrial-5g.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Industrial 5G Private Network</a>
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              Led <a href="https://www.siemens.com/global/en/products/automation/industrial-communication/sinec-network-software/networkmanagement.html#SINECINSThesoftwarethatprovidescentralservicesfornetworkinfrastructure" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SINEC INS</a> (Infrastructure Network Services) project from scratch.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              Expert in software platform project management focused on industrial network solutions
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="ml-3 text-gray-700">
              BSc in Computer Engineering from Istanbul Technical University; MBA from Istanbul Technical University
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-x-4 p-4">
        <a href="/about" className="underline">About</a>
        <a href="/blog" className="underline">Blog</a>
        <a href="/contact" className="underline">Contact</a>
      </section>
    </Layout>
  );
}