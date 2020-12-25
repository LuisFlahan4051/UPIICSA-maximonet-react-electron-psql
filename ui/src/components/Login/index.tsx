import React, { useRef } from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

const { BrowserWindow } = window.require('electron').remote
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()


/* Types needed for Apollo query */
interface User {
    nickname: string
}

interface UserData {
    users: User[]
}

const USERS_FROM_SUCURSAL = gql`query users{
    users{
        nickname
    }
}`

const newWindow =  () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        minWidth: 1000,
        height: 650,
        minHeight: 600,
        icon: 'logo192.png',
        webPreferences: {
            nodeIntegration: true,
        }
    })

    mainWindow.loadURL('http://localhost:3000/');

    mainWindow.webContents.openDevTools()
    currentWindow.close()
}

function Index() {
    const inputUser = useRef(document.createElement("input"))
    const inputPass = useRef(document.createElement("input"))
    const inputEntry = useRef(document.createElement("button"))

    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    console.log(currentUser.root)
    /*--- for set data we need another hook from react-redux ---*/

    const { loading, error, data } = useQuery<UserData>(USERS_FROM_SUCURSAL)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error in graph query</p>
    
    var usersNicks: string[] = []

    data && data.users.map(User =>{
        return usersNicks.push(User.nickname)
    })

    function cancel(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log("Cancelar")
        currentWindow.close()
    }

    function link() {
        console.log("Directo al link")
    }

    function entry(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log("Entrar")
        console.log(inputUser.current.value)
        console.log(inputPass.current.value)
        /* const defaultState = {
            id: '',
            user: '',
            loggedin: false,
            admin: false,
            root: false,
        }
        currentUser_reducer(defaultState, setCurrentUser_action({ id: "1", user: "luisflahan", loggedin: true, admin: true, root: true }))
    
        dispath(setCurrentUser_action({id: "1", user: "luisflahan", loggedin: true, admin: true, root: true })) */

        newWindow()
    }
    
    return (
        <div className="Index-login">
            <Login 
            usersNicks={usersNicks}
            inputUser={inputUser}
            inputPass={inputPass}
            inputEntry={inputEntry}
            cancel={cancel}
            link={link}
            entry={entry}
            />
        </div>
    )
}

export default Index;