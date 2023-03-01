import React from 'react'
import { tw } from 'twind'
import { getTextAlign } from '../../../utils/fonts';
import { relativeToAbsoluteUrls } from '../../../utils/relativeToAbsoluteUrls'

export const Paragraph = ({
  textAlign = 'left',
  content,
  textColor,
  backgroundColor =null,
}) => {
  return (
    <p
      className={tw(
        `leading-9 py-4 max-w-5xl mx-auto ${backgroundColor ? `block w-full bg-${backgroundColor}` : ""} ${getTextAlign(textAlign)}`
      )}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    ></p>
  );
};
