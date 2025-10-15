import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css';
import { Post } from "@/types/post";
import { Link } from "@inertiajs/react";
import { Heart, MessageCircle, Link as LinkIcon } from "lucide-react";
import { profile } from "@/routes";

export default function PostCard({ post }: {post: Post}) {
  const [liked, setLiked] = useState(post.is_liked ?? false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments || []);


  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const images = post.images || [];
  const showMore = images.length > 3;
  const displayImages = showMore ? images.slice(0, 3) : images;

  return (
    <div className="bg-white dark:bg-[#252728] shadow-sm rounded-xl p-4 transition-colors duration-300 mb-6">
      <div className="flex items-center gap-3 mb-3">
        <Link href={profile(post.author.username)} className="flex-shrink-0">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>
        <div>
          <Link 
            href={`profile/${post.author.username}`}
            className="font-semibold text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            {post.author.name}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      <p className="text-gray-800 dark:text-gray-200 mb-3 whitespace-pre-line">
        {post.content}
      </p>

      {images.length > 0 && (
        <Gallery>
          <div className="rounded-lg overflow-hidden grid gap-1">
            {images.length === 1 ? (
              // 1 ảnh
              <Item original={images[0]} thumbnail={images[0]} width="1600" height="1200">
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={images[0]}
                    alt=""
                    className="w-full max-h-[600px] rounded-lg object-cover cursor-pointer"
                  />
                )}
              </Item>
            ) : images.length === 2 ? (
              <div className="grid grid-cols-2 gap-1">
                {images.map((src, i) => (
                  <Item key={i} original={src} thumbnail={src} width="1600" height="1200">
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={src}
                        alt=""
                        className="w-full h-72 object-cover cursor-pointer rounded-lg"
                      />
                    )}
                  </Item>
                ))}
              </div>
            ) : images.length === 3 ? (
              <div className="grid grid-rows-2 grid-cols-2 gap-1">
                <Item original={images[0]} thumbnail={images[0]} width="1600" height="1200">
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={images[0]}
                      alt=""
                      className="col-span-2 w-full h-[300px] object-cover cursor-pointer rounded-lg"
                    />
                  )}
                </Item>
                {images.slice(1, 3).map((src, i) => (
                  <Item key={i + 1} original={src} thumbnail={src} width="1600" height="1200">
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={src}
                        alt=""
                        className="w-full h-[230px] object-cover cursor-pointer rounded-lg"
                      />
                    )}
                  </Item>
                ))}
              </div>
            ) : (
              <div className="grid grid-rows-2 grid-cols-2 gap-1">
                {displayImages.map((src, i) => (
                  <Item key={i} original={src} thumbnail={src} width="1600" height="1200">
                    {({ ref, open }) => (
                      <div
                        ref={ref}
                        onClick={open}
                        className={`relative ${i === 0 ? 'row-span-2' : ''}`}
                      >
                        <img
                          src={src}
                          alt=""
                          className={`w-full ${
                            i === 0 ? 'h-[460px]' : 'h-[230px]'
                          } object-cover cursor-pointer rounded-lg`}
                        />
                        {i === 2 && showMore && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-semibold rounded-lg">
                            +{images.length - 3}
                          </div>
                        )}
                      </div>
                    )}
                  </Item>
                ))}
              </div>
            )}
          </div>
        </Gallery>
      )}

      <div className="border-t pt-2 flex text-gray-600 dark:text-gray-300 text-sm select-none">
        <button className="flex-1 hover:bg-gray-100 dark:hover:bg-[#323232] py-2 rounded-lg cursor-pointer">
          <div className="flex items-center justify-center gap-1" onClick={toggleLike}>
            <Heart size={17} color="red" /> 
            <span>{post.likes}</span>
          </div>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex-1 hover:bg-gray-100 dark:hover:bg-[#323232] py-2 rounded-lg cursor-pointer"
        >
          <div className="flex items-center justify-center gap-1">
            <MessageCircle size={17} color="#f5f5f5" /> 
            <span>{post.comments.length}</span>
          </div>
        </button>
        <button className="flex-1 hover:bg-gray-100 dark:hover:bg-[#323232] py-2 rounded-lg cursor-pointer">
          <div className="flex items-center justify-center gap-1">
            <LinkIcon size={17} color="#f5f5f5" />
            <span> Chia sẻ</span>
          </div>
        </button>
      </div>

       {showComments && (
        <div className="mt-3 space-y-3">
          {post.comments.map((comment, index) => (
            <CommentItem key={index} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}


function CommentItem({ comment }) {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="flex items-start gap-2">
      <img src={comment.user.avatar} className="w-8 h-8 rounded-full" />
      <div className="flex-1 bg-gray-100 dark:bg-[#2b2b2b] rounded-xl px-3 py-2">
        <p className="text-sm font-semibold">{comment.user.name}</p>
        <p className="text-sm">{comment.text}</p>
        <button
          onClick={() => setShowReply(!showReply)}
          className="text-xs text-indigo-500 mt-1 hover:underline"
        >
          Trả lời
        </button>

        {showReply && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-2 flex gap-2 items-center"
          >
            <input
              placeholder="Viết phản hồi..."
              className="flex-1 bg-white dark:bg-[#1e1e1e] text-sm rounded-full px-3 py-1 border dark:border-[#3a3a3a] outline-none"
            />
            <button className="text-indigo-500 text-sm">Gửi</button>
          </form>
        )}

        {/* Replies */}
        {comment.replies?.length > 0 && (
          <div className="mt-2 ml-4 space-y-1">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="flex items-start gap-2">
                <img
                  src={reply.user.avatar}
                  className="w-7 h-7 rounded-full"
                />
                <div className="bg-gray-50 dark:bg-[#1e1e1e] rounded-xl px-3 py-1.5">
                  <p className="text-sm font-semibold">{reply.user.name}</p>
                  <p className="text-sm">{reply.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
