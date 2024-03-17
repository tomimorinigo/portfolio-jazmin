import './Skills.css'

export default function Skills(){
    return(
        <div className="skills">
            <div className="programs-section">
                <h3>Programas</h3>
                <ul className="programs-list">
                    <li>
                        <img src="/programs/sketchup.png" alt="Sketchup Logo" />
                        <h4>Sketchup</h4>
                    </li>
                    <li>
                        <img src="/programs/autocad.png" alt="AutoCad Logo" />
                        <h4>AutoCad</h4>
                    </li>
                    <li>
                        <img src="/programs/enscape.png" alt="Enscape Logo" />
                        <h4>Enscape</h4>
                    </li>
                    <li>
                        <img src="/programs/v-ray.png" alt="Vray Logo" />
                        <h4>V-Ray</h4>
                    </li>
                    <li>
                        <img src="/programs/photoshop.png" alt="Photoshop Logo" />
                        <h4>Photoshop</h4>
                    </li>
                    <li>
                        <img src="/programs/illustrator.png" alt="Illustrator Logo" />
                        <h4>Illustrator</h4>
                    </li>
                </ul>
            </div>
            <div className="skills-section">
                <h3>Habilidades</h3>
                <ul className="skills-list">
                    <li>Ingles B1</li>
                    <li>Capacidad de análisis</li>
                    <li>Lectura de planos</li>
                    <li>Especificaciones técnicas</li>
                    <li>Pensamiento critico</li>
                    <li>Armado de legajos técnicos</li>
                    <li>Gestión de proyectos</li>
                    <li>Interiores de locales comerciales y viviendas</li>
                    <li>Marketing</li>
                    <li>Investigacion</li>
                    <li>Visualizacion</li>
                    <li>Atencion al detalle</li>
                    <li>Planificacion del espacio</li>
                    <li>Detalles constructivos</li>
                    <li>Diseño de equipamientos y mobiliarios</li>
                </ul>
            </div>
            
        </div>
    )
}