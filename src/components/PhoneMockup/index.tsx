import { ReactNode } from "react";

const PhoneMockup = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mockup-phone  border-primary ">
      <div className="camera"></div>
      <div className="display ">
        <div className="artboard max-h-[70vh] artboard-demo phone-4 m-[-17px]  overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
