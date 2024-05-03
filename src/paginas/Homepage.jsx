import { IoIosArrowForward } from "react-icons/io";

function HomePage() {
    return(
        <>
            <div className="center">
                <h1>G | GEOMÁTICA</h1> 
            </div>

            <div className="grid">
                <a className="card">
                    <div className="card_title">
                        <h2>SIG-BDE</h2>
                        <span><IoIosArrowForward /></span>
                    </div>
                    <p>Sistemas de información Geográfica y Base de Datos Espaciales</p>
                </a>
                <a className="card">
                    <div className="card_title">
                        <h2>AED</h2>
                        <span><IoIosArrowForward /></span>
                    </div>
                    <p>Ánalisis Exploratorio de Datos variables ambientales y climatologicas</p>
                </a>
                
                <a className="card">
                    <div className="card_title">
                        <h2>MDE</h2> 
                        <span><IoIosArrowForward /></span>
                    </div>
                    <p>Modelación Dinámica Espacial</p>
                </a>
          
                <a className="card">
                    <div className="card_title">
                        <h2>GNSS </h2>
                        <span><IoIosArrowForward /></span>
                    </div>
                    <p>Levantamiento de información por Sistema Satelital de Navegación Global y topográfia convencional</p>
                </a>
               
            </div>
        </>
    )
}

export default HomePage;