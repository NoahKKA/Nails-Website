import Carousel from "react-bootstrap/Carousel";
import cPro1 from "../img/cProduct1.jpg";
import cPro2 from "../img/cProduct2.jpg";
import cPro3 from "../img/cProduct3.jpg";

function Products() {
    return (
        <Carousel className=" py-10">
            <Carousel.Item interval={2000} >
                <img 
                className="d-block max-h-[100%] max-w-[100%]" 
                src={cPro1} 
                alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <img
                    className="d-block max-h-[100%] max-w-[100%]"
                    src={cPro2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block max-h-[100%] max-w-[100%]" 
                src={cPro3} 
                alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Products;
