import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author?: string;
  slug: string;
};

const rootDirectory = path.join(process.cwd(), 'content', 'blog');

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { 
    meta: { ...data, slug: realSlug } as PostMetadata, 
    content 
  };
};

export const getAllPostsMeta = (): PostMetadata[] => {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const post = getPostBySlug(slug);
      return post?.meta;
    })
    .filter(Boolean) as PostMetadata[];

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
