import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Iimage } from '@/interfaces/image';
import Image from 'next/image';

import Slider from 'react-slick';

interface ICarouselProps {
  slides: Iimage[];
  rtl ?: boolean;
}

export default function Carousel({ slides, rtl=false }: ICarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    rtl,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((s, k) => {
        return (
          <div className="relative m-5 border-4 border-white  block " key={k}>
            <Image
              className="ml-auto   drop-shadow-2xl bg-slate-700  "
              {...s}
            />
          </div>
        );
      })}
    </Slider>
  );
}

