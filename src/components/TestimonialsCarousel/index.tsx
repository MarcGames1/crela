'use client';
import React from 'react';
import { TestimonialData } from './testimonialData';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Testimonial from './Testimonials/index';


const TestimonialsCarousel = (props: { data: TestimonialData[]; }) => {

  return (
    
     
     

      <Carousel  infiniteLoop autoPlay  className='max-w-screen mt-10' >
        {props.data.map((testimonial: TestimonialData, idx: number) => {
          return <Testimonial key={idx} {...testimonial} />;
        })}
      </Carousel>
        
    
  );
};

export default TestimonialsCarousel;
