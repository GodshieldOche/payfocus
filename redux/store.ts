import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import modalReducer from "./features/modal"
import authReducer from "./features/auth"
import sessionReducer from "./features/session"
import registerReducer from "./features/register"



const makeStore = () => configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer,
        register: registerReducer,
        session: sessionReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);