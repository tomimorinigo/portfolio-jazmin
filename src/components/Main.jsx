import "./Main.css";
import Title from "./Title";
import { TypeAnimation } from "react-type-animation";

export default function Main() {
  return (
    <div className="main">
      <Title text="Portfolio"/>
      <main className="portfolio-main">
        <h1>Maia Jazmin Huppi Franco</h1>
        <TypeAnimation
          sequence={[
            500,
            "Diseño de Interiores",
            1000,
            "Renders",
            1000,
            "Modelados 3D",
            1000,
            "Dibujos 2D",
            500,
          ]}
          speed={25}
          wrapper="h2"
          repeat={Infinity}
        />
      </main>
    </div>
  );
}
