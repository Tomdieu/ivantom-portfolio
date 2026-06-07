import { getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/_header/Header';
import rehypePrettyCode from 'rehype-pretty-code';
import { Pre } from '@/components/mdx/Pre';
import { H2 } from '@/components/mdx/H2';

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ivantomdieu.vercel.app";
  const url = `${SITE_URL}/${locale}/blog/${slug}`;

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author || "Tomdieu Ivan"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta.title,
    "description": post.meta.description,
    "datePublished": post.meta.date,
    "author": { "@type": "Person", "name": post.meta.author || "Tomdieu Ivan" },
    "keywords": post.meta.tags.join(", ")
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <article className="container mx-auto px-4 py-16 max-w-3xl relative z-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{post.meta.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.meta.date}>
            {format(parseISO(post.meta.date), 'MMMM d, yyyy')}
          </time>
          {post.meta.author && (
            <>
              <span>•</span>
              <span>{post.meta.author}</span>
            </>
          )}
          <span>•</span>
          <div className="flex gap-2">
            {post.meta.tags.map(tag => (
              <span key={tag} className="text-xs bg-accent px-2 py-1 rounded-md text-accent-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* The prose class requires @tailwindcss/typography plugin. Let's write custom styles for now or assume it exists. */}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-img:rounded-xl prose-img:shadow-md">
        <MDXRemote 
          source={post.content} 
          components={{ pre: Pre, h2: H2 }}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: 'github-dark' }]
              ],
            }
          }} 
        />
      </div>
      </article>
    </div>
  );
}
