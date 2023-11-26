import Image from "next/image";
export interface ILogoExample {
  header: string;
  paragraph: string;
  exampleHeader: string;
  exampleText: string;
  image: { src: string; alt: string; width?: number; height?: number;};
}

export const LogoExample = ({
  header,
  paragraph,
  exampleHeader,
  exampleText,
  image,
  isReversed = false,
}: ILogoExample & { isReversed?: boolean }) => {

 

  return (
    <div
      className={`${
        isReversed
          ? 'flex  md:flex-row'
          : 'flex flex-col-reversed md:flex-row-reverse'
      } items-center gap-20`}
    >
      <div className="prose">
        <b className="block text-center font-extrabold underline underline-offset-4 decoration-2 decoration-accent">
          {header}
        </b>
        <p className=" leading-9 tracking-wider italic font-semibold	">
          {paragraph}
        </p>
      </div>
      {/* Apple */}
      <div className={`flex flex-col place-items-center gap-10`}>
        <h3 className="text-xl font-bold mb-2">{exampleHeader}</h3>
        <p>{exampleText}</p>
        <Image
          {...image}
          width={image?.width || 200}
          height={image?.width || 200}
        />
      </div>
    </div>
  );
};
