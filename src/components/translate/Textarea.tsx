import React, {useEffect} from 'react';
import axios from "axios";
import debounce from 'lodash.debounce'
import {useDispatch, useSelector} from "react-redux";
import {
    selectSourceLang,
    selectSourceText,
    selectTargetLang,
    setIsLoading,
    setSourceText,
    setTargetText
} from "@/redux/reducers/translateSlice";
import Textarea from "react-textarea-autosize";

const TextArea = () => {
    const sourceText = useSelector(selectSourceText);
    const sourceLang = useSelector(selectSourceLang);
    const targetLang = useSelector(selectTargetLang);
    const dispatch = useDispatch();

    const handleInput = debounce((e) => {
        dispatch(setSourceText(e.target.value));
    }, 1000);

    useEffect(() => {
        if (sourceLang === targetLang) return;

        if (sourceText === "") {
            dispatch(setTargetText(""))
        }
        else {
            dispatch(setIsLoading(true));
            axios.post('/api/translate', {
                text: sourceText,
                sourceLang,
                targetLang
            }).then(res => {
                dispatch(setTargetText(res.data.data.text))
                dispatch(setIsLoading(false));
                console.log("test!")
            })
        }
    }, [sourceText, sourceLang, targetLang, dispatch]);

    return (
        <Textarea
            placeholder={'Type your text here...'}
            className="px-4 py-3 bg-accents-1 focus:outline-none w-full min-h-[120px] text-white rounded-bl-lg resize-none px-5 py-3"
            onInput={handleInput}
        />
    );
};

export default TextArea;
