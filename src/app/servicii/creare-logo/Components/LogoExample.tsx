import Image from "next/image";
import { ImagesGrid } from "./ImagesGrid";
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
      } items-center justify-around gap-10 lg:gap-20`}
    >
      <div className="prose w-full block md:m-5 lg:m-10">
        <b className="block text-xl text-center font-extrabold underline underline-offset-4 decoration-2 decoration-accent">
          {header}
        </b>
        <p className=" leading-9 tracking-wider italic font-semibold	">
          {paragraph}
        </p>
        <b className="text-lg text-center block font-bold mb-2">
          {exampleHeader}
        </b>
        <p className="leading-9 italic tracking-wider">{exampleText}</p>
      </div>
      {/* Apple */}
      <div className={`place-items-center flex-grow-0 md:m-5 md:p-5 lg:m-10 lg:gap-10`}>
        <div className="relative w-full h-full flex  lg:flex-row flex-col items-center">
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
        </div>
      </div>
    </div>
  );
};


