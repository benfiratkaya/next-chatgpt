import React from 'react';
import {useSelector} from "react-redux";
import {selectTargetText} from "@/redux/reducers/translateSlice";
import {DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TargetText = () => {
    const targetText = useSelector(selectTargetText);
    const handleCopy = () => {
        console.log("copied")
    }
    return (
        <div className="flex flex-col justify-between px-4 py-3 bg-accents-1 block w-full text-white rounded-br-lg px-5 py-3">
            <div>
                {targetText}
            </div>
            <div className="flex justify-end gap-3">
                <CopyToClipboard text={targetText} onCopy={handleCopy}>
                    <DocumentDuplicateIcon className="w-6 h-6 cursor-pointer" />
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default TargetText;
