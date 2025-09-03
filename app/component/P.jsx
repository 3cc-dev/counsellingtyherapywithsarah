import classNames from "classnames";

export default function P({className, children}) {
    return <p className={classNames(className, 'text-lg text-balance font-light leading-loose mt-6')}>{children}</p>
}