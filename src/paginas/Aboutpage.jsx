import Perfil from '/perfil.jpeg'
import { FaUniversity } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";//Transparente
import { PiGithubLogoFill } from "react-icons/pi";//Oscuro
import { LiaLinkedinIn } from "react-icons/lia";
import { GrTools } from "react-icons/gr";
import { TbApps } from "react-icons/tb";
import { PiCubeFocusBold } from "react-icons/pi";
import { TbHomeRibbon } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function AboutPage() {

    return(
        <>
        <div className="about">
             <div>
                <h1>Arturo A. Granada G.</h1>
                <p>Hola bienvenido a mi sitio web👋, mi nombre es Arturo y soy Ingeniero Topográfico de la Universidad del Valle. Trabajo con la gestión de datos geoespaciales: Captura, Almacenamiento y Análisis de variables ambientales y antrópicas. Mé apasiona el mundo de la programación y el desarrollo web, que en conjunto con el uso de técnicas y metodologías Geomáticas permiten la visualización y presentación de información y modelos geoespaciales. 🌎</p>
                {/** Geoportales en la web para la visualización de información geoespacial */}
            </div>
            <div className="about_perfil">
                <div className='portada'>
                    <img src={Perfil} className='perfil' alt='A. Granada'></img>
                
                    <ul className='redes'>
                        <li><FaUniversity /> CVLac</li>
                        <li><PiGithubLogoFill /> GitHub</li>
                        <li><LiaLinkedinIn /> LinkendIn</li>
                    </ul>
                </div>
                <div>
                    <ul className='contacto'>
                        <li className='card'> 📩 arturo.granada@correounivalle.edu.co</li> {/**📫 📨*/ }
                        <li className='card'> 📱 +57 301 4230342</li>
                    </ul>
                    
                </div>
            </div>
            <div className='portafolio'>
                <ul>
                    <li className='boton'>Inicio <TbHomeRibbon /></li>
                    <li className='boton'>Habilidades <GrTools /></li>
                    <li className='boton'>Mis Proyectos <TbApps /></li>
                    <li className='boton'>Investigación <PiCubeFocusBold /></li>
                    <li className='boton'>Referencias <VscWorkspaceTrusted /></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default AboutPage;