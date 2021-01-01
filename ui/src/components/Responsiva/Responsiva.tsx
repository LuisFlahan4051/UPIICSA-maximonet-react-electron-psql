import './Responsiva.scss'
import logo from '../../assets/media/img/LogoMaximoSVG.svg'
import OptionsBar from './components/OptionsBar/OptionsBar'



import MainBody from './components/MainBody/MainBody'

function Responsiva(props:{
    actionPrint: any;
    handlerBlur: any;
    stateCurrentUser: any;
    devTools: any;
    handlerPaperCheck: any;
    setHandlerPaperCheck: any;
    getDate: any;
    getTime: any;
    InDate:any;
    setInDate: any;
    InTime: any;
    setInTime: any;
    OutDate: any;
    setOutDate: any;
    }) {



    return (
        <div className={props.handlerBlur ? 'ResponsivaBlur' : 'Responsiva'}>

            {/* ----------------OPTIONS--------------- */}
            {/* Se puso hasta arriba para hacer concordar las capas de sombra */}
            
            <OptionsBar 
                actionPrint={props.actionPrint}
                stateCurrentUser={props.stateCurrentUser}
                devTools={props.devTools}
            />


            {/* ---------------HEADER-------------- */}
            <header className="header">
                <img className="header__logo" src={logo} alt="Logo"/>
                <h1 className="header__sucursal">Santa Ana</h1>
                <form className="header__form main-card">
                    <div className="form__usuarios__section">
                        <div className="usuario__content usuario1 input-card">
                            <p className="usuario__value">{props.stateCurrentUser.user}</p>
                            <p className="usuario__title">RESPONSABLE</p>
                        </div>
                        <div className="usuario__content usuario2 input-card">
                            <input className="usuario__value" type="text" placeholder="Usuario 2"/>
                            <p className="usuario__title">RECIBE</p>
                        </div>
                    </div>

                    <div className="form__caja__content input-card">
                        <input className="caja__value" type="text" placeholder="0"/>
                        <p className="caja__title">CAJA</p>
                    </div>

                    <div className="form__fechas__section">
                        <label className="fecha__label">Entrada:</label>
                        <div className="fecha__content input-card">
                            <input 
                            className="fecha__date" 
                            type="datetime" 
                            placeholder={props.getDate()} 
                            onChange={(e: { target: { value: any } }) => props.setInDate(e.target.value)}
                            value={props.InDate}/>
                            
                            <p>|</p>
                            
                            <input className="fecha__time" maxLength={5} type="datetime" 
                            placeholder={props.getTime()}
                            onChange={(e: { target: { value: any } }) => props.setInTime(e.target.value)}
                            value={props.InTime}
                            />
                            
                        </div>
                        <label className="fecha__label" >Salida:</label>
                        <div className="fecha__content input-card">
                            <input 
                            className="fecha__date" 
                            type="datetime" 
                            onChange={(e: { target: { value: any } }) => props.setOutDate(e.target.value)}
                            placeholder={props.getDate()} 
                            value={props.OutDate}/>
                            
                            <p>|</p>
                            
                            <input className="fecha__time" maxLength={5} type="datetime" 
                            placeholder={props.getTime()} />
                        
                        </div>
                    </div>
                </form>
            </header>


            <MainBody 
                handlerPaperCheck={props.handlerPaperCheck}
                setHandlerPaperCheck={props.setHandlerPaperCheck}
            />

        </div>
    );
}

export default Responsiva;