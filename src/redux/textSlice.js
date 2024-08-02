import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    content: 'New Text',
    font: 'Arial',
    size: 16,
    color: '#000000',
    history: [],
    future: [],
};

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.history.push({
                content: state.content,
                font: state.font,
                size: state.size,
                color: state.color,
            });
            state.content = action.payload;
            state.future = [];
        },
        setFont: (state, action) => {
            state.history.push({
                content: state.content,
                font: state.font,
                size: state.size,
                color: state.color,
            });
            state.font = action.payload;
            state.future = [];
        },
        setSize: (state, action) => {
            state.history.push({
                content: state.content,
                font: state.font,
                size: state.size,
                color: state.color,
            });
            state.size = action.payload;
            state.future = [];
        },
        setColor: (state, action) => {
            state.history.push({
                content: state.content,
                font: state.font,
                size: state.size,
                color: state.color,
            });
            state.color = action.payload;
            state.future = [];
        },
        undo: (state) => {
            if (state.history.length > 0) {
                const previousState = state.history.pop();
                state.future.push({
                    content: state.content,
                    font: state.font,
                    size: state.size,
                    color: state.color,
                });
                state.content = previousState.content;
                state.font = previousState.font;
                state.size = previousState.size;
                state.color = previousState.color;
            }
        },
        redo: (state) => {
            if (state.future.length > 0) {
                const nextState = state.future.pop();
                state.history.push({
                    content: state.content,
                    font: state.font,
                    size: state.size,
                    color: state.color,
                });
                state.content = nextState.content;
                state.font = nextState.font;
                state.size = nextState.size;
                state.color = nextState.color;
            }
        },
    },
});

export const { setContent, setFont, setSize, setColor, undo, redo } = textSlice.actions;

export default textSlice.reducer;
