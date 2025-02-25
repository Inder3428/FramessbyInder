import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Image {
  id: string;
  url: string;
  category: string;
  subcategory: string;
  title: string;
  year: string;
}

const images: Record<string, Image[]> = {
  portraits: [
    {
      id: '1',
      url: '/Public/Images/Potraits/Laibadesi1.jpg',
      category: 'portraits',
      subcategory: 'outdoor',
      title: 'Outdoor Portrait',
      year: '2024'
    },
    {
      id: '2',
      url: '/Public/Images/Potraits/laibadesi2.jpg',
      category: 'portraits',
      subcategory: 'outdoor',
      title: 'Outdoor Portrait',
      year: '2023'
    },
    {
      id: '3',
      url: '/Public/Images/Potraits/laibadesi3.jpg',
      category: 'portraits',
      subcategory: 'outdoor',
      title: 'Outdoor Portrait',
      year: '2023'
    },
    {
      id: '4',
      url: '/Public/Images/Potraits/laibadesi4.jpg',
      category: 'portraits',
      subcategory: 'outdoor',
      title: 'Outdoor Portrait',
      year: '2023'
    },
    {
      id: '5',
      url: '/Public/Images/Potraits/laibadesi5.jpg',
      category: 'portraits',
      subcategory: 'headshot',
      title: 'Headshot Portrait',
      year: '2023'
    },
    {
      id: '6',
      url: '/Public/Images/Potraits/NoorDesi.JPG',
      category: 'portraits',
      subcategory: 'outdoor',
      title: 'Outdoor Portrait',
      year: '2023'
    },
    {
      id: '7',
      url: '/Public/Images/Potraits/NoorDesi1.JPG',
      category: 'portraits',
      subcategory: 'headshot',
      title: 'Headshot Portrait',
      year: '2023'
    },
    {
      id: '8',
      url: '/Public/Images/Potraits/Noor.JPG',
      category: 'portraits',
      subcategory: 'headshot',
      title: 'Headshot Portrait',
      year: '2023'
    },
    {
      id: '9',
      url: '/Public/Images/Potraits/NoorDesi3.JPG',
      category: 'potraits',
      subcategory:'headshot',
      title: 'Headshot Potrait',
      year: '2023'
    },
    {
      id: '10',
      url: '/Public/Images/Potraits/NoorDesi4.JPG',
      category: 'potraits',
      subcategory:'headshot',
      title: 'Headshot Potrait',
      year: '2023'
    },
    {
      id: '11',
      url: '/Public/Images/Potraits/NoorDesi5.JPG',
      category: 'potraits',
      subcategory:'headshot',
      title: 'Headshot Potrait',
      year: '2023'
    },
    {
      id: '12',
      url: '/Public/Images/Potraits/NoorDesi6.JPG',
      category: 'potraits',
      subcategory:'headshot',
      title: 'Headshot Potrait',
      year: '2023'
    },
    {
      id: '13',
      url: '/Public/Images/Potraits/NoorDesi8.JPG',
      category: 'potraits',
      subcategory:'headshot',
      title: 'Headshot Potrait',
      year: '2023'
    },


  ],


  //Street
  street: [
    {
      id: '1',
      url: '/Public/Images/Street/Street (9).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2024'
    },
    {
      id: '2',
      url: '/Public/Images/Street/Street (10).jpg',
      category: 'street',
      subcategory: 'architecture',
      title: 'City Architecture',
      year: '2023'
    },
    {
      id: '3',
      url: '/Public/Images/Street/Street (8).jpg',
      category: 'street',
      subcategory: 'night',
      title: 'Night Street',
      year: '2023'
    },
    {
      id: '4',
      url: '/Public/Images/Street/Street (12).jpg',
      category: 'street',
      subcategory: 'night',
      title: 'Night Street',
      year: '2023'
    },
    {
      id: '5',
      url: '/Public/Images/Street/Street (11).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '6',
      url: '/Public/Images/Street/Street (14).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '7',
      url: '/Public/Images/Street/Street (13).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '8',
      url: '/Public/Images/Street/Street (6).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '9',
      url: '/Public/Images/Street/Street (4).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '10',
      url: '/Public/Images/Street/Street (7).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '11',
      url: '/Public/Images/Street/Street (3).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '12',
      url: '/Public/Images/Street/Street (5).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '13',
      url: '/Public/Images/Street/Street (2).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
    {
      id: '14',
      url: '/Public/Images/Street/Street (1).jpg',
      category: 'street',
      subcategory: 'urban',
      title: 'Urban Life',
      year: '2023'
    },
  ],
  
  events: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200',
      category: 'events',
      subcategory: 'wedding',
      title: 'Wedding Ceremony',
      year: '2024'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
      category: 'events',
      subcategory: 'concert',
      title: 'Live Concert',
      year: '2023'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200',
      category: 'events',
      subcategory: 'corporate',
      title: 'Corporate Event',
      year: '2023'
    }
  ],
  graduations: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
      category: 'graduations',
      subcategory: 'ceremony',
      title: 'Graduation Ceremony',
      year: '2024'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80&w=1200',
      category: 'graduations',
      subcategory: 'portrait',
      title: 'Graduate Portrait',
      year: '2023'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&q=80&w=1200',
      category: 'graduations',
      subcategory: 'group',
      title: 'Group Photo',
      year: '2023'
    }
  ]
};

const PortfolioCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<'carousel' | 'gallery'>('gallery');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categoryImages = category ? images[category] || [] : [];
  const filteredImages = categoryImages;
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    if (direction === 'prev' && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedIndex(newIndex);
    } else if (direction === 'next' && currentIndex < filteredImages.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  }, [filteredImages, selectedImage]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      switch (e.key) {
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'Escape':
          setSelectedImage(null);
          setViewMode('gallery'); // Ensures it returns to portraits (gallery view)
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages, navigateImage]);
  useEffect(() => {
    if (viewMode === 'carousel' && filteredImages.length > 0 && !selectedImage) {
      setSelectedImage(filteredImages[0]);
      setSelectedIndex(0);
    }
  }, [viewMode, filteredImages, selectedImage]);

  const Card = ({ image, index }: { image: Image, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative w-full aspect-[3/4] mb-8"
        style={{
          perspective: 2000
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ scale: 1.02 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setSelectedImage(image);
            setSelectedIndex(index);
          }}
          className="cursor-pointer w-full h-full"
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </motion.div>
    );
  };


  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-black">
      {/* View Mode Toggle */}
      <div className="fixed top-24 right-20 z-20">
        <motion.button
          onClick={() => setViewMode(prev => prev === 'carousel' ? 'gallery' : 'carousel')}
          className="bg-white/10 p-5 rounded-full backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Maximize2 className="w-13 h-6" />
        </motion.button>
      </div>

     {/* Gallery View */}
{viewMode === 'gallery' && (
  <div className="max-w-[2000px] mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredImages.map((image, index) => (
        <Card key={image.id} image={image} index={index} />
      ))}
    </motion.div>
  </div>
)}


     {/* Carousel View */}
     {viewMode === 'carousel' && selectedImage && (
        <div className="fixed inset-0 bg-black z-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-full flex items-center justify-center"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 p-4 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 p-4 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Close Button */}
              <button
                 onClick={() => { setSelectedImage(null); setViewMode('gallery'); }}
                className="absolute top-4 right-4 p-4 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-3xl font-light mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.title}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{selectedImage.year}</span>
                  <span className="text-gray-400">
                    {selectedIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default PortfolioCategory;