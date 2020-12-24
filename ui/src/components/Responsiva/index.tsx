import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import Responsiva from './Responsiva'

function Index() {

    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    console.log(currentUser.root)

    return (
        <div className="Index-responsiva">
            <Responsiva />
        </div>
    );
}

export default Index;