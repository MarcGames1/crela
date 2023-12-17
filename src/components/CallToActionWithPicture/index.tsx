import React from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

const CallToActionWithPicture = () => {
  return (
    <section className=" min-h-[75vh] grid grid-cols-none grid-rows-2  lg:grid-rows-none lg:grid-cols-2 gap-5 ">
      <LeftSide />
      <div className="right relative overflow-clip flex justify-center items-center">
       <RightSide />
      </div>
    </section>
  );
};

export default CallToActionWithPicture;
