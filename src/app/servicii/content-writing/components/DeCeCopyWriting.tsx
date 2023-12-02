import React from 'react';
import { FlexibleColumnSection } from '@/components';
import { CopyWritingData } from '../pageConstants';

const DeCeCopyWriting = ({ sectionHeading, p }: CopyWritingData) => {
  return <FlexibleColumnSection {...{ sectionHeading, p }} />;
};

export default DeCeCopyWriting;
