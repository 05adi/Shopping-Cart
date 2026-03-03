import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slices/CartSlice';

// 1. Function to load state from sessionStorage
const loadFromSessionStorage = () => {
    try{
        const serializedState = sessionStorage.getItem("cart");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } 
    catch (e){
        console.warn("Could not load state from session storage", e);
        return undefined;
    }
};

// 2. Function to save state to sessionStorage
const saveToSessionStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem("cart", serializedState);
    } 
    catch (e){
        console.warn("Could not save state to session storage", e);
    }
};

// 3. Initialize preloadedState with session data
const preloadedState = {
    cart: loadFromSessionStorage() || [], 
};

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    },
    preloadedState,
});

// 4. Subscribe to store changes to update sessionStorage
store.subscribe(() => {
    saveToSessionStorage(store.getState().cart);
});