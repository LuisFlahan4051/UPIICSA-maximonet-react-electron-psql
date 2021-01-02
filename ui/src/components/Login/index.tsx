import { useRef } from 'react'
import Login from './Login'
import { gql, useQuery } from '@apollo/client'
import swal from 'sweetalert2'

/* INTEGRATION WITH ELECTRON */
const remote = window.require('electron').remote
const currentWindow = remote.getCurrentWindow()


/* Types needed for Apollo query */
interface User {
    id: string
    nickname: string
    phone: string
    mail: string
    password: string
    admin: boolean
    root: boolean
    active: boolean
}

interface UserData {
    users: User[]
}


const USERS_FROM_SUCURSAL = gql`query USERS_FROM_SUCURSAL($idBranch: Int){
    users(id_branch: $idBranch){
        id
        nickname
        phone
        mail
        password
        admin
        root
        active
    }
}`


/* interface ValidateUser {
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
        active
    }
}` */









function Index( props: {
    setHandlerBlur: any;
    stateCurrentUser: any;
    setStateCurrentUser: any;
}) {

    /* REFERENCES OF INPUTS */
    const inputUser = useRef(document.createElement("input"))
    const inputPass = useRef(document.createElement("input"))
    const inputEntry = useRef(document.createElement("button"))



    /* REDUX STATE */
    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    //const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    
    /*--- for set data we need dispatch hook from react-redux ---*/
    //const dispatch = useDispatch()




    
    
    



    /* APOLLO TRIGER QUERY  */
    /* var [getValidation, { data }] = useLazyQuery<ValidateUser>(VALIDATE_USER, {
        variables: { userData: inputUser.current.value, password: inputPass.current.value},
    }) */
    


    const usersValues = useQuery<UserData>(USERS_FROM_SUCURSAL,{
        variables: {idBranch: 1}
    })
    if (usersValues.loading) return <p>Loading...</p>
    if (usersValues.error) return <p>Error in graph query</p>
    
    //For the select area
    var usersNicks: string[] = []
    usersValues.data && usersValues.data.users.map(User =>{
        return usersNicks.push(User.nickname)
    })

    //For validation
    var usersData: User[] = []

    usersValues.data && usersValues.data.users.map(User => {
        return usersData.push({id: User.id,nickname: User.nickname, phone: User.phone, mail: User.mail, password: User.password, admin: User.admin, root: User.root, active: User.active})
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
        e.preventDefault()
        console.log("Entrar")
        
        //Using useLazyQuery
        /* getValidation()
        console.log(data) */

        if(inputUser.current.value !== "" && inputPass.current.value !== "") {
            
            //Using useLazyQuery
            /* if (data) {
                const validateUser = JSON.parse(JSON.stringify(data))
                console.log(validateUser)
                if (validateUser.validateUser !== null) {

                    props.setStateCurrentUser({
                        id: validateUser.validateUser.id,
                        user: validateUser.validateUser.nickname,
                        loggedin: true,
                        admin: validateUser.validateUser.admin,
                        root: validateUser.validateUser.root,
                        active: validateUser.validateUser.active,
                    })

                    console.log(props.stateCurrentUser)
                    props.setHandlerBlur(false)
                } else {
                    swal.fire({
                        icon: 'error',
                        title: '¡No existe el usuario!',
                        text: 'Verifique sus datos',
                    })
                }
            } else {
                console.log("Intenta de nuevo, no se ejecutó a tiempo la consulta!")
            } */


            //usingValidation Javascript
            var res = usersData.map((User) => { 
                if ((User.nickname === inputUser.current.value && User.password === inputPass.current.value) || (User.phone === inputUser.current.value && User.password === inputPass.current.value) || (User.mail === inputUser.current.value && User.password === inputPass.current.value)){
                    return true
                }
            })

            var aval = () => {
                for (let i = 0; i <= res.length; i++){
                    if(res[i] === true){
                        return true
                    }
                }
            }

            if (aval()){
                usersData.map((User) => {
                    if ((User.nickname === inputUser.current.value) || (User.phone === inputUser.current.value) || (User.mail === inputUser.current.value)){
                        props.setStateCurrentUser({
                            id: User.id,
                            user: User.nickname,
                            loggedin: true,
                            admin: User.admin,
                            root: User.root,
                            active: User.active,
                        })

                        props.setHandlerBlur(false)
                    }
                    return null
                })
                
            }else{
                swal.fire({
                    icon: 'error',
                    title: '¡No existe el usuario!',
                    text: 'Verifique sus datos',
                })
            }

        }else{
            swal.fire({
                icon: 'warning',
                title: '¡Ingrese bien los campos!',
                text: 'Dejó un campo en blanco',
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