import { useEffect, useState } from 'react';
import './Login.scss';
import logo from '../../assets/media/img/miniLogoMaximoSVG.svg';
import icon from '../../assets/media/img/Down-Row.svg';



function Login(
    props: { 
        usersNicks: React.ReactNodeArray;
        cancel: any;
        link: any;
        entry: any;
        inputUser: any;
        inputPass: any;
        inputEntry: any;
    }) {
    

    const [handleSelect, setHandleSelect] = useState(false)
    const [userValue, setUserValue] = useState("")
    
    useEffect(() => props.inputUser.current?.focus()) // IF DONT USE useEffect could apears an error with querys and renders
    

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
                            ref={props.inputUser}
                            onKeyPress={(e: { key: any; preventDefault: () => void;}) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                props.inputPass.current?.focus()
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
                    ref={props.inputPass}
                    onKeyPress={(e: { key: any; preventDefault: () => void; }) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            props.inputEntry.current?.focus()
                        }
                    }}/>
                    <p className="form__link" onClick={props.link}>Olvide mi contraseña...</p>
                </div>
                
                
                <div className="form__btnArea">
                    <button className="form__btnEntry button"  onClick={props.entry} ref={props.inputEntry}>Entrar</button>
                    <button className="form__btnCancel button" onClick={props.cancel}>Cancelar</button>
                </div>

            </form>
        </div>
    );
}

export default Login;