import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Iimage } from "@/interfaces/image";
import Image from "next/image";

import Slider from "react-slick";

interface ICarouselProps {
  slides: Iimage[];
  rtl?: boolean;
  bgColor?: string;
}

export default function Carousel({
  slides,
  rtl = false,
  bgColor = "bg-slate-700",
}: ICarouselProps) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
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
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="block h-fit relative">
      <Slider {...settings}>
        {slides.map((s, k) => {
          return (
            <div className="relative m-5 border-4 border-white  block " key={k}>
              <Image
                loading={s?.loading ? s.loading : "lazy"}
                className={`ml-auto min-h-[300px] aspect-square   drop-shadow-2xl ${bgColor} `}
                {...s}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
