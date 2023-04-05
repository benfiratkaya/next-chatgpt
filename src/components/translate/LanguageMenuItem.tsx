import React from 'react';
import {classNames} from "@/utils/classNames";

type LanguageMenuItemProps = {
    children: React.ReactNode;
    active: boolean;
    onClick: any;
}

const LanguageMenuItem = ({children, active, onClick}: LanguageMenuItemProps) => {
    return (
        <div
            className={classNames(
                "w-full px-3 py-2 cursor-pointer text-sm",
                active ? "bg-accents-3" : "hover:bg-accents-3"
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default LanguageMenuItem;
