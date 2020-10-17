import React, { useEffect } from 'react'
import { useStore } from '../store';

const UselessTimerUpdateComponent = () => {
    const store = useStore();

    useEffect(()=> {
        let timer = setInterval(()=> {
            store.time = new Date().toLocaleTimeString();
        }, 1000);
        
        return () => clearInterval(timer);
    });
    
    return (
        <>  
        </>
    )
}

export default UselessTimerUpdateComponent
