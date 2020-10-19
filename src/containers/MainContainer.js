import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import HomeView from './HomeView';
import OwnerSignup from './OwnerSignup';
import OwnerLogin from './OwnerLogin';


const MainContainer = observer(() => {
    const store = useStore();

    return (
        <>
            {store.view === 'home' && <HomeView />}
            {store.view === 'signup' && <OwnerSignup />}
            {store.view === 'login' && <OwnerLogin />}
        </>
    )
});

export default MainContainer;
