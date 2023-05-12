import classNames from "classnames";
import Button from "./Button";

export default function Navigation({children, variant = 'default'}) {
  const variants = {
    'default': '',
    'opaque': 'bg-white',
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={classNames('transition-all flex items-center justify-between h-28 px-8', variants[variant])} role="navigation">
        <h1 className="text-lg">Logo</h1>
        <Button variant="white">Speak to Sarah &rarr;</Button>
      </nav>
    </header>
  );
}