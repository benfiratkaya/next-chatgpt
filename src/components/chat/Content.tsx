import React from 'react';
import UserMessage from "@/components/chat/UserMessage";
import SystemMessage from "@/components/chat/SystemMessage";
import NoSSR from "@/components/NoSSR";
import ScrollToBottom from "react-scroll-to-bottom";

const Content = () => {
    const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
    return (
        <div className="relative flex-1 h-full">
            <NoSSR>
                <ScrollToBottom
                    initialScrollBehavior="auto"
                    followButtonClassName="scroll-to-last-message"
                    className="!absolute top-0 flex flex-col w-full h-full overflow-x-hidden overflow-y-auto"
                >
                    <UserMessage message={markdown} />
                    <SystemMessage>Deneme11</SystemMessage>
                    <UserMessage message="Deneme22" />
                    <UserMessage message="Deneme22" />
                    <UserMessage message="Deneme22" />
                    <UserMessage message="Deneme22" />
                    <UserMessage message="Deneme22" />
                    <UserMessage message="Deneme22" />
                    <SystemMessage>Deneme</SystemMessage>
                    <SystemMessage>Deneme</SystemMessage>
                    <SystemMessage>Deneme</SystemMessage>
                </ScrollToBottom>
            </NoSSR>
        </div>
    );
};

export default Content;
