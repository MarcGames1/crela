import React from 'react';

export interface SectionProps {
  children?: React.ReactNode;
  heading: React.ReactNode;
  p: string | React.ReactNode;
}

const Section = ({ heading, children, p }: SectionProps) => {
  const renderParagraphs = () => {
    if (typeof p === 'string') {
      return <p className="leading-7 mx-5 tracking-widest">{p}</p>;
    } else if (React.isValidElement(p)) {
      return <div className="prose leading-7 mx-5 tracking-widest">{p}</div>;
    }
    return null;
  };

  return (
    <section>
      <div className="prose m-auto">
        <h2 className="lg:text-3xl md:text-2xl text-center font-bold">
          {heading}
        </h2>
        {p && (
          <>
            {renderParagraphs()}
            <div className="mx-auto mb-10 h-[3px] w-[200px] bg-primary-gradient md:mb-24 md:h-[3px] md:w-[300px]"></div>
          </>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
