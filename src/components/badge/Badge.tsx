import React from 'react';
import classNames from "classnames";


interface BadgeProps {
    isAvailable: number,
}

const Badge: React.FC<BadgeProps> = (props) => {
    const {isAvailable} = props

    return (
        <div className="relative">
            <div
                className={
                    classNames(
                        "absolute -top-4 h-6 flex items-center left-4 px-6 text-sm text-gray-50 rounded-full z-10",
                        {
                            "bg-[#c81d25]": isAvailable === 0,
                            "bg-[#00ba7c]": isAvailable === 1,
                        }
                    )
                }
            >
                <span className="font-semibold">
                    {
                        isAvailable === 1 ? "Müsait" : isAvailable === 0 ? "Müsait Değil" : ""
                    }
                </span>
            </div>
        </div>
    );
};

export default Badge;