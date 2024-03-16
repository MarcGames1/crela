import React, { ReactNode } from "react";

const TwoColumnLayout = ({
  leftSideContent,
  rightSideContent,
}: {
  leftSideContent: ReactNode;
  rightSideContent: ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col gap-2.5 items-center justify-items-center lg:flex-row relative ">
        {/* Partea stângă */}
        <div
          className={`flex-none  lg:w-2/4 h-auto  relative overflow-visible`}
        >
          <div className="bg-gray-300/70 drop-shadow-lg rounded-xl">
            {leftSideContent}
          </div>
        </div>

        {/* Partea dreaptă */}
        <div className="flex-grow lg:w-2/4">{rightSideContent}</div>
      </div>
    </>
  );
};

export default TwoColumnLayout;
