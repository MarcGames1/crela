import React from 'react'
import Image from 'next/image';
import TwoColumnLayout from './TwoColumnsLayout';
import GetAroundDigitalText
  from "@/app/servicii/creare-logo/Components/CustomersStudyCase/GetAroundDigital/GetAroundDigitalText";
import GetAroundDigitalImages
  from "@/app/servicii/creare-logo/Components/CustomersStudyCase/GetAroundDigital/GetAroundDigitalImages";
const LogouriRealizate = () => {
  return (
    <section>
      <h2
        className="text-center mb-2 mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
              [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
              md:[&>u]:underline-offset-[10px] max-w-[1300px]"
      >
        Uite o parte din logo-urile realizate de mine
      </h2>

      {/* <div></div> */}
      <div>

      
      <TwoColumnLayout
        leftSideContent={
        <GetAroundDigitalText />
        }
        rightSideContent={
         <GetAroundDigitalImages />
          
        }
      />
      <TwoColumnLayout
        leftSideContent={
          <>
            {' '}
            <div className={`px-6 py-4 `}>
              <div className="prose">
                <h3 className="text-center mb-2">ThinkDigitall</h3>
                <p>
                  Pentru ThinkDigital, o companie specializată în dezvoltarea de software digital și soluții tech, am concentrat eforturile inițial pe înțelegerea profundă a identității și obiectivelor sale, precum și a publicului țintă. Ne-am propus să subliniem competența și angajamentul firmei în domeniul dezvoltării software, soluții tech și managementul proiectelor.
                </p>
                <p>
                  În faza inițială de brainstorming și schițare a conceptelor, am căutat să găsim elemente grafice care să reflecte inovația și fiabilitatea pe care ThinkDigital le promovează în activitatea sa. Am explorat diverse idei și combinații de culori și forme, urmărind să obținem un logo memorabil și reprezentativ, care să îmbine modernitatea cu simplitatea și să sugereze, de asemenea, managementul proiectelor.
                </p>
                <p>
                  Pe măsură ce am progresat în proces, am iterat și am rafinat conceptele, luând în considerare feedback-ul din partea clientului și asigurându-ne că logo-ul final transmite autentic esența și valorile ThinkDigital. Ne-am concentrat pe un design care să fie nu doar estetic plăcut, ci și funcțional, oferind o reprezentare vizuală puternică a activității și competențelor companiei, inclusiv managementul proiectelor.
                </p>
                <p>
                  În final, am livrat un logo care comunică soliditatea, inovația și angajamentul față de excelență în domeniul dezvoltării software digital și soluțiilor tech, inclusiv managementul proiectelor, reprezentând astfel un element esențial al identității vizuale a companiei ThinkDigital.
                </p>

                <p>
                  <b>Observatie:</b> Clientul a fost multumit cu varianta de mai jos
                </p>
              </div>
            </div>
          </>
        }
        rightSideContent={
          <div className="m-2 flex items-center flex-1 flex-col gap-5   col-span-7 ">
            <Image
              src="/Logo-Mockups/ThinkDigital1.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital2.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
              className=" object-cover"
              
            />
            <Image
                src="/Logo-Mockups/ThinkDigital3.png"
              width={1920}
              height={1080}
                alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital4.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital5.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital6.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital7.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
            />
            <Image
                src="/Logo-Mockups/ThinkDigital8.png"
              width={1920}
              height={1080}
              alt="ThinkDigital  Mockup si Logo"
              />
            <Image
                src="/Logo-Mockups/ThinkDigital9.png"
                width={1920}
                height={1080}
                alt="ThinkDigital  Mockup si Logo"
            />
              </div>

        }
      />
      </div>
    </section>
  );
}

export default LogouriRealizate