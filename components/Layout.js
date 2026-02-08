import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title = 'Fatih Yılmaz' }) {
  const router = useRouter();
  const normalizePath = (path) => path.replace(/\/+$/, '') || '/';
  const navItems = [
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Fatih Yılmaz - Senior Software Project Manager" />
      </Head>
      <nav className="sticky top-0 z-40 bg-frost/80 backdrop-blur border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {router.pathname === '/' ? (
            <span className="font-display text-xl tracking-tight text-ink">Fatih Yılmaz</span>
          ) : (
            <Link href="/" className="font-display text-xl tracking-tight text-ink">
              Fatih Yılmaz
            </Link>
          )}
          <div className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-ink/70">
            {navItems.map((item) =>
              normalizePath(router.pathname) === normalizePath(item.href) ? (
                <span key={item.href} className="text-ink border-b border-ink pb-1">
                  {item.label}
                </span>
              ) : (
                <Link key={item.href} href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="border-t border-ink/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-ink/60">
          <p>© {new Date().getFullYear()} Fatih Yılmaz</p>
          <div className="flex gap-4">
            <a href="mailto:ylmz.fth@gmail.com" className="hover:text-ink">ylmz.fth@gmail.com</a>
            <span className="hidden md:inline">•</span>
            <a
              href="https://www.linkedin.com/in/ylmzfth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
