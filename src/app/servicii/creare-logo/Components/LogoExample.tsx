
import Image from "next/image";
import { ImagesGrid } from "./ImagesGrid";
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

export interface ILogoExample {
  header: string;
  paragraph: string;
  exampleHeader: string;
  exampleText: string;
  image: { src: string; alt: string; width?: number; height?: number;};
  secondaryImages?: { src: string; alt: string; width?: number; height?: number }[];
}

export const LogoExample = ({
  header,
  paragraph,
  exampleHeader,
  exampleText,
  image,
  isReversed = false,
  secondaryImages
}: ILogoExample & { isReversed?: boolean }) => {



  
  return (
    <div
      className={`lg:p-10 pb-10 ${
        isReversed
          ? 'flex lg:flex-row  flex-col'
          : 'flex lg:flex-row-reverse  flex-col-reverse '
      } items-center justify-around gap-5 md:gap-10 lg:gap-20`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        
        variants={{
          visible: { opacity: 1, scale: [1, 1.2, 1] },
          hidden: { opacity: 0, scale: 0, y: 50 },
        }}
        className="prose  block  md:m-5 lg:m-10"
      >
        <b className="block text-xl text-center font-extrabold underline underline-offset-4 decoration-2 decoration-accent">
          {header}
        </b>
        <p className="block  leading-9 tracking-wider italic font-semibold	">
          {paragraph}
        </p>
        <b className="text-lg text-center block font-bold mb-2">
          {exampleHeader}
        </b>
        <p className="leading-9 italic tracking-wider">{exampleText}</p>
      </motion.div>
      {/* Apple */}
      <div
        className={`place-items-center flex-grow-0 md:m-5 md:p-5 lg:m-10 lg:gap-10`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: [1, 1.2, 1], y: 0 },
            hidden: { opacity: 0, scale: 0, y: -50 },
          }}
          className="relative  h-full flex  lg:flex-row flex-col items-center"
        >
          {!secondaryImages && (
            <Image
              className="place-self-center self-center"
              {...image}
              width={image?.width || 200}
              height={image?.width || 200}
            />
          )}

          {secondaryImages && (
            <ImagesGrid image={image} secondaryImages={secondaryImages} />
          )}
        </motion.div>
      </div>
    </div>
  );
};


