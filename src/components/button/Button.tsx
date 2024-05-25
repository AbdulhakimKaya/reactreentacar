import {createElement, ReactNode} from "react";
import './Button.scss'
import classNames from "classnames";

interface ButtonProps {
    as?: any;
    size?: 'small' | 'normal' | 'large';
    variant?: 'primary' | 'white' | 'white-outline' | 'black';
    className?: string;
    children: ReactNode;
}

export default function Button({
                                   as = 'button',
                                   size = 'normal',
                                   variant = 'primary',
                                   className,
                                   children,
                                   ...props
                               }: ButtonProps) {

    const classes = classNames("db-button")

    return createElement(as, {
        type: 'button',
        className: classNames(
            "rounded-full flex items-center justify-center font-bold transition-colors", classes,
            {
                "px-4 h-8 text-sm": size === 'small',
                "px-4 h-9": size === 'normal',
                "px-4 text-[16px] h-[36px] w-full": size === 'large',
                "bg-[#c81d25] hover:bg-[#ff5a5f] text-white": variant === 'primary',
                "bg-[#eff3f4] text-black": variant === 'white',
                "border border-[#b4b4b4] text-[#333333ff] hover:bg-[#eff3f4] hover:text-black": variant === 'white-outline',
                "bg-[#333333ff] text-white hover:bg-[#141414ff]": variant === 'black',
                [className!]: className,
            }
        ),
        ...props
    }, children);
}
