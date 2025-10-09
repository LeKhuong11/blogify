import Header from "@/layouts/header";
import PostCard from "@/components/post-card";
import { Post } from "@/types/blog";

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-6 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-10">
              Chưa có bài viết nào.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
