import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
const ListaPaletas = ({ borrar, listaColores }) => {

  return (
    <CardGroup className="row d-flex justify-content-around py-2 ">
      {
      listaColores.map((color,position) => (
        <ListGroup.Item key={position} className="col-8 col-sm-5 col-md-3 col-lg-2 m-3 ">
          <Card className="p-3">
            <Card.Title>{color}</Card.Title>

            <Card.Body className="bg-card row d-flex justify-content-center">
              <div style={{backgroundColor:color}} className="col-lg-12 col-sm-12 col-12 paleta"></div>
            </Card.Body>

            <div className="d-flex justify-content-end my-2">
              <button
                className="btn btn-danger"
                type="submit"
                onClick={()=>borrar(color)}
              >
                Borrar
              </button>
            </div>
          </Card>
        </ListGroup.Item>
      ))}
    </CardGroup>
  );
};

export default ListaPaletas;
