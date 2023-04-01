import React from 'react';
import UserMessage from "@/components/UserMessage";
import SystemMessage from "@/components/SystemMessage";

const Content = () => {
    return (
        <div className="relative flex-1 h-full">
            <div className="absolute top-0 flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
                <div className="flex flex-col">
                    <UserMessage>Deneme2</UserMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <UserMessage>Deneme</UserMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <UserMessage>Deneme</UserMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <UserMessage>Deneme</UserMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <UserMessage>Deneme</UserMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <SystemMessage>Deneme</SystemMessage>
                </div>
            </div>
        </div>
    );
};

export default Content;
