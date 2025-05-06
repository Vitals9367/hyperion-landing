export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: Date;
  updatedAt: Date;
  author: {
    name: string;
    image?: string;
  };
  tags: string[];
}

export interface PostFormData {
  title: string;
  content: string;
  tags: string[];
}
