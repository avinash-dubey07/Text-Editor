import React from 'react';
import { useSelector } from 'react-redux';

const TextEditor = () => {
    const { content, font, size, color } = useSelector((state) => state.text);

    return (
        <div className="text-editor" style={{ fontFamily: font, fontSize: `${size}px`, color }}>
            {content}
        </div>
    );
};

export default TextEditor;
