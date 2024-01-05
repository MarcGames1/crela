import { ReactElement } from "react";

export interface IMainHeader {
  title: string | ReactElement;
  paragraph: string | ReactElement;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: { src: string; width: number; height: number };
}