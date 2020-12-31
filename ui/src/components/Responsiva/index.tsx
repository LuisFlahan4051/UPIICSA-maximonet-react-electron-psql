import { useState } from 'react'
import ControlBar from '../ControlBar/index'
import Responsiva from './Responsiva'
import Login from '../Login/index'

/* INTEGRATION WITH ELECTRON */
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()

function Index() {

    const [handleBlur, setHandlerBlur] = useState(true)
    const [stateCurrentUser, setStateCurrentUser] = useState({
        id: '',
        user: '',
        loggedin: false,
        admin: false,
        root: false,
        active: false,
    })

    function actionPrint() {
        console.log(stateCurrentUser)
    }

    if(stateCurrentUser.root){
        currentWindow.openDevTools()
    }

    if (handleBlur){
        return (
            <div className={'Index-responsiva'}>

                <ControlBar />


                <Responsiva
                    actionPrint={actionPrint}
                    handlerBlur={handleBlur}
                    stateCurrentUser={stateCurrentUser}
                />
                
                <div className="loginBox">
                    <div className="loginBoxFlex">
                        <Login
                            setHandlerBlur={setHandlerBlur}
                            stateCurrentUser={stateCurrentUser}
                            setStateCurrentUser={setStateCurrentUser}
                        />
                    </div>
                </div>

            </div>
        )
    }else{
        return (
            <div className={'Index-responsiva'}>

                <ControlBar />


                <Responsiva
                    actionPrint={actionPrint}
                    handlerBlur={handleBlur}
                    stateCurrentUser={stateCurrentUser}
                />

            </div>
        )
    }
    
}

export default Index;