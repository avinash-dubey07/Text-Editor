import React from 'react';
import TextEditor from './components/TextEditor';
import Controls from './components/Controls';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <div className="controls-container">
                <Controls />
            </div>
            <div className="editor-container">
                <TextEditor />
            </div>
        </div>
    );
};

export default App;
