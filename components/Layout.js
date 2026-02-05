import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Fatih Yılmaz' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Fatih Yılmaz - Senior Software Project Manager" />
      </Head>
      <nav className="sticky top-0 z-40 bg-frost/80 backdrop-blur border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-tight text-ink">
            Fatih Yılmaz
          </Link>
          <div className="flex items-center gap-6 text-sm font-semibold text-ink/70">
            <Link href="/about" className="hover:text-ink">About</Link>
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <Link href="/contact" className="hover:text-ink">Contact</Link>
            <Link
              href="/contact"
              className="bg-ink text-frost px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-dune transition"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </nav>
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="bg-ink text-frost py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Fatih Yılmaz. Built with care.</p>
          <div className="flex gap-4 text-frost/70">
            <a href="mailto:hello@fatihyilmaz.com" className="hover:text-frost">hello@fatihyilmaz.com</a>
            <span className="hidden md:inline">•</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-frost">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
