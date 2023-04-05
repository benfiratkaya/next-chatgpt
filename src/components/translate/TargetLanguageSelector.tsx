import React from 'react';
import {useSelector} from "react-redux";
import {selectTargetLang, selectSearch} from "@/redux/reducers/translateSlice";
import LanguageMenu from "@/components/translate/LanguageMenu";
import LanguageMenuItem from "@/components/translate/LanguageMenuItem";
import {languages} from "@/data/languages";

const TargetLanguageSelector = () => {
    const search = useSelector(selectSearch);
    const targetLanguage = useSelector(selectTargetLang);

    return (
        <LanguageMenu active={targetLanguage}>
            {
                languages
                    .filter(
                        (language) => language.name.toLowerCase().startsWith(search.toLowerCase())
                    )
                    .map((language) => (
                        <LanguageMenuItem
                            key={language.code}
                            active={targetLanguage === language.code}
                            onClick={() => false}
                        >
                            {language.name}
                        </LanguageMenuItem>
                    ))
            }
        </LanguageMenu>
    );
};

export default TargetLanguageSelector;
