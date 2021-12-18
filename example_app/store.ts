import { configureStore, ThunkAction, Action, Store } from "@reduxjs/toolkit";

import couterReducer from "../features/counter/counterSlice";

export function makeStore() {
    return configureStore({
        reducer: { counter: couterReducer }
    })
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export default store