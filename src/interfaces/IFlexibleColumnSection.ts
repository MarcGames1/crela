import { ReactNode } from "react";
export interface IFlexibleColumnSection {
  sectionHeading: string | ReactNode;
  p: string | ReactNode;
  reversed?: boolean;
  children?: React.ReactNode;
}
