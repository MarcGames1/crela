import { PhoneMockup } from '@/components';
import React from 'react'
import { UGC_Video } from './UGC_Data';
import dynamic from 'next/dynamic';

const SingleVideo = ({src, header, description, thumbnail}:UGC_Video) => {
  return (
    <div
      id="phoneContainer"
      className="py-5 min-w-[500px] w-auto flex items-center flex-col gap-2  mx-auto"
    >
      <PhoneMockup>
        <div>
          <video poster={thumbnail}  loop muted controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </PhoneMockup>
      <div>
        <p className="text-center text-sm">{header}</p>
        <p className="text-center text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(SingleVideo), {
  ssr: true,
});
