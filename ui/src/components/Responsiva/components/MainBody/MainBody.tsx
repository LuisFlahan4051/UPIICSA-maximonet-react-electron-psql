import './MainBody.scss'

function MainBody() {



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
                        <input type="checkbox" />
                    </div>

                    <div className="copy__section__display">
                        <div className="copy__section">
                            <div className="copy__content-topLeft input-card">
                                <input type="text" />
                                <p>Copias B/N</p>
                            </div>
                            <div className="copy__content-topRight input-card">
                                <input type="text" />
                                <p>Copias Color</p>
                            </div>
                            <div className="copy__content-bottomLeft input-card">
                                <input type="text" />
                                <p>Impresiones B/N</p>
                            </div>
                            <div className="copy__content-bottomRight input-card">
                                <input type="text" />
                                <p>Impresiones Color</p>
                            </div>
                        </div>

                        <div className="copy__content-paper input-card">
                            <input type="text" />
                            <p>Papel</p>
                        </div>
                    </div>


                </div>





                {/* -----------------Observations-------------------- */}
                <div className="observations main-card">
                    <h2>Observaciones</h2>
                    <div className="observations__content input-card">
                        <h3>Detalle</h3>
                        <h3>Monto</h3>
                        <div>
                            <ul>
                                <li>
                                    <input type="text" />
                                    <label>$</label>
                                    <input type="number" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button>+</button>
                </div>







                {/* --------------------REPORTS------------------------ */}
                <div className="btnsArea">
                    <input type="checkbox" />
                    <label>Gadgets y dispositivos verificados.</label>
                    <button>Reportar dispositivos faltantes respcto al turno anterior</button>
                    <button>¿Escasea algún producto?</button>
                </div>
            </div>
            



            <div className="body__section-3">



                {/* -------------------INITIAL COUNT---------------------- */}
                <div className="initialCount main-card">
                    <div className="initialCount__content input-card">
                        <label>$</label>
                        <input type="number"/>
                        <p>Caja Inicial</p>
                    </div>
                </div>



                {/* ------------------------ARQUEO--------------------------- */}
                <div className="arqueo main-card">
                    <h2>Arqueo</h2>
                    <div className="arqueo__section-inventory">
                        <div>
                            <ul>
                                <li>
                                    <label>$0.5</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$1</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$2</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$5</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$10</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$20</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label>$20</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$50</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$100</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$200</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$500</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                                <li>
                                    <label>$1000</label><div className="arqueo__content input-card"><input type="number"/></div>
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* -----------------------COUNT--------------------------- */}
                    <div className="aqueo__section-count">
                        <div>
                            <div><p>Efectivo:</p><p>$0</p></div>
                            <p>Observaciones:</p>
                            <p>Total:</p>
                        </div>
                        <div>
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
                        <div>
                            <p>Copias:</p>
                            <p>Productos:</p>
                            <p>Recaudación:</p>
                            <p>Total:</p>
                        </div>
                        <div>
                            <p>$0</p>
                            <p>$0</p>
                            <p>$0</p>
                            <div><p>$0</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainBody;