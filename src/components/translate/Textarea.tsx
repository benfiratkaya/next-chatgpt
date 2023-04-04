import React, {useEffect} from 'react';
import debounce from 'lodash.debounce'
import {useDispatch, useSelector} from "react-redux";
import {
    selectSourceLang,
    selectSourceText,
    selectTargetLang,
    setSourceText,
    setTargetText
} from "@/redux/reducers/translateSlice";
import Textarea from "react-textarea-autosize";
import axios from "axios";

const TextArea = () => {
    const sourceText = useSelector(selectSourceText);
    const sourceLang = useSelector(selectSourceLang);
    const targetLang = useSelector(selectTargetLang);
    const dispatch = useDispatch();

    const handleInput = debounce((e) => {
        dispatch(setSourceText(e.target.value));
    }, 500);

    useEffect(() => {
        if (sourceText === "") {
            dispatch(setTargetText(""))
        }
        else {
            axios.post('/api/translate', {
                text: sourceText,
                sourceLang,
                targetLang
            }).then(res => {
                dispatch(setTargetText(res.data.text))
            })
        }
    }, [sourceText, sourceLang, targetLang]);

    return (
        <Textarea
            placeholder={'Type your text here...'}
            className="px-4 py-3 bg-accents-1 focus:outline-none w-full min-h-[120px] text-white rounded-bl-lg resize-none px-5 py-3"
            onInput={handleInput}
        />
    );
};

export default TextArea;
