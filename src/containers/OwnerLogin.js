import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';


const OwnerLogin = observer(() => {
    const store = useStore();
    
    return (
        <>
            Login
            <br />
            <div>
                <button onClick={()=>store.changeView('signup')}>New Account?</button>
                <button onClick={()=>store.changeView('home')}>Return Home</button>
            </div>
        </>
    )
});

export default OwnerLogin


// //d49425d4-f519-49fb-a0ad-2f012663a000

// "refresh_token": "e5d227e7-6ca8-4d47-a031-bf345391270a",
// "access_token": "CNqflpvULhICAQEYxsb-AiCsk-4FKOHqDTIZAIZ8R2ghZ3aLnh_KUqQA8BKBVXxvvndTTjoaAAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAABBCGQCGfEdo1ghSEgZj22yx1DWtD85HJWUDdwA",

// "access_token": "X8tFSZetdU830IyOFjYO4ReL48ktlyq6",
// "token_type": "Bearer",
// "expires_in": "3600",
// "refresh_token": "lk2bkEuzIdMLYNZG1j_o67m0WS3wbzJe"