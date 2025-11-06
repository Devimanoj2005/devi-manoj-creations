import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({ images, currentIndex, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 z-50 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 md:left-8"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Image */}
      <div
        className="relative max-w-7xl max-h-[90vh] mx-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-glow"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 z-50 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 md:right-8"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}
    </div>
  );
};

export default ImageLightbox;
