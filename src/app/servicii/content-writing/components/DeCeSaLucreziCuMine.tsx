import React from 'react';
import { FlexibleColumnSection } from '@/components';
import { CopyWritingData } from '../pageConstants';
import { ActionBtn } from '@/components/Buttons';

const DeCeSaLucreziCuMine = ({ sectionHeading, p }: CopyWritingData) => {
  return <FlexibleColumnSection  {...{ sectionHeading, p }}>
    <div className="w-full container justify-center flex items-center bg-primary-gradient min-h-full max-h[300px] flex-col">
        <div className="glass h-1/2 bg-blend-hue self-center flex flex-col place-content-center px-10 p-5 gap-5">
        <b className='text-white m-2'>Programeaza-te Pentru o Sesiune de Consultanta <span className='uppercase underline underline-offset-4'>gratuita</span></b>
        <ActionBtn.Primary />
        </div>

    </div>
  </FlexibleColumnSection>;
};

export default DeCeSaLucreziCuMine;
