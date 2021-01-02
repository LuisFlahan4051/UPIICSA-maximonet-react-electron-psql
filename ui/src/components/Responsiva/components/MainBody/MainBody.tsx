import './MainBody.scss'

function MainBody(props: {
    handlerPaperCheck: any;
    setHandlerPaperCheck: any;
}) {



    return (
        <div className="body">


            {/* ---------------PRODUCTS----------------- */}
            <div className="body__section-1">
                <div className="products main-card">
                    <h2>Productos</h2>

                    <div className="products__content-sold input-card">
                        <div className="products__subtitle__box">
                            <h3 className="products__subtitle-2">Vendidos</h3>
                        </div>
                        <div className="products__sold">
                            <div className="sold__item">
                                <p className="sold__item__name">item</p>
                                <p className="sold__item__value-2">0</p>
                            </div>
                        </div>
                    </div>

                    <div className="products__content-inventory input-card">
                        <div className="products__subtitle__box">
                            <h3 className="products__subtitle-1">Recibidos</h3>
                            <h3 className="products__subtitle-2">Entregados</h3>
                        </div>
                        <div className="products__inventory">
                            <div className="inventory__item">
                                <p className="inventory__item__name">item</p>
                                <input className="inventory__item__value-1" type="text" placeholder="0"/>
                                <div className="inventory__item__division"></div>
                                <input className="inventory__item__value-2" type="text" placeholder="0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="body__section-2">
                

                {/* ----------------COPY------------------ */}
                <div className="copy main-card">
                    
                    <h2>Copias</h2>

                    
                    <div className="copy__paper__checkbox">
                        <label>Ingreso de papel</label>
                        <input className={props.handlerPaperCheck ? "input-checkbox-true" : "input-checkbox-false"} type="checkbox" onClick={() => props.setHandlerPaperCheck(!props.handlerPaperCheck)}/>
                    </div>

                    <div className="copy__section__display">
                        <div className="copy__section">
                            <div className="copy__content-topLeft input-card">
                                <input type="text" placeholder="0"/>
                                <p>Copias B/N</p>
                            </div>
                            <div className="copy__content-topRight input-card">
                                <input type="text" placeholder="0"/>
                                <p>Copias Color</p>
                            </div>
                            <div className="copy__content-bottomLeft input-card">
                                <input type="text" placeholder="0"/>
                                <p>Impresiones B/N</p>
                            </div>
                            <div className="copy__content-bottomRight input-card">
                                <input type="text" placeholder="0"/>
                                <p>Impresiones Color</p>
                            </div>
                        </div>

                        <div className="copy__content-paper input-card" style={props.handlerPaperCheck ? {} : { display: 'none' }}>
                            <input type="text" placeholder="0"/>
                            <p>Papel</p>
                        </div>
                    </div>


                </div>





                {/* -----------------Observations-------------------- */}
                <div className="observations main-card">
                    <h2>Observaciones</h2>
                    
                    <div className="observations__content input-card">
                        
                        <div className="observations__display-titles">
                            <h3 className="title-detail">Detalle</h3> 
                            <h3 className="title-value">Monto</h3>
                        </div>
                        
                        <div className="observations__display-observation">
                            
                            <div className="observations__observation">
                                
                                <div className="observation-input">
                                    <input type="text" placeholder="Descripción"/>
                                </div>
                                
                                <div className="observation-input-value">
                                    <label>$</label>
                                    <input type="number" placeholder="0"/>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="observations__display-button">
                        <button>+</button>
                    </div>

                </div>







                {/* --------------------REPORTS------------------------ */}
                <div className="btnsArea">
                    <input type="checkbox" className="btnsArea__checkbox-false"/>
                    <label>Gadgets y dispositivos verificados.</label>
                    <button className="btnReportDevice">Reportar dispositivos faltantes respecto al turno anterior</button>
                    <button className="btnReportProduct">¿Escasea algún producto?</button>
                </div>
            </div>
            



            <div className="body__section-3">



                {/* -------------------INITIAL COUNT---------------------- */}
                <div className="initialCount main-card">
                    <div className="initialCount__content input-card">
                        <div className="initialCount__input">
                            <label>$</label>
                            <input type="number" />
                        </div>
                        <p>Caja Inicial</p>
                    </div>
                </div>



                {/* ------------------------ARQUEO--------------------------- */}
                <div className="arqueo main-card">

                    <h2>Arqueo</h2>
                    
                    <div className="arqueo__section-inventory">
                        <div className="inventory__display-inputs coins">
                            
                            <div className="inventory__input">
                                <label>$0.5</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$1</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$2</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$5</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$10</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$20</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            
                        </div>

                        <div className="inventory__display-inputs bills">
                            
                            <div className="inventory__input">
                                <label>$20</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$50</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$100</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$200</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$500</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                            <div className="inventory__input">
                                <label>$1000</label><div className="arqueo__value input-card"><input type="number"/></div>
                            </div>
                        
                        </div>
                    </div>



                    {/* -----------------------COUNT--------------------------- */}
                    <div className="arqueo__section-count">

                        <div className="count__leftDisplay">
                            <div><p>Efectivo:</p><p>$0</p></div>
                            <p>Observaciones:</p>
                            <p>Total:</p>
                        </div>
                        <div className="count__rightDisplay">
                            <div><p>Sobre:</p><p>$0</p></div>
                            <p>$0</p>
                            <p>$0</p>
                        </div>
                    </div>
                </div>



                {/* --------------------------MAIN COUNT------------------------------- */}
                <div className="mainCount resalted-card">
                    <h2>Contadores</h2>
                    <div className="mainCount__content input-card">
                        <div className="mainCount__labels-display">
                            <p>Copias:</p>
                            <p>Productos:</p>
                            <p>Recaudación:</p>
                            <div className="labelResalted">Total:</div>
                        </div>
                        <div className="mainCount__values-display">
                            <p>$0</p>
                            <p>$0</p>
                            <p className="valueResalted-2">$0</p>
                            <div className="valueResalted">$0</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainBody;