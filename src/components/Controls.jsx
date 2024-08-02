import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setFont, setSize, setColor, undo, redo } from '../redux/textSlice';

const Controls = () => {
    const dispatch = useDispatch();
    const { font, size, color } = useSelector((state) => state.text);

    const fonts = [
        'Arial', 'Courier New', 'Times New Roman', 'Georgia', 'Verdana', 'Trebuchet MS', 'Comic Sans MS',
        'Impact', 'Lucida Console', 'Tahoma'
    ];

    return (
        <div className="controls">
            <div className="buttons">
                <button onClick={() => dispatch(undo())}>Undo</button>
                <button onClick={() => dispatch(redo())}>Redo</button>
            </div>
            <div className="settings">
                <label>
                    Font:
                    <select value={font} onChange={(e) => dispatch(setFont(e.target.value))}>
                        {fonts.map((fontName) => (
                            <option key={fontName} value={fontName}>
                                {fontName}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Size:
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => dispatch(setSize(Number(e.target.value)))}
                    />
                </label>
                <label>
                    Color:
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => dispatch(setColor(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <button onClick={() => dispatch(setContent(prompt('Enter new text:', 'Add Text')))}>
                    Add Text
                </button>
            </div>
        </div>
    );
};

export default Controls;
