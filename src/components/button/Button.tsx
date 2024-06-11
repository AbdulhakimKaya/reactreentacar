import {createElement, MouseEventHandler, ReactNode} from "react";
import './Button.scss'
import classNames from "classnames";

interface ButtonProps {
    as?: any;
    size?: 'xSmall' | 'small' | 'normal' | 'large';
    variant?: 'primary' | 'white' | 'white-outline' | 'black' | 'edit' | 'delete';
    className?: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
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
                "px-4 h-7 text-sm font-semibold": size === 'xSmall',
                "px-4 h-8 text-sm": size === 'small',
                "px-4 h-9": size === 'normal',
                "px-4 text-[16px] h-[36px] w-full": size === 'large',
                "bg-[#FFF1F0] text-[#c81d25] border border-[#c81d25] hover:bg-[#c81d25] hover:text-white": variant === 'primary',
                "bg-[#eff3f4] text-black": variant === 'white',
                "border border-[#b4b4b4] text-[#333333ff] hover:bg-[#eff3f4] hover:text-black": variant === 'white-outline',
                "bg-[#333333ff] text-white hover:bg-[#141414ff]": variant === 'black',
                "bg-[#fffacd] text-[#ffa500] border border-[#ffa500] hover:bg-[#ffa500] hover:text-white": variant === 'edit',
                "bg-[#c81d25] text-white border border-[#c81d25]": variant === 'delete',
                [className!]: className,
            }
        ),
        ...props
    }, children);
}
