// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import screenReducer from './slices/screenSlice';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        screen: screenReducer,
        // Add other slices here
    },
});

export default store;
