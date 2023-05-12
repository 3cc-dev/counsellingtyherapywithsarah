import classNames from "classnames";

export default function ButtonView({children, className, variant = 'default'}) {
  const variants = {
    'default': 'border border-black bg-black text-white hover:bg-white hover:text-black',
    'black': 'border border-black bg-black text-white hover:bg-white hover:text-black',
    'sea-pink': 'text-sea-pink-800 bg-gradient-to-t from-sea-pink-500 to-sea-pink-300 hover:from-sea-pink-400 hover:to-sea-pink-200',
    'white': 'bg-white shadow hover:bg-black hover:text-white',
    'transparent': 'bg-transparent border border-black hover:bg-black hover:text-white',
  }

  return (
    <span className={
      classNames(
        variants[variant],
        className,
        'px-6 py-4 rounded-full inline-block text-base lg:text-lg whitespace-nowrap',
        'transition-all'
      )
    }>{children}</span>
  );
}
