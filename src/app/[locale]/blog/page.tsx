import { getAllPostsMeta } from '@/lib/mdx';
import Link from 'next/link';
import { Metadata } from 'next';
import { format, parseISO } from 'date-fns';
import Header from '@/components/_header/Header';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, tutorials, and insights on Full Stack Development, DevOps, and more.',
};

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getAllPostsMeta();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on software engineering, web development, and DevOps.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-muted-foreground">
                {format(parseISO(post.date), 'MMMM d, yyyy')}
              </time>
              <div className="flex gap-2">
                {post.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="group relative mt-4">
              <h3 className="mt-3 text-xl font-semibold leading-6 group-hover:text-primary">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.description}
              </p>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts found. Check back later!</p>
        )}
      </div>
      </div>
    </div>
  );
}
