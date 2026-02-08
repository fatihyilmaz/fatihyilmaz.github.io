import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../../components/Layout';

export default function Post({ frontMatter, content }) {
  return (
    <Layout title={frontMatter.title}>
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center text-xs uppercase tracking-[0.2em] text-ink/50 mb-6">
            <time dateTime={frontMatter.date}>
              {new Date(frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {frontMatter.readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{frontMatter.readingTime} min read</span>
              </>
            )}
          </div>
          <h1 className="font-display text-5xl text-ink mb-6">{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className="text-lg text-ink/70 mb-8">{frontMatter.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-8">
            {frontMatter.categories?.map(category => (
              <span 
                key={category}
                className="px-2 py-1 text-xs uppercase tracking-[0.2em] border border-ink/10 text-ink/60"
              >
                {category}
              </span>
            ))}
          </div>
          {frontMatter.image && (
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
              <img
                src={frontMatter.image}
                alt={frontMatter.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink/70 prose-p:leading-relaxed prose-a:text-ink hover:prose-a:text-ink/60"
          dangerouslySetInnerHTML={{ __html: content }} 
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-ink/10">
          <div className="flex justify-between items-center">
            <div className="text-sm text-ink/60">
              Originally published on{' '}
              <a 
                href={frontMatter.original_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ink underline"
              >
                LinkedIn
              </a>
            </div>
            <a 
              href="/blog/"
              className="text-xs uppercase tracking-[0.3em] border-b border-ink pb-1 hover:text-ink/70"
            >
              ← Back to Blog
            </a>
          </div>
        </footer>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map(name => ({
    params: { slug: name.replace('.md', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Calculate reading time
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  
  const processed = await remark().use(html).process(content);
  
  return { 
    props: { 
      frontMatter: { ...data, readingTime },
      content: processed.toString()
    }
  };
}
