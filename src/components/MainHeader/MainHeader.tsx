import Image from "next/image";
import { ActionBtn } from "../Buttons";
import { ReactElement } from "react";
export interface IMainHeader {
  title: string | ReactElement;
  paragraph: string | ReactElement;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}


const MainHeader = ({ title, paragraph, image }: IMainHeader) => (
  <section className="p-10 relative overflow-hidden pt-10 pb-2 md:py-24">
    <div className="absolute bottom-[0px] left-0 h-full w-[200%]  origin-bottom-left -translate-y-4/12 -rotate-12 transform bg-gradient-to-t from-[#800507] to-[#DA2128] md:translate-y-0"></div>
    <div className="container relative grid  lg:grid-flow-col gap-5 md:grid-flow-row md:gap-12">
      <div className="lg:p-10 flex-1 text-white ">
        <h1 className="text-3xl font-bold uppercase leading-[1.2] tracking-wider md:text-5xl">
          {title}
        </h1>
        <div className="mt-4 pb-9 my-9 text-base italic md:mt-10 md:text-xl md:leading-8">
          {paragraph}
        </div>
        <ActionBtn.Primary />
      </div>
      <div className="flex-1 text-center ">
        <Image
          className="m-auto max-h-[80%] w-auto rounded-md"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  </section>
);

export default MainHeader;
