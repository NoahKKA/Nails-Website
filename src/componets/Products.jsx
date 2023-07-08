import Carousel from "react-bootstrap/Carousel";
import cPro1 from "../assets/images/img.png";
import cPro2 from "../assets/images/Untitled-7.png";
import cPro3 from "../assets/images/IMG_5.png";

function Products() {
    return (
        
        <Carousel className=" my-20">
            <Carousel.Item interval={2000} >
                <img 
                className="d-block max-h-[100%] max-w-[100%]" 
                src={cPro1} 
                alt="First slide" /> 
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <img
                    className="d-block max-h-[100%] max-w-[100%]"
                    src={cPro2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block max-h-[100%] max-w-[100%]" 
                src={cPro3} 
                alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Products;
