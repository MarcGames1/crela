export interface Iimage {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
}
