import { ILogoExample, LogoExample } from './LogoExample';

export interface ILogoDefinitionData {
  sectionHeader: string;
  sectionIntro: string;
  examples: ILogoExample[]
}

export const LogoDefinition = ({
  sectionHeader,
  sectionIntro,
  examples
}: ILogoDefinitionData) => {
  return (
    <div className="flex flex-col lg:mx-20 md:mx-10 mx-5 space-y-8">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">{sectionHeader}</h2>
        <p className="text-lg mb-4 md:w-1/2 m-auto">{sectionIntro}</p>
        <ul className="list-disc m-10 gap-10 place-items-center pl-8">
          {examples.map((example, idx)=>{
            return (
              <li className='grid lg:grid-flow-col md:grid-flow-row '  key={idx}>
                <LogoExample isReversed={idx % 2 === 0} {...example} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
);

};
   