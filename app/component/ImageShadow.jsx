import classNames from "classnames";
import Image from "next/image";

export default function ImageShadow({className, image, alt}) {
  return (
    <div className={
      classNames(
        className,
        'translate-x-6 translate-y-6 rounded-lg lg:translate-x-0 lg:translate-y-0 aspect-square bg-gradient-to-t from-sky-300 to-white'
      )
    }>
      <Image
        alt={alt}
        className="object-cover object-center w-full h-full -translate-x-12 translate-y-12 rounded-lg drop-shadow-xl" src={image}
        priority
      />
    </div>
  );
}