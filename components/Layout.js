import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Fatih Yılmaz' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Fatih Yılmaz - Senior Software Project Manager" />
      </Head>
      <nav className="bg-maxbill-black text-maxbill-white p-4">
        <ul className="flex space-x-4 max-w-4xl mx-auto">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
      <main className="bg-maxbill-white text-maxbill-black min-h-screen">
        {children}
      </main>
      <footer className="bg-maxbill-gray text-maxbill-black p-4 text-center">
        © {new Date().getFullYear()} Fatih Yılmaz
      </footer>
    </>
  );
}