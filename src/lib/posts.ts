import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(postsDirectory, slug);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: slug.replace(/\.mdx?$/, ''),
      meta: data,
      date: new Date(data.date)
    };
  });

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

function getFilePath(slug: string) {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath = path.join(postsDirectory, `${slug}.md`)

  if (fs.existsSync(mdxPath)) {
    return mdxPath
  } else if (fs.existsSync(mdPath)) {
    return mdPath
  } else {
    throw new Error(`Post not found for slug: ${slug}`)
  }
}

export function getPostBySlug(slug: string) {
  const filePath = getFilePath(slug);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return {
    meta: data,
    content,
  };
}