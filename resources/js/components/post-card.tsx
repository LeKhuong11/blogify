import { ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css';
import { Post } from "@/types/blog";


export default function PostCard({ post }: {post: Post}) {
  const [liked, setLiked] = useState(post.is_liked ?? false);
  const [likes, setLikes] = useState(post.likes);

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
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            {post.author.name}
          </p>
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

      <div className="border-t dark:border-[#3a3a3a] mt-4 pt-3 flex justify-around text-gray-600 dark:text-gray-400 text-sm select-none">
        <button
          onClick={toggleLike}
          className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          {liked ? (
            <HeartSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
          <span>{likes}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <ShareIcon className="w-5 h-5" />
          <span>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
}