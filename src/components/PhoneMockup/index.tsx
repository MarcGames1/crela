import { ReactNode } from "react";

const PhoneMockup = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mockup-phone  border-primary ">
      <div className="camera"></div>
      <div className="display ">
        <div className="artboard max-h-fit artboard-demo lg:phone-1  phone-5 m-[-17px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
