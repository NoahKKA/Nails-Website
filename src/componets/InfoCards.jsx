import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Gel from "../assets/images/GelNail.jpg";
import Acr from "../assets/images/acrylicNail.jpg";

function InfoCards() {
    return (
        <CardGroup className="max-w-1  py-5 ">
            <Card className="max-w-1 mx-auto">
                <img className="mx-auto max-w-1" src={Gel} alt="Logo" />
                <Card.Body>
                    <Card.Title className="mx-auto">Gel Nails</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush mx-auto">
                    <ListGroup.Item>glossy and durable finish</ListGroup.Item>
                    <ListGroup.Item>
                        lasting longer than nail polish
                    </ListGroup.Item>
                    <ListGroup.Item>$1,000,000</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/Calendar">Schedule</Card.Link>
                </Card.Body>
            </Card>
            <Card className="max-w-1">
                <img className="mx-auto max-w-1" src={Acr} alt="Logo" />
                <Card.Body>
                    <Card.Title className="mx-auto">Acrylic</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush mx-auto">
                    <ListGroup.Item>durability and strength</ListGroup.Item>
                    <ListGroup.Item>customizable and versatile</ListGroup.Item>
                    <ListGroup.Item>$1,000,000</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/Calendar">Schedule</Card.Link>
                </Card.Body>
            </Card>

            <Card className="max-w-1">
                <img className="mx-auto max-w-1" src={Gel} alt="Logo" />
                <Card.Body>
                    <Card.Title className="mx-auto">Gel Nails</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush mx-auto">
                    <ListGroup.Item>glossy and durable finish</ListGroup.Item>
                    <ListGroup.Item>
                        lasting longer than nail polish
                    </ListGroup.Item>
                    <ListGroup.Item>$1,000,000</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/Calendar">Schedule</Card.Link>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default InfoCards;
