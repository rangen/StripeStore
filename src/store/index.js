import React, { createContext, useContext } from 'react';
import { makeAutoObservable, action, observable } from 'mobx';

export default class Store {
    view = 'home' // home signup login

    constructor(){
        makeAutoObservable(this, {
            view:       observable,
            changeView: action
        });
    }

    changeView(newView) {
        if (this.view === newView) return;
        
        this.view = newView;
    }


}

const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (<StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

export const useStore = () => useContext(StoreContext);
