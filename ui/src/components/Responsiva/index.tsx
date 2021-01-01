import { useState } from 'react'
import ControlBar from '../ControlBar/index'
import Responsiva from './Responsiva'
import Login from '../Login/index'

/* INTEGRATION WITH ELECTRON */
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()






// Independients functions
function getDate() {
    var newDate = new Date()
    var dd = String(newDate.getDate()).padStart(2, '0')
    var mm = String(newDate.getMonth() + 1).padStart(2, '0')
    var yyyy = newDate.getFullYear()

    var today = mm + '/' + dd + '/' + yyyy
    
    return today
}

function getTime() {
    
    function checkTime(i: any) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    var newDate = new Date()
    var h = String(checkTime(newDate.getHours()))
    var m = String(checkTime(newDate.getMinutes()))

    var time = h + ':' + m
    
    return time
}

function devTools() {
    currentWindow.openDevTools()
}








function Index() {


    // --------- INITIAL STATES ----------------
    const [handleBlur, setHandlerBlur] = useState(true)
    const [stateCurrentUser, setStateCurrentUser] = useState({
        id: '',
        user: '',
        loggedin: false,
        admin: false,
        root: false,
        active: false,
    })
    const [handlerPaperCheck, setHandlerPaperCheck] = useState(false)
    const [InDate, setInDate] = useState(getDate())
    const [InTime, setInTime] = useState(getTime())
    const [OutDate, setOutDate] = useState("")

 

    //Hooks funcitions
    function actionPrint() {
        console.log(stateCurrentUser)
    }





    
    if (handleBlur){
        return (
            <div className={'Index-responsiva'}>

                <ControlBar />


                <Responsiva
                    actionPrint={actionPrint}
                    handlerBlur={handleBlur}
                    stateCurrentUser={stateCurrentUser}
                    devTools={devTools}
                    handlerPaperCheck={handlerPaperCheck}
                    setHandlerPaperCheck={setHandlerPaperCheck}
                    getDate={getDate}
                    InDate={InDate}
                    setInDate={setInDate}
                    InTime={InTime}
                    setInTime={setInTime}
                    OutDate={OutDate}
                    setOutDate={setOutDate}
                    getTime={getTime}
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
                    devTools={devTools}
                    handlerPaperCheck={handlerPaperCheck}
                    setHandlerPaperCheck={setHandlerPaperCheck}
                    getDate={getDate}
                    InDate={InDate}
                    setInDate={setInDate}
                    InTime={InTime}
                    setInTime={setInTime}
                    OutDate={OutDate}
                    setOutDate={setOutDate}
                    getTime={getTime}
                />

            </div>
        )
    }
    
}

export default Index;