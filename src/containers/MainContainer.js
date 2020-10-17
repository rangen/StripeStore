import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const MainContainer = observer(() => {
    const store = useStore();

    return (
        <>
            {store.isAdmin ? "Yes, Admin" : "No, Not Admin"}
            <button onClick={()=>store.isAdmin = !store.isAdmin}>Change Status</button>
        </>
    )
});

export default MainContainer
