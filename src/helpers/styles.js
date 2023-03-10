import { tw } from "twind"
import styles from './styles.module.css'

export const colors = {
        primary: {
          DEFAULT: '#181E4B',
        },
        secondary: {
          DEFAULT: '#DF6951',
        },
        paragraph: {
          DEFAULT: '#5E6282',
        },
        crelaRoz: {
          DEFAULT: '#FF0090',
        },
        white: {
            DEFAULT: '#FFFFFF',
        }
      }


export const typography = {
  heading1: `${styles.heading1} ${tw('')}`,
  heading2: `${styles.heading2} ${tw('')}`,
  heading3: `${styles.heading3} ${tw('')}`,

  decorativ: `${styles.decorativ} ${tw('text-[#5e62826e]')}`,

  p: `${tw(
    'lg:text-xl md:text-sm sm:text-sm leading-18 indent-0	text-justify		'
  )} ${styles.p}`,
};
  
export const form = {
  form: `${tw('flex flex-col justify-items-between w-full border-1 px-3')} `,
  input: `${tw('bg-white shadow-md ')} ${styles.input} ${typography.p}`,
  label: `${styles.label} `,
  select: `${styles.select} ${typography.p} `,
  textArea: `${styles.textArea}  ${typography.p} ${tw(
    'bg-white shadow-md border-2'
  )}`,
  button: `${styles.button} ${tw('shadow-md ')}`,
};