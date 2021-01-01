import './OptionsBar.scss'
import print from '../../../../assets/media/img/impresora.svg'
import save from '../../../../assets/media/img/Guardado.svg'
import tools from '../../../../assets/media/img/Herramientas.svg'

import paper from '../../../../assets/media/img/ManojoHojas.svg'
import products from '../../../../assets/media/img/Cola.svg'
import articles from '../../../../assets/media/img/Limpieza.svg'
import devices from '../../../../assets/media/img/Pantalla.svg'

function OptionsBar(props:{
    actionPrint: any;
    stateCurrentUser: any;
    devTools: any;
}) {
    if (props.stateCurrentUser.admin || props.stateCurrentUser.root){
        return (
            <nav className="options">
                <div className="options__mainBtns-section">
                    <button className="printBtn generalBtn"><img src={print} alt="Imprimir" onClick={props.actionPrint} /></button>
                    <button className="saveBtn  generalBtn"><img src={save} alt="Guarda" /></button>
                    <button className="adminBtn generalBtn"><img src={tools} alt="Administrador" onClick={props.devTools}/></button>
                </div>
                <div className="options__controlBtns-section">
                    <button className="paperBtn    generalBtn"><img src={paper} alt="Control de Copias" /></button>
                    <button className="productsBtn generalBtn"><img src={products} alt="Control de Productos" /></button>
                    <button className="articlesBtn generalBtn"><img src={articles} alt="Control de Artículos" /></button>
                    <button className="devicesBtn  generalBtn"><img src={devices} alt="Control de Dispositivos" /></button>
                </div>
            </nav>
        )
    }else{
        return (
            <nav className="options">
                <div className="options__mainBtns-section">
                    <button className="printBtn generalBtn"><img src={print} alt="Imprimir" onClick={props.actionPrint} /></button>
                    <button className="saveBtn  generalBtn"><img src={save} alt="Guarda" /></button>
                </div>
                <div className="options__controlBtns-section">
                    <button className="paperBtn    generalBtn"><img src={paper} alt="Control de Copias" /></button>
                    <button className="productsBtn generalBtn"><img src={products} alt="Control de Productos" /></button>
                    <button className="articlesBtn generalBtn"><img src={articles} alt="Control de Artículos" /></button>
                    <button className="devicesBtn  generalBtn"><img src={devices} alt="Control de Dispositivos" /></button>
                </div>
            </nav>
        )
    }
}

export default OptionsBar;