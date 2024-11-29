import Another from "../Images/Another.jpg";
import Pic1 from "../Images/PIC1.jpg";
import Pic3 from "../Images/PIC3.jpg";
import Pic4 from "../Images/PIC4.jpg";
import Pic5 from "../Images/PIC5.jpg";

const Gallery = () => {
  const images = [Another, Pic1, Pic3, Pic4, Pic5];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
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
