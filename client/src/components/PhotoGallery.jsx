import { useState } from "react";

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className=" font-garmond ">
      <div className="mb-12  relative">
        <span className="block font-ubuntu text-xs uppercase tracking-widest text-brand font-medium mb-3">
          Moments That Matter
        </span>

        <h2 className="inline-block px-6 py-3 border-2  text-2xl md:text-4xl font-ubuntu text-brand bg-[#f4eef1] shadow-xl rounded-md tracking-wide">
          Trek Gallery
        </h2>

        <p className="mt-4 text-base text-gray-700  font-light">
          Not just pictures — memories, terrain, stories in a frame.
        </p>
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            onClick={() => setSelectedImage(img)}
            className="w-full rounded-sm hover:opacity-90 cursor-pointer transition"
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-full rounded-sm shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
