import React from 'react';
import {UserCircleIcon} from "@heroicons/react/24/solid";
import Markdown from "@/components/chat/Markdown";

type UserMessageProps = {
    message: string;
}

const UserMessage = ({message}: UserMessageProps) => {
    return (
        <div className="bg-accents-0 text-white">
            <div className="max-w-4xl w-full mx-auto">
                <div className="flex gap-4 px-3 lg:px-0 py-4">
                    <UserCircleIcon className="h-8 w-8 text-gray-400"/>
                    <div className="prose prose-invert">
                        <Markdown content={message} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMessage;
