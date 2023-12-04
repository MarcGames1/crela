import { IntroSection } from '@/components';
import React from 'react'

const FirstSection = () => {
  return (
    <IntroSection p="Bine ai venit în lumea fascinantă a branding-ului! Sunt Laura și vreau să te conduc printr-o călătorie spre înțelegerea identității vizuale de brand.">
      <h2 className="text-center">
        Servicii de{' '}
        <span className="bg-clip-text text-transparent bg-primary-gradient">
          Branding si Identitate Vizuala
        </span>
      </h2>
    </IntroSection>
  );
}

export default FirstSection