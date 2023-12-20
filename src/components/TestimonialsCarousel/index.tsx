'use client';
import React from 'react';
import { TestimonialData } from './testimonialData';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Testimonial from './Testimonial';


const TestimonialsCarousel = (props: { data: TestimonialData[]; }) => {

  return (
    
     
     

      <Carousel  infiniteLoop autoPlay  className=' max-w-3/4 mt-10 	' >
        {props.data.map((testimonial: TestimonialData, idx: number) => {
          return (
            <div key={idx} tabIndex={0} aria-roledescription="testimonial">
              <Testimonial {...testimonial} />
            </div>
          );

        })}
      </Carousel>
        
    
  );
};

export default TestimonialsCarousel;
