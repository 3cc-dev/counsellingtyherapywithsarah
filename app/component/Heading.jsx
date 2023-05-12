import classNames from 'classnames';

export default function Heading({ children, className, level }) {
    const Hx = `h${level}`
  
    function levelClassNames() {
      return [
        'text-4xl lg:text-5xl mt-4',    // h1
        'text-3xl lg:text-4xl mt-4',    // h2
        'text-2xl lg:text-3xl mt-4',    // h3
        'text-lg lg:text-2xl mt-4',     // h4
        'text-base lg:text-lg mt-4',    // h5
        'text-sm lg:text-base mt-4',    // h6
      ][level - 1]
    }
  
    return (
      <Hx className={classNames(className, levelClassNames(), 'font-serif font-light')}>
        {children}
      </Hx>
    );
  }
  