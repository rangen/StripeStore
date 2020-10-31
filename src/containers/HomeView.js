import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';


const HomeView = observer(() => {
    const store = useStore();
    
    return (
        <>
            Stripe Store Home
            <br />
            <div>
                <button onClick={()=>store.changeView('signup')}>New Account?</button>
                <button onClick={()=>store.changeView('login')}>Login</button>
            </div>
        </>
    )
});

export default HomeView
