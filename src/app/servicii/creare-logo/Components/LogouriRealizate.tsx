import React from 'react'
import Image from 'next/image';
import TwoColumnLayout from './TwoColumnsLayout';
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
          <>
            {' '}
            <div className={`px-6 py-4 `}>
              <div className="prose">
                <h3 className="text-center mb-2">GetAround Digital</h3>
                <p>
                  Getaround Digital, este o companie specializată în dezvoltarea
                  de software digital si solutii tech care si-a dorit un logo cu
                  elemente geometrice care sa inspire domeniul IT.{' '}
                </p>
                <p>
                  Am început prin a efectua o analiză atentă a identității și
                  obiectivelor sale, precum și a publicului țintă. Am dorit să
                  evidențiem competența și angajamentul firmei în domeniul
                  dezvoltării software, astfel încât să transmită o imagine de
                  încredere și profesionalism.
                </p>
                <p>
                  În etapele de brainstorming și schițare a conceptelor, am
                  căutat să găsim elemente grafice care să reflecte inovația și
                  fiabilitatea pe care Getaround Digital le promovează în munca
                  sa. Am explorat diverse idei și combinații de culori și forme,
                  încercând să găsim acel echilibru între modernitate și
                  simplitate care să rezulte într-un logo memorabil și
                  reprezentativ.
                </p>
                <p>
                  Pe măsură ce am progresat în proces, am iterat și am rafinat
                  conceptele, luând în considerare feedback-ul din partea
                  clientului și asigurându-ne că logo-ul final reflectă în mod
                  autentic esența și valorile Getaround Digital. Ne-am asigurat
                  că design-ul este atât estetic plăcut, cât și funcțional,
                  astfel încât să ofere o reprezentare vizuală puternică a
                  activității și competențelor companiei.
                </p>
                <p>
                  În final, am livrat Getaround Digital un logo care să comunice
                  soliditatea, inovația și angajamentul față de excelență în
                  domeniul dezvoltării software digital, reprezentând astfel un
                  element esențial al identității vizuale a compani
                </p>
                <p>
                  <b>Observatie:</b> Pe langa logo, clientul si-a dorit
                  realizarea unor creative care sa exprime vizual expertiza tech
                  pe care acesta il ofera clientilor sai. ( vezi mai jos)
                </p>
              </div>
            </div>
          </>
        }
        rightSideContent={
          <div className="m-2 flex items-center flex-1 flex-col gap-5   col-span-7 ">
            <Image
              src="/Logo-Mockups/BaseConsultingAgency1.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency2.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
              className=" object-cover"
              
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency3.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency4.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency5.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency6.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency7.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
            />
            <Image
              src="/Logo-Mockups/BaseConsultingAgency8.png"
              width={1920}
              height={1080}
              alt="Base Consulting Agency Mockup si Logo"
              />
              </div>
          
        }
      />
      </div>
    </section>
  );
}

export default LogouriRealizate