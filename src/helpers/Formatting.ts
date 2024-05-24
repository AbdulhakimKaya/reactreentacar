import {Children} from "react";

export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
};

// export const Each = ({render, of}) =>
//     Children.toArray(of.map((item, index) => render(item, index)))