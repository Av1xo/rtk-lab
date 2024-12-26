import { createSlice } from "@reduxjs/toolkit";
import { initPosition } from "../utils";

const initialState = {
    position: initPosition(),
    turn: 'w',
    history: [initPosition()],
    currentMove: 0,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newMove: (state, action) => {
            const newPosition = action.payload.newPosition;
            const newHistory = state.history.slice(0, state.currentMove + 1);

            newHistory.push(newPosition);

            state.history = newHistory;
            state.currentMove = newHistory.length - 1;
            state.position = newPosition;
            state.turn = state.turn === 'w' ? 'b' : 'w';
        },
        undoMove: (state) => {
            if (state.currentMove > 0) {
                state.currentMove -= 1;
                state.position = state.history[state.currentMove];
                state.turn = state.turn === 'w' ? 'b' : 'w';
            }
        },
        redoMove: (state) => {
            if (state.currentMove < state.history.length - 1) {
                state.currentMove += 1;
                state.position = state.history[state.currentMove];
                state.turn = state.turn === 'w' ? 'b' : 'w';
            }
        },
        startGame: (state) => {
            state.position = initPosition();
            state.turn = 'w';
            state.history = [initPosition()];
            state.currentMove = 0;
        },
    },
});

export const { newMove, undoMove, redoMove, startGame } = gameSlice.actions;

export default gameSlice.reducer;
