'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';

const InfiniteSlider = ({ logos }) => {
  const [logosSrcs, setLogosSrcs] = useState([]);
  const [sliderWidth, setSliderWidth] = useState('60px');
  useEffect(() => {
    setLogosSrcs(logos);

    const updateSliderWidth = () => {
      if (window.innerWidth >= 1024) {
        setSliderWidth('200px');
      } else if (window.innerWidth >= 768) {
        setSliderWidth('120px');
      } else {
        setSliderWidth('100px');
      }
    };

    // Set initial width
    updateSliderWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateSliderWidth);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateSliderWidth);
  }, [logos]);

  return (
    <div className="my-5" dir="ltr">
      <Slider width={sliderWidth} duration={50} pauseOnHover={false}>
        {logosSrcs.concat(logosSrcs)?.map((item, index) => (
          <Slider.Slide key={index}>
            <Image
              alt="logo"
              src={item}
              width={0}
              height={0}
              sizes="(max-width: 768px) 60px, 90px"
              className="h-[60px] w-[60px] rounded-md grayscale duration-150 hover:grayscale-0 md:h-[90px] md:w-[90px] lg:mx-32"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteSlider;
