function AboutPage() {
    return(
        <>
        <div className="center">
            <div className="about">
                <h2>Arturo A. Granada G.</h2>
                <p>Hola bienvenido a mi sitio web, mi nombre es Arturo Granada y soy Ingeniero Topográfico de la Universidad del Valle.
                Trabajo con la gestión de información geoespacial: Captura, almacenamiento y análisis
                Modelación dinámica espacial,  climática, análisis de datos
                Geoportales Web</p>
            </div>
        </div>

        <div className="grid">
        <a className="card">
            <h2>
                MDE <span>-&gt;</span>
            </h2>
            <p>clic para más...</p>
        </a>

        <a className="card">
            <h2>
                GSB-GIS <span>-&gt;</span>
            </h2>
            <p>clic para más...</p>
        </a>

        <a className="card">
            <h2>
                MDE <span>-&gt;</span>
            </h2>
            <p>clic para más...</p>
        </a>

        <a className="card">
            <h2>
                GSB-GIS <span>-&gt;</span>
            </h2>
            <p>clic para más...</p>
        </a>
        </div>
        </>
    )
}

export default AboutPage;