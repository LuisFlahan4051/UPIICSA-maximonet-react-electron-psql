import './ControlBar.scss'
import minimizeButton from '../../assets/media/img/minimizeButton.svg'
import resizeButton from '../../assets/media/img/resizeButton.svg'
import closeButton from '../../assets/media/img/exitButton.svg'


function ControlBar( props:{
    close: any;
    minimize: any;
    maximize: any;
}) {
    return (
        <div className="ControlBar">
            <div className="titleBox">
                MáximoNet
            </div>
            <div className="buttonBox">
                <img className="ctlButtons" src={minimizeButton} onClick={props.minimize} alt="min"/>
                <img className="ctlButtons" src={resizeButton} alt="max" onClick={props.maximize}/>
                <img className="ctlButtons" src={closeButton} onClick={props.close} alt="cls"/>
            </div>
        </div>
    );
}

export default ControlBar;