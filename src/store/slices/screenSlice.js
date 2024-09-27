// store/slices/screenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    screenSize: undefined,
    isLargeScreen: window.innerWidth > 414,
    isMediumScreen: window.innerWidth >= 768 && window.innerWidth < 1024,
};

const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreenSize: (state, action) => {
        state.screenSize = action.payload;
        },
        setIsLargeScreen: (state, action) => {
        state.isLargeScreen = action.payload;
        },
        setIsMediumScreen: (state, action) => {
        state.isMediumScreen = action.payload;
        },
    },
});

export const {
    setScreenSize,
    setIsLargeScreen,
    setIsMediumScreen,
} = screenSlice.actions;

export default screenSlice.reducer;
