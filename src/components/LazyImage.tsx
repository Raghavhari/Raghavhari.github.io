import { ImgHTMLAttributes } from "react";

export type LazyImageProps = {
  src: string;
  alt: string;
  imgClassName?: string;
  onError?: ImgHTMLAttributes<HTMLImageElement>["onError"];
};

export function LazyImage({ src, alt, imgClassName = "", onError }: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={onError}
      className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
    />
  );
}
