import { useRef } from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import swal from 'sweetalert2'

/* INTEGRATION WITH ELECTRON */
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


const USERS_FROM_SUCURSAL = gql`query USERS_FROM_SUCURSAL($idBranch: Int){
    users(id_branch: $idBranch){
        nickname
    }
}`


interface ValidateUser {
    id: string
    nickname: string
    password: string
    admin: boolean
    root: boolean
    active: boolean
}

const VALIDATE_USER = gql`query VALIDATE_USER($userData: String, $password: String){
    validateUser(userData: $userData, password: $password){
        id
        nickname
        password
        admin
        root
    }
}`









function Index() {
    
    /* REFERENCES OF INPUTS */
    const inputUser = useRef(document.createElement("input"))
    const inputPass = useRef(document.createElement("input"))
    const inputEntry = useRef(document.createElement("button"))



    /* REDUX STATE */
    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    /*--- for set data we need dispatch hook from react-redux ---*/
    const dispath = useDispatch()




    
    
    



    /* APOLLO QUERY */
    const [getValidation, { data }] = useLazyQuery<ValidateUser>(VALIDATE_USER, {
        variables: { userData: inputUser.current.value, password: inputPass.current.value},
    })



    const usersValues = useQuery<UserData>(USERS_FROM_SUCURSAL,{
        variables: {idBranch: 1}
    })
    if (usersValues.loading) return <p>Loading...</p>
    if (usersValues.error) return <p>Error in graph query</p>
    
    var usersNicks: string[] = []
    usersValues.data && usersValues.data.users.map(User =>{
        return usersNicks.push(User.nickname)
    })




    

    


    /* PRINCIPAL FUNCTIONS */
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

        getValidation()
        
        if (data) { 
            const validateUser = JSON.parse(JSON.stringify(data))

            if (validateUser.validateUser !== null) {
                //UPDATE THE STATE OF REDUX
                dispath({
                    type: 'SET_CURRENT_USER',
                    id: validateUser.validateUser.id,
                    user: validateUser.validateUser.nickname,
                    loggedin: true,
                    admin: validateUser.validateUser.admin,
                    root: validateUser.validateUser.root,
                })

                newWindow()
            }
        }else{
            console.log("Intenta de nuevo, no se ejecutó a tiempo la consulta!")
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
            cancel={cancel}
            link={link}
            entry={Entry}
            inputUser={inputUser}
            inputPass={inputPass}
            inputEntry={inputEntry}
            />
        </div>
    )
}

export default Index;