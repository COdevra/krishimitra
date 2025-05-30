import React from 'react';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import thumbnailImage from "../assets/teach/IMG_6023.jpg"; // Using one of the existing images as thumbnail

const VideoSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="py-16 bg-[#196F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Interview with Farmers</h2>
            <p className="text-white/90 mb-6">
              Watch how KrishiMitra is transforming the lives of farmers through technology and community support. 
              Our journey is one of innovation, dedication, and a deep commitment to agricultural excellence.
            </p>
          </div>

          <div 
            className="relative group cursor-pointer max-w-[500px] mx-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-neutral-100 shadow-xl">
              <img 
                src={thumbnailImage} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 text-[#196F3D]" fill="#196F3D" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden rounded-2xl">
          <div className="relative w-full h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              className="w-full h-[80vh] rounded-2xl"
              src="https://www.youtube.com/embed/sIBsW0om2hY?si=90TJ1lQK_zGieLya"
              title="Farmer Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection; 