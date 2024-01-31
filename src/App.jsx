import { Container } from "react-bootstrap";
import "./App.css";
import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="py-3 text-light bghGradient">
        <h1 className="text-center display-3">Paletas de COLORES!</h1>
      </header>
      <Container className="mainContainer">
        <Cabecera ></Cabecera>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
