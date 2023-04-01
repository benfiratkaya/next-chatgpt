import React from 'react';
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";

type SystemMessageProps = {
    children: React.ReactNode;
}

const SystemMessage = ({children}: SystemMessageProps) => {
    return (
        <div className="bg-accents-1 text-white">
            <div className="max-w-4xl w-full mx-auto">
                <div className="flex gap-3 px-3 lg:px-0 py-4">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-gray-400"/>
                    <div className="mt-0.5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemMessage;
