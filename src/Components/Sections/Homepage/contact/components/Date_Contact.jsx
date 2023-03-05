import React from 'react';
import { typography } from '@/helpers/styles';
import { tw } from 'twind';
const Date_Contact = () => {
  return (
    <div
      className={tw(
        ' flex  flex-col gap-3 col-span-2 place-items-center items-between '
      )}
    >
      <div
        className={tw(
          'flex  flex-col items-between '
        )}
      >
        <div className={`${typography.heading3} ${tw('text-left')}`}>Email</div>
        <a
          href={'mailto:laura.iaurum28@gmail.com'}
          className={`${typography.p} ${tw('text-black')}`}
        >
          laura.iaurum28@gmail.com{' '}
        </a>

        <div className={`${typography.heading3} ${tw('text-left')}`}>
          Dacă îți este mai ușor, hai să ne-auzim
        </div>
        <a
          href={'tel:0766 713369'}
          className={`${typography.p} ${tw('text-black')}`}
        >
          0766 713369
        </a>
      </div>
    </div>
  );
};

export default Date_Contact;
