const ImageSection = ({ images }) => {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden h-[500px]"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;