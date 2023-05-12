import classNames from "classnames";
import Button from "./Button";
import LogoFull from "../resources/svg/sarah-fysh-logo-full.svg";

export default function Navigation({children, variant = 'default'}) {
  const variants = {
    'default': '',
    'opaque': '',
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-white to-transparent">
      <nav
        className={classNames(
          'transition-all flex items-center justify-between h-28 px-8', variants[variant]
        )}
        role="navigation"
      >
        <LogoFull className="w-48 mx-auto lg:w-64 lg:mx-0" />
        <Button
          className="hidden lg:inline-block"
          variant="transparent"
        >Speak to Sarah &rarr;</Button>
      </nav>
    </header>
  );
}