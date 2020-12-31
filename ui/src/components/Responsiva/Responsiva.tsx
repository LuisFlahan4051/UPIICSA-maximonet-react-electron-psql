import './Responsiva.scss'
import logo from '../../assets/media/img/LogoV3.svg'
import OptionsBar from './components/OptionsBar/OptionsBar'



import MainBody from './components/MainBody/MainBody'

function Responsiva(props:{
    actionPrint: any;
    handlerBlur: any;
    stateCurrentUser: any;
    }) {



    return (
        <div className={props.handlerBlur ? 'ResponsivaBlur' : 'Responsiva'}>

            {/* ----------------OPTIONS--------------- */}
            {/* Se puso hasta arriba para hacer concordar las capas de sombra */}
            
            <OptionsBar 
                actionPrint={props.actionPrint}
                stateCurrentUser={props.stateCurrentUser}
            />


            {/* ---------------HEADER-------------- */}
            <header className="header">
                <img className="header__logo" src={logo} alt="Logo"/>
                <h1 className="header__sucursal">Santa Ana</h1>
                <form className="header__form main-card">
                    <div className="form__usuarios__section">
                        <div className="usuario__content usuario1 input-card">
                            <p className="usuario__value">Usuario 1</p>
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
                            <input className="fecha__date" type="datetime" placeholder="lunes 1 de enero del 2000"/>
                            <p>|</p>
                            <input className="fecha__time" maxLength={5} type="datetime" placeholder="24:00"/>
                        </div>
                        <label className="fecha__label" >Salida:</label>
                        <div className="fecha__content input-card">
                            <input className="fecha__date" type="datetime" placeholder="lunes 1 de enero del 2000"/>
                            <p>|</p>
                            <input className="fecha__time" maxLength={5} type="datetime" placeholder="24:00" />
                        </div>
                    </div>
                </form>
            </header>


            <MainBody />

        </div>
    );
}

export default Responsiva;