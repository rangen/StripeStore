import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const MainContainer = observer(() => {
    const store = useStore();

    return (
        <>
            {store.isAdmin ? "Yes, Admin" : "No, Not Admin"}<br />
            <button onClick={()=>store.isAdmin = !store.isAdmin}>Toggle isAdmin</button>
            <h3>{`The current time is: ${store.time}`}</h3>
        </>
    )
});

export default MainContainer
