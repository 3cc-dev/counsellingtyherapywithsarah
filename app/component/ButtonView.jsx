import classNames from "classnames";

export default function ButtonView({children, className, variant = 'default'}) {
  const variants = {
    'default': 'px-6 py-4 rounded-full bg-black inline-block text-white text-xs md:text-base lg:text-lg',
    'black': 'px-6 py-4 rounded-full bg-black inline-block text-white text-xs md:text-base lg:text-lg',
    'white': 'px-6 py-4 rounded-full bg-white inline-block text-black shadow text-xs md:text-base lg:text-lg hover:bg-black hover:text-white',
    'transparent': 'px-6 py-4 rounded-full bg-transparent inline-block text-black border border-black text-xs md:text-base lg:text-lg',
  }
  return (
    <span className={classNames(variants[variant], className, 'transition-all')}>{children}</span>
  );
}
