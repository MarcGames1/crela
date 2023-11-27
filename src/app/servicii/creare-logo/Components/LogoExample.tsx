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
      className={`${
        isReversed
          ? 'flex flex-flow-col  md:flex-flow-col'
          : 'flex flex-col-reversed md:flex-row-reverse'
      } items-center justify-around gap-20`}
    >
      <div className="prose m-10">
        <b className="block text-center font-extrabold underline underline-offset-4 decoration-2 decoration-accent">
          {header}
        </b>
        <p className=" leading-9 tracking-wider italic font-semibold	">
          {paragraph}
        </p>
        <h3 className="text-xl text-center font-bold mb-2">{exampleHeader}</h3>
        <p>{exampleText}</p>
      </div>
      {/* Apple */}
      <div className={`flex flex-col place-items-center m-10 gap-10`}>
        <div className="relative w-full h-full flex items-center">
          {!secondaryImages && (
            <Image className="place-self-center self-center"
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


