import classNames from "classnames";
import Image from "next/image";

export default function HeroBackground({children, className, image}) {
  return (
    <section className={classNames(className)}>
      <div className="relative mt-8 bg-gradient-to-r lg:bg-gradient-to-l from-sea-pink-500 to-transparent">
        <div className="px-8 py-12 mx-auto max-w-screen-2xl lg:p-32 2xl:py-64">
          {children}
        </div>
        <Image
          alt="Counselling for life's transitions"
          className="absolute inset-0 object-cover object-center w-full h-full -z-10" src={image}
        />
      </div>
    </section>
  );
}