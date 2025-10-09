import React, { useState } from 'react';

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src={images[current]}
        alt={`Post image ${current + 1}`}
        className="w-full h-80 object-cover transition duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-gray-400/70'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
