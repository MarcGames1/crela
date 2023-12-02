import React, { ReactNode } from 'react';

const IntroSection = ({ children, p }: { children: ReactNode; p: string }) => {
  return (
    <>
      <div className="block m-auto prose">
        {children}
        <p className="leading-7 tracking-widest">{p}</p>
        <div className="mx-auto mb-10 h-[3px] w-[200px] bg-primary-gradient md:mb-24 md:h-[3px] md:w-[300px]"></div>
      </div>
    </>
  );
};

export default IntroSection;
