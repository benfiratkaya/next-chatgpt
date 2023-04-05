import React from 'react';
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";
import Markdown from "@/components/chat/Markdown";

type SystemMessageProps = {
    message: string;
}

const SystemMessage = ({message}: SystemMessageProps) => {
    return (
        <div className="bg-accents-1 text-white">
            <div className="max-w-4xl w-full mx-auto">
                <div className="flex gap-4 px-3 lg:px-0 py-4">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-gray-400"/>
                    <div className="prose prose-invert">
                        <Markdown content={message} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemMessage;
