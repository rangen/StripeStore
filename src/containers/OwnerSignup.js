import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';


const OwnerSignup = observer(() => {
    const store = useStore();
    
    return (
        <>
            Signup
            <br />
            <div>
                <button onClick={()=>store.changeView('home')}>Return Home</button>
                <button onClick={()=>store.changeView('login')}>Login</button>
            </div>
        </>
    )
});

export default OwnerSignup
