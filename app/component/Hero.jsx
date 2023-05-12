import classNames from "classnames";
import Image from "next/image";

export default function Hero({children, image}) {
  return (
    <section className={classNames()}>
      <div className="flex flex-col-reverse lg:flex-row lg:h-screen">
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="max-w-lg p-8">
            {children}
          </div>
        </div>
        <div className="lg:w-1/2 aspect-square lg:aspect-auto">
          <Image alt="Why Counselling?" className="object-cover object-center w-full h-full" src={image} />
        </div>
      </div>
    </section>
  );
}