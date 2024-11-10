"use client";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
    { path: "/images/ts.jpg", name: "TypeScript Logo Image"},
    { path: "/images/javascript.png", name: "JavaScript Logo Image"},
    { path: "/images/tailwind.jpeg", name: "Tailwind Logo Image"},
    { path: "/images/nextjs.webp", name: "Next.js Logo Image"},
    { path: "/images/html.webp", name: "HTML Logo Image"},
    { path: "/images/css.webp", name: "CSS Logo Image"},
    { path: "/images/nodejs.png", name: "nodejs Logo Image"},
];

 const ImageSlider: React.FC = () => {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
            <SwiperSlide key={index}>
                <Image
                src={image.path}
                alt={image.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl" 
/>
            </SwiperSlide>
      ))
        }

      </Swiper>
  );
};

export default ImageSlider;