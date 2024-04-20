import classNames from "classnames";

export default function P({className, children}) {
    return <p className={classNames(className, 'text-lg font-light leading-loose mt-6')}>{children}</p>
}