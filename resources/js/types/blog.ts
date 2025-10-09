
export interface Post {
  id: number;
  author: {
    id: number;
    username: string;
    name: string;
    avatar: string;
  };
  content: string;
  images: string[];
  created_at: string;
  likes: number;
  comments: number;
  is_liked?: boolean;
}
