"use client";
import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [appState, setAppState] = useState({});

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
}