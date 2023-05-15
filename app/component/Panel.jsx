import classNames from "classnames"
import Heading from "./Heading";

export default function Panel({children, className, title, variant = 'default'}) {

  const variants = {
    default: 'grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8',
    'cols-3': 'grid mt-8 gap-x-4 gap-y-8 lg:grid-cols-3'
  }
  return (
    <section className="px-8 mt-12">
      <div className="w-full max-w-screen-xl px-8 pt-8 pb-8 mx-auto font-light text-white border rounded-lg drop-shadow-xl bg-gradient-to-t from-sky-500 to-sky-300 border-sky-400">
        {title && <Heading className="mt-0" level={2}>{title}</Heading>}
        <div className={classNames(
          variants[variant],
          '[&_a]:underline'
        )}>
          {children}
        </div>

      </div>
    </section>
  );
}

