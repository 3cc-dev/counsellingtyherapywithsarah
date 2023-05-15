import classNames from "classnames";
import Image from "next/image";
import ImageShadow from "./ImageShadow";

export default function HeroSplit({children, className, image, alt, variant='default'}) {

  const variants = {
    default: 'lg:min-h-screen',
    profile: 'my-12',
  }
  const variantsCol1 = {
    default: 'flex items-center justify-center lg:w-1/2',
    profile: 'flex items-center justify-center lg:w-1/2',
  };

  const variantsCol2 = {
    default: 'flex items-center m-12 lg:w-1/2 2xl:p-32',
    profile: 'flex items-center m-12 lg:w-1/3 2xl:p-32 mx-auto w-2/3 p-12',
  };

  return (
    <section className={classNames(className)}>
      <div className={
        classNames(
          variants[variant],
          'flex flex-col-reverse lg:flex-row 2xl:h-auto'
        )
      }>
        <div className={variantsCol1[variant]}>
          <div className="max-w-lg p-8 mt-4">
            {children}
          </div>
        </div>
        <div className={variantsCol2[variant]}>
          <ImageShadow alt={alt} image={image} />
        </div>
      </div>
    </section>
  );
}