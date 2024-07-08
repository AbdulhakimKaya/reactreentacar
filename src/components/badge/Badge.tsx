import React from 'react';
import classNames from "classnames";


interface BadgeProps {
    isAvailable: number | undefined,
    variant: string | undefined,
}

const Badge: React.FC<BadgeProps> = (props) => {
    const {isAvailable, variant} = props

    return (
        <div className="relative">
            <div
                className={
                    classNames(
                        "text-sm text-gray-50 rounded-full z-30",
                        {
                            "bg-[#00ba7c]": isAvailable === 0,
                            "bg-[#c81d25]": isAvailable === 1,
                            "bg-[#5B74E2]": isAvailable === 2,
                            "bg-[#D7895B]": isAvailable === 3,
                            "absolute -top-4 h-6 flex items-center left-4 px-6": variant === "list",
                            "px-5": variant === "detail",
                        }
                    )
                }
            >
                <span className="font-semibold">
                    {
                        isAvailable === 0 ? "Müsait" : isAvailable === 1 ? "Kiralandı" : isAvailable === 2 ? "Bakımda" : isAvailable === 3 ? "Rezerve edildi" : ""
                    }
                </span>
            </div>
        </div>
    );
};

export default Badge;