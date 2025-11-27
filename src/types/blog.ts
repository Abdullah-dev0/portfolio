export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  isPublished: boolean;
  mdx: string;
  content: string;
}

export interface BlogPostPreview {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  isPublished: boolean;
}
