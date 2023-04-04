import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSourceLang, selectSourceLang} from "@/redux/reducers/translateSlice";
import LanguageMenu from "@/components/translate/LanguageMenu";
import LanguageMenuItem from "@/components/translate/LanguageMenuItem";
import {languages} from "@/data/languages";

const SourceLanguageSelector = () => {
    const sourceLanguage = useSelector(selectSourceLang);
    const dispatch = useDispatch();
    return (
        <LanguageMenu active={"tr"}>
            <LanguageMenuItem
                active={sourceLanguage === "auto"}
                onChange={dispatch(setSourceLang("auto"))}
            >
                Auto Detect
            </LanguageMenuItem>
            <LanguageMenuItem
                active={sourceLanguage === "en"}
                onChange={dispatch(setSourceLang("en"))}
            >
                English
            </LanguageMenuItem>


            {/*languages.map((language) => (
                <LanguageMenuItem
                    key={language.code}
                    active={sourceLanguage === language.code}
                    onChange={dispatch(setSourceLang(language.code))}
                >
                    {language.name}
                </LanguageMenuItem>
            ))*/}
        </LanguageMenu>
    );
};

export default SourceLanguageSelector;
