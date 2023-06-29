//Imports
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Gel from "../img/GelNail.jpg";
import Acr from "../img/acrylicNail.jpg";

//Function
function InfoCards() {
    return (
        <CardGroup className="max-w-1">
            <Card className="max-w-1" >
                <img className="mx-auto max-w-1" src={Gel} alt="Logo" />
                <Card.Body>
                    <Card.Title className="mx-auto">Gel Nails</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush mx-auto">
                    <ListGroup.Item>
                      glossy and durable finish
                    </ListGroup.Item>
                    <ListGroup.Item>
                        lasting longer than nail polish
                    </ListGroup.Item>
                    <ListGroup.Item>$1,000,000</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#Calender">Schedule</Card.Link>
                </Card.Body>
            </Card>
            <Card className="max-w-1" >
                <img className="mx-auto max-w-1" src={Acr} alt="Logo" />
                <Card.Body>
                    <Card.Title className="mx-auto">Gel Nails</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush mx-auto">
                    <ListGroup.Item>durability and strength</ListGroup.Item>
                    <ListGroup.Item>customizable and versatile</ListGroup.Item>
                    <ListGroup.Item>$1,000,000</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#Calender">Schedule</Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

//Export
export default InfoCards;
