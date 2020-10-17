import React, { createContext, useContext } from 'react';
import { makeAutoObservable, autorun, runInAction } from 'mobx';

export default class Store {
    isAdmin = true;
    time = new Date();

    constructor(){
        makeAutoObservable(this);
    }
}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);
