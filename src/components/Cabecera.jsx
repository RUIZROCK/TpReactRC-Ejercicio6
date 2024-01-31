import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListaPaletas from "./ListaPaletas";

const Cabecera = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("arrayColores")) || [];
  const [listaColores, setListaColores] = useState(coloresLocalStorage);

  useEffect(() => {
    // con useEffect haremos la carga de la lista de tareas en el localStorage
    localStorage.setItem("arrayColores", JSON.stringify(listaColores));
  }, [listaColores]);

  const handleSubmit = (e) => {
    //para que se pueda guardar el state desde el boton a traves del evento submit
    e.preventDefault();

    const mensaje = document.getElementById("mensaje");
    if (!listaColores.includes(color) && !listaColores.includes("")) {
      //operador spread [...array,elemento]
      setListaColores([...listaColores, color]); //realiza el push en el array guardando la ultima tarea agregada
    } else {

      mensaje.textContent = "Error: repite el mismo color / esta esta vacio el campo";
    }

    //limpiar form
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    //trabajamos con splice para poder generar la eliminacion de una tarea x
    const arrayFilter = listaColores.filter(
      (elementoColor) => elementoColor !== nombreColor
    );
    setListaColores(arrayFilter);
  };

  return (
    <section>
      <CardGroup className="py-2">
        <Card>
          <Card.Title className="p-2">Administrar colores</Card.Title>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-around py-3 my-3 bg-card">
                <div
                  style={{ backgroundColor: color }}
                  className="col-lg-3 col-md-4 col-sm-5 col-7 paleta"
                ></div>
                <div className="col-lg-6 col-sm-8 col-7 py-5 ">
                  <div>
                    <input
                      type="text"
                      className="w-100"
                      placeholder="Ingrese un color"
                      onChange={(e) => setColor(e.target.value)}
                      value={color}
                    />
                  </div>
                  <p id="mensaje" className="col-lg-12 col-sm-8 col-12 text-black text-center mt-3"></p>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary" type="submit">
                  Agregar
                </button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr />
      <ListaPaletas
        borrar={borrarColor}
        listaColores={listaColores}
      ></ListaPaletas>
    </section>
  );
};

export default Cabecera;
