import Image from "next/image";
import { ActionBtn } from "../Buttons";
import { IMainHeader } from "@/interfaces/IMainHeader";


const MainHeader = ({ title, paragraph, image }: IMainHeader) => (
  <section className="p-10 max-w-full relative overflow-hidden pt-10 pb-2 md:py-24">
    <div className="absolute bottom-[0px] left-0 h-full w-[200%]   overflow-x-hidden origin-bottom-left -translate-y-4/12 -rotate-12 transform bg-primary-gradient md:translate-y-0"></div>
    <div className="container relative grid max-h-[80vh] lg:grid-flow-col gap-5 overflow-x-hidden  md:grid-flow-row md:gap-12">
      <div className="lg:p-10 flex-1 w-full text-white ">
        <h1 className="text-3xl font-bold uppercase leading-[1.2] tracking-wider md:text-5xl">
          {title}
        </h1>
        <div className="mt-4 pb-9 my-9 text-base italic md:mt-10 md:text-xl md:leading-8">
          {paragraph}
        </div>
        <ActionBtn.Primary />
      </div>
      <div className=" text-center relative">
        <Image
          className="m-auto  max-h-[50vh]  w-auto rounded-md"
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
