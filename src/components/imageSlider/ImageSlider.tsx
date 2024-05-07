import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  className?: string;
}
const ImageSlider: FC<ImageSliderProps> = ({ images, className }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <div className={cn("relative w-full h-[200px]", className)}>
      <img
        src={images[activeImageIndex]}
        alt=""
        className="h-full w-full object-cover rounded-[10px]"
      />
      <div className="absolute bottom-0 left-0 right-0 flex pb-2 justify-center gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            title="Image slider button"
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === activeImageIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
