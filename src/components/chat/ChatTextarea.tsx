import React, {useEffect, useRef, useState} from 'react';
import Textarea from "react-textarea-autosize";

const ChatTextarea = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState('');
    useEffect(() => {
        if (textAreaRef.current === null) return;
        textAreaRef.current.focus();
    }, []);

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setValue('');
        }
    }

    return (
        <Textarea
            ref={textAreaRef}
            rows={1}
            name="comment"
            id="comment"
            className="px-4 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none"
            placeholder="Type your message here..."
            defaultValue={''}
            value={value}
            onKeyDown={handleKeyDown}
            onInput={(e) => setValue(e.currentTarget.value)}
        />
    );
};

export default ChatTextarea;
