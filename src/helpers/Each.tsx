import React from "react";

interface EachProps<T> {
    of: T[];
    render: (item: T, index: number) => React.ReactNode;
}

const Each = <T,>({ of, render }: EachProps<T>) => {
    return (
        <>
            {of.map((item, index) => (
                <React.Fragment key={index}>
                    {render(item, index)}
                </React.Fragment>
            ))}
        </>
    );
};

export default Each;
