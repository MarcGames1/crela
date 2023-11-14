import React from 'react'
import { TestimonialData } from '../testimonialData'
import Image from 'next/image';


const Testimonial = ({ header, paragraph, name, picture }: TestimonialData) => {
  return (
    <section
      className={`lg:my-10 md:my-10 lg:mx-52 flex flex-col lg:flex-row  gap-10  items-center `}
    >
      <div className="container w-1/3 block ">
        <Image
          className=" border-solid border-primary rounded border-2 place-self-center block "
          alt={`Testimonial ${name}`}
          height={100}
          width={500}
          quality={50}
          src={picture}
        />
      </div>

      <div className="flex flex-col container w-2/3 relative  text-center lg:py-0 lg:text-left">
        <h3 className="inline text-center mb-5 text-2xl font-bold lg:mb-10 lg:indent-[90px] lg:text-5xl lg:leading-tight">
          {header}
        </h3>
        <div className="content flex  flex-col">
          <p className=" text-lg leading-6  lg:text-xl lg:leading-[1.6]">
            {paragraph}
          </p>
        </div>
        <span className="text-xl font-medium uppercase lg:place-self-end py-10 leading-6 lg:pr-[110px]">
          {name}
        </span>
      </div>
    </section>
  );
};

export default Testimonial