import React from 'react';
import { FlexibleColumnSection } from '@/components';
import { CopyWritingData } from '../pageConstants';
import { ActionBtn } from '@/components/Buttons';

const DeCeSaLucreziCuMine = ({ sectionHeading, p }: CopyWritingData) => {
  return <FlexibleColumnSection  {...{ sectionHeading, p }}>
    <div className="w-full container justify-center flex items-center bg-primary-gradient h-full flex-col">
        <div className="glass h-1/2  self-center flex flex-col place-content-center px-10 gap-5">
        <b className='text-white'>Programeaza-te Pentru o Sesiune de Consultanta <span className='uppercase underline underline-offset-4'>gratuita</span></b>
        <ActionBtn.Primary />
        </div>

    </div>
  </FlexibleColumnSection>;
};

export default DeCeSaLucreziCuMine;
