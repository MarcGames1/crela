import dynamic from 'next/dynamic';

import { Metadata } from 'next/types';
import { pageMetaData } from './pageConstants';
import CreareLogoPageComponent from './CreareLogoPageComponent';

export const metadata: Metadata = pageMetaData;

const CreareLogo = CreareLogoPageComponent;

export default CreareLogo;
