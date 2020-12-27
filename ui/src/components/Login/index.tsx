import { useRef } from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { gql, useQuery } from '@apollo/client'
import swal from 'sweetalert2'

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

interface UserValidated {
    id: string
    nickname: string
    admin: boolean
    root: boolean
    active: boolean
}

const VALIDATE_USER = gql`query validateUser($userData: String, $password: String){
  validateUser(userData: $userData password: $password){
    id
    nickname
    admin
    root
    active
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

    function Entry(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log("Entrar")
        //ARREGLAR ESTO
        var dataValidated = useQuery<UserValidated>(VALIDATE_USER, {
            variables: { userdata: inputUser.current.value, password: inputPass.current.value },
        })

        if (dataValidated.data?.nickname != ''){
            //UPDATE THE STATE OF REDUX
            dispath({ type: 'SET_CURRENT_USER', id: dataValidated.data?.id, user: dataValidated.data?.nickname, loggedin: true, admin: dataValidated.data?.admin, root: dataValidated.data?.root })
            console.log(currentUser.id)
            console.log(currentUser.user)

            newWindow()
        }else{
            swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'No existe el usuario',
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