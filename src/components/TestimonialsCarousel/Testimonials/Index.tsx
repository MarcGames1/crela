import React from 'react'
import { TestimonialData } from '../testimonialData'
import Image from 'next/image';



const Testimonials = ({ header, paragraph, name, picture }: TestimonialData) => {
  return (
    <section>
      <div id="LeftSide">
        <Image
          alt={`Testimonial ${name}`}
          height={300}
          width={300}
          src={picture}
        />
      </div>

      <div id="RightSide">
        <h3>{header}</h3>
        <p>{paragraph}</p>
        <span>{name}</span>
      </div>
    </section>
  );
};

export default Testimonials