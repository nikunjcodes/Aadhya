import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images.jpeg";
const MuseumSliderNearYou = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const museums = [
    {
      name: 'National Museum, New Delhi',
      image: image,
      description: 'One of the largest museums in India, with a wide range of artifacts from ancient to modern times.',
    },
    {
      name: 'Indian Museum, Kolkata',
      image: image,
      description: 'Established in 1814, it is the oldest museum in India, showcasing art, archaeology, and anthropology.',
    },
    {
      name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai',
      image: image,
      description: 'Formerly known as the Prince of Wales Museum, it houses a wide collection of ancient artifacts.',
    },
    {
      name: 'Salar Jung Museum, Hyderabad',
      image: image,
      description: 'Known for its collection of fine art, jade, and weaponry, it is one of the three national museums of India.',
    },
    {
      name: 'Victoria Memorial, Kolkata',
      image:image,
      description: 'A magnificent museum and memorial dedicated to Queen Victoria, showcasing British Raj-era artifacts.',
    },
  ];

  return (
    <div className="w-full mx-auto bg-[#F5F5DC] py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#654321]">Museums Near You</h2>
      <Slider {...sliderSettings}>
        {museums.map((museum, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#FAF0E6] border-4 border-[#A52A2A] rounded-lg shadow-lg overflow-hidden">
              <img src={museum.image} alt={museum.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-[#8B4513]">{museum.name}</h3>
                <p className="text-[#654321] mt-4">{museum.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MuseumSliderNearYou;
