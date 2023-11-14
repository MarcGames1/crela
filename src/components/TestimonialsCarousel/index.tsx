'use client';
import React from 'react';
import { TestimonialData } from './testimonialData';
import { Carousel } from 'react-daisyui';
import Testimonials from './Testimonials/Index';



const TestimonialsCarousel = (props: { data: TestimonialData[]; }) => {
  const args = {
    display: 'sequential',
    snap: 'center',
    width: 'full',
  };

  return (
    <div>
      <Carousel
        display="sequential"
        snap="center"
        width="full"
        className="rounded-box"
      >
      {props.data.map((testimonial: TestimonialData, idx: number) =>{
        return <Carousel.Item key={idx}><Testimonials {...testimonial} /></Carousel.Item>
      })}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
