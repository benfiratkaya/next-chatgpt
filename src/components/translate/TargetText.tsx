import React from 'react';
import {useSelector} from "react-redux";
import {selectIsLoading, selectTargetText} from "@/redux/reducers/translateSlice";
import {DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Text = ({text, isLoading}) => {
    if (text !== "") {
        return (
            <div>
                {text}
                {isLoading && "..."}
            </div>
        )
    }
    if (text === "" || isLoading) {
        return (
            <div className="text-gray-400">
                {isLoading ? "Translating..." : "Translation"}
            </div>
        )
    }
}

const TargetText = () => {
    const targetText = useSelector(selectTargetText);
    const isLoading = useSelector(selectIsLoading);
    const handleCopy = () => {
        console.log("copied")
    }

    return (
        <div className="flex flex-col justify-between px-4 py-3 bg-accents-1 block w-full text-white rounded-br-lg px-5 py-3">
            <Text text={targetText} isLoading={isLoading} />

            <div className="flex justify-end gap-3">
                <CopyToClipboard text={targetText} onCopy={handleCopy}>
                    <DocumentDuplicateIcon className="text-gray-400 hover:text-white transition w-6 h-6 cursor-pointer" />
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default TargetText;
