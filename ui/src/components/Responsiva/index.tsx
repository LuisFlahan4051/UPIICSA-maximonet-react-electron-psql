import { useState } from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import ControlBar from '../ControlBar/index'
import Responsiva from './Responsiva'
import Login from '../Login/index'

function Index() {
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    
    function actionPrint(){
        console.log(currentUser)
    }

    const [handleBlur, setHandlerBlur] = useState(true)


    if (handleBlur){
        return (
            <div className={'Index-responsiva'}>

                <ControlBar />


                <Responsiva
                    actionPrint={actionPrint}
                    handlerBlur={handleBlur}
                />

                <div className="loginBox">
                    <div className="loginBoxFlex">
                        <Login
                            setHandlerBlur={setHandlerBlur}
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
                />

            </div>
        )
    }
    
}

export default Index;