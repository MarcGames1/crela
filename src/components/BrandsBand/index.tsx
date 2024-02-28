'use server'
import React from 'react'
import Section from '../Section';
import { Iimage } from '@/interfaces/image';
import fs from 'fs';
import BrandsBandCarousel from './BrandsBandCarousel';
function getBrandImages() {
  // Definirea directorului Brands
  const brandDir = './public/Brands';

  try {
    // Citirea conținutului directorului Brands
    const files = fs.readdirSync(brandDir);

    // Crearea array-ului de imagini pe baza numelor găsite
    const images = files.map((file: any, index: number) => ({
      src: `/Brands/${file}`, // Calea către imagine
      alt: `Brand ${index + 1}`, // Text alternativ pentru imagine
      ...imageSizes,
    }));

    return images; // Returnează array-ul de imagini
  } catch (error) {
    console.error('Eroare la citirea directorului Brands:', error);
    return []; // Returnează un array gol în caz de eroare
  }
}
const imageSizes = {
  width: 600,
  height: 600
}
const images: Iimage[] = getBrandImages();

const BrandsBand = () => {
  return (
    <Section
      heading={
        <>
          <span className="bg-clip-text  text-transparent bg-primary-gradient">
            O parte din Clientii
          </span>{' '}
          Care Au Incredere in Crela.ro
        </>
      }
      p={undefined}
    >
      <BrandsBandCarousel images={images} />
    </Section>
  );
}

export default BrandsBand