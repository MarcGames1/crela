import React from 'react'

export interface SectionProps {
    children: React.ReactNode,
    heading: React.ReactNode,
    p?:  string
}

const Section = ({ heading, children, p }: SectionProps) => {
  return (
    <section>
      <div className="prose m-auto">
        <h2 className=" lg:text-3xl md:text-2xl text-center font-bold">
          {heading}
        </h2>
        {p && (
          <>
            <p className="leading-7 tracking-widest">{p}</p>{' '}
            <div className="mx-auto mb-10 h-[3px] w-[200px] bg-primary-gradient md:mb-24 md:h-[3px] md:w-[300px]"></div>
          </>
        )}
      </div>
        {children}
    </section>
  );
};

export default Section