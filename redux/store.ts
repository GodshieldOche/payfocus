import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import modalReducer from "./features/modal"
import authReducer from "./features/auth"
import sessionReducer from "./features/session"



const makeStore = () => configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer,
        session: sessionReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['modal/setModalData'],
        // Ignore these paths in the state
        ignoredPaths: ['modal.modalData.func'],
      },
    }),
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);