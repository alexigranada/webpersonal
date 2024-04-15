
function HomePage() {
    return(
        <>
            <div className="center">
                <h1>GEOMÁTICA</h1> 
            </div>

            <div className="grid">
                <a className="card">
                    <h2>
                        SIG-BDE <span>-&gt;</span>
                    </h2>
                    <p>Sistemas de información Geografica y Base de Datos Espaciales</p>
                </a>

                <a className="card">
                    <h2>
                        AED <span>-&gt;</span>
                    </h2>
                    <p>Ánalisis Exploratorio de Datos variables ambientales y climatologicas</p>
                </a>

                <a className="card">
                    <h2>
                        MDE <span>-&gt;</span>
                    </h2>
                    <p>Modelamento de </p>
                </a>

                <a className="card">
                    <h2>
                        GNSS <span>-&gt;</span>
                    </h2>
                    <p>Levantamiento de información por Sistema Satelital de Navegación Global y topográfia convecional</p>
                </a>
            </div>
        </>
    )
}

export default HomePage;