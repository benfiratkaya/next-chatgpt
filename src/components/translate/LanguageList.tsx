import React from 'react';
import SearchLanguage from "@/components/translate/SearchLanguage";

const LanguageList = ({children}: ChildrenProps) => {
    return (
        <div className="absolute top-12 left-0 w-full bg-accents-2 border-b border-accents-3">
            <SearchLanguage />
            <div className="grid grid-cols-5">
                {children}
            </div>
        </div>
    );
};

export default LanguageList;
