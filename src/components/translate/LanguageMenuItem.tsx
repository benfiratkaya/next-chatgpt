import React from 'react';
import {classNames} from "@/utils/classNames";

type LanguageMenuItemProps = {
    children: React.ReactNode;
    active: boolean;
    onChange: any;
}

const LanguageMenuItem = ({children, active, onChange}: LanguageMenuItemProps) => {
    return (
        <div
            className={classNames(
                "w-full px-3 py-2 cursor-pointer",
                active ? "bg-accents-3" : "hover:bg-accents-3"
            )}
            onChange={onChange}
        >
            {children}
        </div>
    );
};

export default LanguageMenuItem;
