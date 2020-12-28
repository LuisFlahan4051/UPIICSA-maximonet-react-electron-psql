import { useRef } from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import swal from 'sweetalert2'
import { client } from '../../assets/apollo/apolloClient'
import { validate } from 'graphql'
import { nextTick } from 'process'

const { BrowserWindow } = window.require('electron').remote
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()

const newWindow = () => {
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

    mainWindow.loadURL('http://localhost:3000/')

    mainWindow.webContents.openDevTools()
    currentWindow.close()
}

/* Types needed for Apollo query */
interface User {
    id: string
    nickname: string
    password: string
    admin: boolean
    root: boolean
    active: boolean
}

interface UserData {
    users: User[]
}
interface ValidateUser{
    nickname: string 
}

const USERS_FROM_SUCURSAL = gql`query USERS_FROM_SUCURSAL($idBranch: Int){
    users(id_branch: $idBranch){
        nickname
    }
}`

const VALIDATE_USER = gql`query VALIDATE_USER($userData: String, $password: String){
    validateUser(userData: $userData, password: $password){
        nickname
    }
}`


function Index() {
    const inputUser = useRef(document.createElement("input"))
    const inputPass = useRef(document.createElement("input"))
    const inputEntry = useRef(document.createElement("button"))

    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    /*--- for set data we need dispatch hook from react-redux ---*/
    const dispath = useDispatch()




    const usrval = useQuery<ValidateUser>(VALIDATE_USER, {
        variables: { userData: "luisflahan", password: "4051"},
    })
    console.log(usrval.data)
    console.log()
    






    const inputUsers = useQuery<UserData>(USERS_FROM_SUCURSAL,{
        variables: {idBranch: 1}
    })
    if (inputUsers.loading) return <p>Loading...</p>
    if (inputUsers.error) return <p>Error in graph query</p>
    
    var usersNicks: string[] = []
    inputUsers.data && inputUsers.data.users.map(User =>{
        return usersNicks.push(User.nickname)
    })
    console.log(inputUsers)
    console.log(usersNicks)



    

    




    function cancel(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log("Cancelar")
        currentWindow.close()
    }

    function link() {
        console.log("Directo al link")
    }



    function Entry(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log("Entrar")
        console.log()
        //ARREGLAR ESTO
        if (usrval.data !== undefined){
            //UPDATE THE STATE OF REDUX
            /* dispath({ 
                type: 'SET_CURRENT_USER', 
                id: data?.id, 
                user: data?.nickname, 
                loggedin: true, 
                admin: data?.admin, 
                root: data?.root, 
            }) */
            console.log(currentUser.id)
            console.log(currentUser.user)

            //newWindow()
        }else{
            swal.fire({
                icon: 'error',
                title: '¡No existe el usuario!',
                text: 'Verifique sus datos',
            })
        }
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
            entry={Entry}
            />
        </div>
    )
}

export default Index;