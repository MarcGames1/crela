import Image from "next/image";
import React from "react";

const GetAroundDigitalImages = () =>{
    return (
        <div className="m-2 flex items-center flex-1 flex-col gap-5   col-span-7 ">
            <Image
                className={' max-h-[90vh] w-auto'}
                src="/Logo-Mockups/GetAroundDigital1.png"
                width={1920}
                height={1080}
                alt="GetAroundDigital Mockup si Logo"
            />
            <Image
                className={' max-h-[90vh] w-auto'}
                src="/Logo-Mockups/GetAroundDigital2.png"
                width={1920}
                height={1080}
                alt="GetAroundDigital Mockup si Logo"


            />
            <Image
                className={' max-h-[90vh] w-auto'}
                src="/Logo-Mockups/GetAroundDigital3.png"
                width={1920}
                height={1080}
                alt="GetAroundDigital Mockup si Logo"
            />
            <Image
                className={' max-h-[90vh] w-auto'}
                src="/Logo-Mockups/GetAroundDigital4.png"
                width={1920}
                height={1080}
                alt="GetAroundDigital Mockup si Logo"
            />

        </div>
    )
}
export default GetAroundDigitalImages