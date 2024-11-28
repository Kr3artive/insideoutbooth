const Gallery = () => {
  
  const images = [
    "/Images/Another.jpg",
    "/Images/PIC1.jpg",
    "/Images/PIC3.jpg",
    "/Images/PIC4.jpg",
    "/Images/PIC5.jpg",
  ];

  return (
    <div className="bg-gray-100 p-6 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="flex space-x-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 h-40 bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
