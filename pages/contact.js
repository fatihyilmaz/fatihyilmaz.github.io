import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="flex flex-col items-center p-8">
        <div className="mb-8">
          <img 
            src="/profile.jpg" 
            alt="Fatih Yılmaz" 
            className="rounded-full w-64 h-64 object-cover object-top shadow-lg" 
          />
        </div>
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="flex flex-col items-center space-y-4">
          <a 
            href="mailto:ylmz.fth@gmail.com" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ylmz.fth@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/ylmzfth/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </Layout>
  );
}