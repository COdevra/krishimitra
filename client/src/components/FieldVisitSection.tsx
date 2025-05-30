import React, { useState } from "react";

// Import all images from Survey folder
import surveyImage1 from "../assets/Survey/IMG_5927.jpg";
import surveyImage2 from "../assets/Survey/IMG_5922.jpg";
import surveyImage3 from "../assets/Survey/IMG_5906.jpg";
import surveyImage4 from "../assets/Survey/IMG_5897.jpg";
import surveyImage5 from "../assets/Survey/IMG_5892.jpg";
import surveyImage6 from "../assets/Survey/IMG_5890.jpg";
import surveyImage7 from "../assets/Survey/IMG_5865.jpg";
import surveyImage8 from "../assets/Survey/IMG_5860.jpg";
import surveyImage9 from "../assets/Survey/IMG_5846.jpg";
import surveyImage10 from "../assets/Survey/IMG_5802.jpg";
import surveyImage11 from "../assets/Survey/IMG_5798.jpg";
import surveyImage12 from "../assets/Survey/IMG_5781.jpg";

// Import all images from teach folder
import teachImage1 from "../assets/teach/IMG_6023.jpg";
import teachImage2 from "../assets/teach/IMG_6018.jpg";
import teachImage3 from "../assets/teach/IMG_6017.jpg";
import teachImage4 from "../assets/teach/IMG_6002.jpg";
import teachImage5 from "../assets/teach/IMG_6000.jpg";
import teachImage6 from "../assets/teach/IMG_5997.jpg";
import teachImage7 from "../assets/teach/IMG_5990.jpg";
import teachImage8 from "../assets/teach/IMG_5985.jpg";
import teachImage9 from "../assets/teach/IMG_5980.jpg";
import teachImage10 from "../assets/teach/IMG_5974.jpg";
import teachImage11 from "../assets/teach/IMG_5972.jpg";
import teachImage12 from "../assets/teach/IMG_5967.jpg";
import teachImage13 from "../assets/teach/IMG_5962.jpg";
import teachImage14 from "../assets/teach/IMG_5957.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const fieldVisitImages = [
  surveyImage1, surveyImage2, surveyImage3, surveyImage4, surveyImage5, surveyImage6,
  surveyImage7, surveyImage8, surveyImage9, surveyImage10, surveyImage11, surveyImage12,
  teachImage1, teachImage2, teachImage3, teachImage4, teachImage5, teachImage6,
  teachImage7, teachImage8, teachImage9, teachImage10, teachImage11, teachImage12,
  teachImage13, teachImage14,
];

const FieldVisitSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imagesPerPage = 4;
  const totalImages = fieldVisitImages.length;

  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % totalImages);
  };

  const prevImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex - imagesPerPage + totalImages) % totalImages);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < imagesPerPage; i++) {
      const index = (currentIndex + i) % totalImages;
      visible.push(fieldVisitImages[index]);
    }
    return visible;
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">KrishiMitra in the Field</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Connecting with farmers and demonstrating the power of our platform.
          </p>
        </div>

        <div className="mt-12 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full hover:bg-neutral-100"
            onClick={prevImages}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleImages().map((image, index) => (
              <div 
                key={`${currentIndex + index}`}
                className="relative group cursor-pointer h-[250px]"
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`Field visit photo ${currentIndex + index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-center text-sm px-4">Click to view larger</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full hover:bg-neutral-100"
            onClick={nextImages}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative w-full h-full">
              <img 
                src={selectedImage} 
                alt="Larger view" 
                className="w-full h-full object-contain"
              />
              <DialogClose className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FieldVisitSection; 