import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <Gallery>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, idx) => (
          <Item original={src} thumbnail={src} width="1200" height="800" key={idx}>
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={src}
                alt={`image-${idx}`}
                className="rounded-lg object-cover w-full h-48 cursor-pointer hover:opacity-80 transition"
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
}