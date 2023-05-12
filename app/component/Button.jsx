import classNames from "classnames";
import ButtonView from "./ButtonView";

export default function Button({children, className, variant = 'default'}) {
  return (
    <button>
      <ButtonView className={classNames(className)} variant={variant}>{children}</ButtonView>
    </button>
  );
}
