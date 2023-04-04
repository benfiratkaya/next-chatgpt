import React from 'react';
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
    content: string;
}

const Markdown = ({content}: MarkdownProps) => {
    return (
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    );
};

export default Markdown;
