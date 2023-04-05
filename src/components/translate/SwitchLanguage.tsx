import React from 'react';
import {ArrowsRightLeftIcon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from "react-redux";
import {selectSourceLang, switchLang} from "@/redux/reducers/translateSlice";

const SwitchLanguage = () => {
    const sourceLang = useSelector(selectSourceLang);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (sourceLang !== "auto") {
            dispatch(switchLang())
        }
    }

    return (
        <button className="mx-3" onClick={handleClick}>
            <ArrowsRightLeftIcon className="w-5 h-5 text-accents-5"/>
        </button>
    );
};

export default SwitchLanguage;
