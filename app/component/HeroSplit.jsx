import classNames from "classnames";
import Image from "next/image";

export default function HeroSplit({children, className, image}) {
  return (
    <section className={classNames(className)}>
      <div className="flex flex-col-reverse lg:flex-row lg:h-screen 2xl:h-auto">
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="max-w-lg p-8 mt-4">
            {children}
          </div>
        </div>
        <div className="flex items-center m-12 lg:w-1/2 2xl:p-32">
          <div className="mt-12 translate-x-6 translate-y-6 rounded-lg lg:translate-x-0 lg:translate-y-0 lg:mt-0 aspect-square bg-gradient-to-t from-sea-pink-300 to-white">
            <Image
              alt="Why Counselling?"
              className="object-cover object-center w-full h-full -translate-x-12 translate-y-12 rounded-lg drop-shadow-xl" src={image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}