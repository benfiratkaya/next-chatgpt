import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setSearch} from "@/redux/reducers/translateSlice";
import { useDetectClickOutside } from 'react-detect-click-outside';
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import LanguageList from "@/components/translate/LanguageList";
import {languages} from "@/data/languages";

type LanguageMenuProps = {
    active: string;
    children: React.ReactNode;
}

const LanguageMenu = ({children, active}: LanguageMenuProps) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        dispatch(setSearch(''));
    }
    const handleClose = () => {
        if (!isOpen) return;

        setIsOpen(false);
        dispatch(setSearch(''));
    }

    const ref = useDetectClickOutside({
        onTriggered: handleClose,
    });
    return (
        <div ref={ref}>
            <div className="flex items-center cursor-pointer" onClick={handleToggle}>
                <span className="font-medium">
                    {active === "auto" ? "Auto Detect" : languages.find(k => k.code === active).name}
                </span>
                <ChevronDownIcon className="w-4 h-4 text-accents-5 ml-2"/>
            </div>
            {isOpen && <LanguageList>{children}</LanguageList>}
        </div>
    );
};

export default LanguageMenu;
