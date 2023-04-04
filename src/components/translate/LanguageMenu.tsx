import React, {useState} from 'react';
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {languages} from "@/data/languages";

type LanguageMenuProps = {
    active: string;
    children: React.ReactNode;
}

const LanguageMenu = ({children, active}: LanguageMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div>
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                <span className="font-medium">
                    {languages.find(k => k.code === active).name}
                </span>
                    <span>
                    <ChevronDownIcon className="w-4 h-4 text-accents-5 ml-2"/>
                </span>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-12 left-0 w-full bg-accents-2 border-b border-accents-3">
                    <div className="border-b border-accents-3">
                        <input
                            placeholder="Search languages"
                            className="w-full px-4 py-2 text-accents-5 bg-accents-2 outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-6">
                        {children}
                    </div>
                </div>
            )}</>
    );
};

export default LanguageMenu;
