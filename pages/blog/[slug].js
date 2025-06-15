import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../../components/Layout';

export default function Post({ frontMatter, content }) {
  return (
    <Layout title={frontMatter.title}>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-6">
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
          <h1 className="text-4xl font-bold mb-6">{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className="text-xl text-gray-600 mb-8">{frontMatter.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-8">
            {frontMatter.categories?.map(category => (
              <span 
                key={category}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
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
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: content }} 
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Originally published on{' '}
              <a 
                href={frontMatter.original_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
            </div>
            <a 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium"
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