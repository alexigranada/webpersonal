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
import { MdVerifiedUser } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { GiFlatHammer } from "react-icons/gi";

function AboutPage() {

    return(
        <>
        <div className="about">
             <div>
                <h1>Arturo A. Granada G.</h1>
                <p>Hola bienvenido a mi sitio web👋, mi nombre es Arturo y soy Ingeniero Topográfico de la Universidad del Valle. Trabajo con la gestión de datos geoespaciales: Captura, Almacenamiento y Análisis de variables ambientales y antrópicas. Me apasiona el mundo de la programación y el desarrollo web, que en conjunto con el uso de técnicas y metodologías Geomáticas permiten la visualización y presentación de información y modelos geoespaciales. 🌎</p>
                {/** Geoportales en la web para la visualización de información geoespacial */}
            </div>
        </div>

        <div className='about_grid'>
            <div className='about_menu'>
                <ul>
                    <li className='boton'><FaUserShield /> Perfil</li>
                    <li className='boton'><GiFlatHammer /> Habilidades</li>
                    <li className='boton'><TbApps /> Mis Proyectos</li>
                    <li className='boton'><PiCubeFocusBold /> Investigación</li>
                    <li className='boton'><MdVerifiedUser /> Referencias</li>
                </ul>
            </div>

            <div className='about_pages'>
                <div className="about_perfil">
                    <div className='portada'>
                    <img src={Perfil} className='perfil' alt='A. Granada'></img>
                    </div>
                    <div className='contenedor'>
                        <ul className='redes'>
                            <li><FaUniversity /> CvLAC</li>
                            <li><PiGithubLogoFill /> GitHub</li>
                            <li><LiaLinkedinIn /> LinkedIn</li>
                        </ul>
                    </div> 
                </div>
                    
                <div>
                    <ul className='contacto'>
                        <li className='card'> 📩 arturo.granada@correounivalle.edu.co</li> {/**📫 📨*/ }
                        <li className='card'> 📱 +57 301 4230342</li>
                    </ul>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default AboutPage;