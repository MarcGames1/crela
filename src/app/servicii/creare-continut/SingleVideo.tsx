import { PhoneMockup } from '@/components';
import React from 'react'
import { UGC_Video } from './UGC_Data';

const SingleVideo = ({src, header, description}:UGC_Video) => {
  return (
    <div id='phoneContainer'  className="py-5 min-w-[500px] w-auto flex items-center flex-col gap-2  mx-auto">
      <PhoneMockup>
        <div>
          <video loop muted controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </PhoneMockup>
      <div className='y'>
      <p className='text-center text-sm'>{header}</p>
      <p className='text-center text-lg font-semibold'>{description}</p>

      </div>
    </div>
  );
}

export default SingleVideo