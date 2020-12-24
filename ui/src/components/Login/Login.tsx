import React, { useState , useRef } from 'react';
import './Login.scss';
import logo from '../../assets/media/img/miniLogoMaximoSVG.svg';
import icon from '../../assets/media/img/Down-Row.svg';
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import setCurrentUser_action from '../../assets/redux/actions/currentUser';
import currentUser_reducer from '../../assets/redux/reducers/currentUser';

const remote = window.require('electron').remote
const { BrowserWindow } = window.require('electron').remote;

interface User {
    id: string
    nickname: string
    admin: boolean
    root: boolean
}

const VALIDATE_USER = gql`query validateUser{
  validateUser(userData: "luisflahan", password: "4051"){
    id
    nickname
    admin
    root
  }
}`

function Login(props: { usersNicks: React.ReactNodeArray; }) {
    
    function newWindow() {
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

        var currentWindow = remote.getCurrentWindow()
        currentWindow.close()
    }
    
    const [handleSelect, setHandleSelect] = useState(false)
    const [userValue, setUserValue] = useState("")

    const inputUser = useRef(document.createElement("input"))
    const inputPass = useRef(document.createElement("input"))
    const inputEntry = useRef(document.createElement("button"))

    inputUser.current.focus()

    function link() {
        console.log("Directo al link")
    }

    function cancel(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log("Cancelar")
        var currentWindow = remote.getCurrentWindow();
        currentWindow.close();
    }
    
    const dispath = useDispatch()

    function entry(e: { preventDefault: () => void;}) {
        e.preventDefault();
        console.log("Entrar")
        console.log(inputUser.current.value)
        console.log(inputPass.current.value)
        const defaultState = {
            id: '',
            user: '',
            loggedin: false,
            admin: false,
            root: false,
        }
        currentUser_reducer(defaultState, setCurrentUser_action({ id: "1", user: "luisflahan", loggedin: true, admin: true, root: true }))

        dispath(setCurrentUser_action({id: "1", user: "luisflahan", loggedin: true, admin: true, root: true }))

        /*const dispath = useDispatch()
        dispath(setCurrentUser_action({ id: "1", user: "luisflahan", loggedin: true, admin: false, root: false }))
        const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
        console.log(currentUser.root)

        const { loading, error, data } = useQuery<User>(VALIDATE_USER)
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error in graph query</p> */

        

        newWindow()
    }

    return (
        <div className="login">
            <img className="login__logo" src={logo} alt="No se pudo encontrar el logo..."/>
            <form className="login__form">
                <div className="form__fild">
                    <label className="form__label" htmlFor="">Usuario:</label>
                    
                    <div className="form__select">
                        <div className="select__area" >
                            <input className="select__input input" type="text"
                            autoFocus
                            onChange={(e: { target: { value: any } }) => setUserValue(e.target.value)}
                            value={userValue}
                            ref={inputUser}
                            onKeyPress={(e: { key: any; preventDefault: () => void;}) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                inputPass.current?.focus()
                            }
                        }}/>
                            <div className="select__icon" onClick={() => setHandleSelect(!handleSelect)}>
                                <img className={handleSelect ? 'icon-motion-right' : 'icon-motion-left'} src={icon} alt="V"/>
                            </div>
                        </div>

                        <div className="options_area" style={handleSelect ? {} : { display:'none' } }>
                            {props.usersNicks.map((user) => 
                                <div 
                                className="select__option" 
                                onClick={() => {
                                    setUserValue(`${user}`)
                                    setHandleSelect(false)
                                }}
                                key={user?.toString()}
                                >
                                {user}
                                </div>
                            )}
                        </div>

                    </div>

                </div>
                
                <div className="form__fild">
                    <label className="form__label" htmlFor="">Contraseña:</label>
                    <input className="form__password input" 
                    type="password" 
                    ref={inputPass}
                    onKeyPress={(e: { key: any; preventDefault: () => void; }) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            inputEntry.current?.focus()
                        }
                    }}/>
                    <p className="form__link" onClick={link}>Olvide mi contraseña...</p>
                </div>
                
                
                <div className="form__btnArea">
                    <button className="form__btnEntry button"  onClick={entry} ref={inputEntry}>Entrar</button>
                    <button className="form__btnCancel button" onClick={cancel}>Cancelar</button>
                </div>

            </form>
        </div>
    );
}

export default Login;