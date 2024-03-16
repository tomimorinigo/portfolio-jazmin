import "./About.css";
import Title from "./Title";

export default function About() {
  return (
    <div className="about">
      <Title text="Sobre mi" />
      <section className="about-section">
        <div className="about-section__text">
            <p>
            Soy estudiante de Diseño de Interiores en la Universidad Provincial de
            Córdoba (UPC), a su vez me capacito de forma autodidacta en áreas de
            mi preferencia. Me considero una persona proactiva, excelente
            compañera de equipo, organizada y responsable.
            </p>
            <p>
            Actualmente, busco un puesto donde consiga desarrollar mis primeros
            pasos en el ámbito laboral y continuar creciendo mi carrera
            profesional.
            </p>
        </div>
        <div className="about-section__image-wrapper">
            <img src="/profile-photo.jpeg" alt="Profile Photo" />
        </div>
      </section>
    </div>
  );
}
