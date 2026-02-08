import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Blog({ posts }) {
  return (
    <Layout title="Blog | Fatih Yılmaz">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-ink/50">Blog</p>
          <h1 className="font-display text-5xl text-ink mt-6">Writing</h1>
          <p className="text-lg text-ink/70 mt-4">
            Insights on software development, project management, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map(post => (
            <article 
              key={post.slug}
              className="border-t border-ink/10 pt-6"
            >
              {post.image && (
                <div className="relative h-48 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="pt-6">
                <div className="flex items-center text-xs uppercase tracking-[0.2em] text-ink/50 mb-3">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                  {post.readingTime && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime} min read</span>
                    </>
                  )}
                </div>
                <h2 className="font-display text-2xl text-ink mb-3">
                  <Link href={`/blog/${post.slug}/`} className="hover:text-ink/70 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-ink/70 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.categories?.map(category => (
                      <span 
                        key={category}
                        className="px-2 py-1 text-xs uppercase tracking-[0.2em] border border-ink/10 text-ink/60"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.slug}/`}
                    className="text-xs uppercase tracking-[0.3em] border-b border-ink pb-1 hover:text-ink/70"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const posts = filenames.map(name => {
    const slug = name.replace('.md', '');
    const filePath = path.join(postsDir, name);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    return { 
      slug, 
      ...data,
      readingTime,
      // Add default image if none provided
      image: data.image || '/blog-default.jpg'
    };
  });
  
  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return { props: { posts } };
}
