import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  images: string[];
}

export default function PostImages({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  const showMore = images.length > 3;
  const displayImages = showMore ? images.slice(0, 3) : images;

  return (
    <>
      {/* Layout hiển thị ảnh */}
      <div className="grid gap-1 rounded-lg overflow-hidden">
        {displayImages.length === 1 ? (
          <img
            src={displayImages[0]}
            alt=""
            className="w-full rounded-lg cursor-pointer object-cover"
            onClick={() => {
              setSelected(0);
              setOpen(true);
            }}
          />
        ) : displayImages.length === 2 ? (
          <div className="grid grid-cols-2 gap-1">
            {displayImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full h-72 object-cover cursor-pointer"
                onClick={() => {
                  setSelected(i);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-rows-2 grid-cols-2 gap-1">
            <img
              src={displayImages[0]}
              alt=""
              className="row-span-2 w-full h-[460px] object-cover cursor-pointer"
              onClick={() => {
                setSelected(0);
                setOpen(true);
              }}
            />
            <img
              src={displayImages[1]}
              alt=""
              className="w-full h-[230px] object-cover cursor-pointer"
              onClick={() => {
                setSelected(1);
                setOpen(true);
              }}
            />
            <div className="relative">
              <img
                src={displayImages[2]}
                alt=""
                className="w-full h-[230px] object-cover cursor-pointer"
                onClick={() => {
                  setSelected(2);
                  setOpen(true);
                }}
              />
              {showMore && (
                <div
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-semibold cursor-pointer"
                >
                  +{images.length - 3}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox hiển thị toàn màn hình */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full flex justify-center items-center">
            <img
              src={images[selected]}
              alt=""
              className="max-h-[80vh] object-contain"
            />
          </div>

          {/* Điều hướng ảnh */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-6 text-white text-3xl hover:text-gray-300"
                onClick={() =>
                  setSelected((prev) => (prev - 1 + images.length) % images.length)
                }
              >
                ‹
              </button>
              <button
                className="absolute right-6 text-white text-3xl hover:text-gray-300"
                onClick={() => setSelected((prev) => (prev + 1) % images.length)}
              >
                ›
              </button>
            </>
          )}
        </div>
      </Dialog>
    </>
  );
}
