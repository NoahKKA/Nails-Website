//Imports
import Gel from "../assets/images/GelNail.jpg";
import Acr from "../assets/images/acrylicNail.jpg";
import Chr from "../assets/images/CharmNails.jpg";
import Chrome from "../assets/images/chrome nails.jpg";

//Function
function InfoCards() {
    return (
        <div>
            <div className="my-20 text-center">
                <h1>What we do</h1>
            </div>




            <div class="row mb-20">
                    <div class="imgAbt col-md-4" className="mx-auto">
                        <img
                            width="500"
                            height="500"
                            src={Chr}
                            className="rounded-full mx-auto mb-10"
                        />
                    </div>
                <div class="col-md-8 row" className="text-center">
                    <h4 className="mb-10">
                        Charms nails
                    </h4>
                    <p>
                    Charm Nails is a renowned nail salon that has redefined the art of nail design. 
                    With a team of skilled nail artists, they offer a wide range of services, from 
                    intricate hand-painted designs to mesmerizing 3D embellishments. Their commitment
                    to hygiene, quality, and customer satisfaction sets them apart, creating an immersive
                    and transformative experience for each client. Explore their social media platforms
                    to discover a vibrant community of nail art enthusiasts and be inspired by their remarkable 
                    creations. Step into the world of Charm Nails and let your nails become the canvas for your 
                    unique style and self-expression.
                    </p>
                </div>
            </div>

            <div class="row mb-20">
                    <div class="imgAbt col-md-4" className="mx-auto">
                        <img
                            width="500"
                            height="500"
                            src={Gel}
                            className="rounded-full mx-auto mb-10"
                        />
                    </div>
                <div class="col-md-8 row" className="text-center">
                    <h4 className="mb-10"> 
                        Gel nails
                    </h4>
                    <p>
                        Gel nails are a popular type of artificial nails that provide a long-lasting and durable manicure.
                        They are created by applying several layers of gel polish onto the natural nails and then curing them
                        under a UV or LED lamp. The gel polish is formulated to harden and bond to the nail, resulting in a
                        glossy and chip-resistant finish. Gel nails offer numerous benefits, such as increased durability,
                        extended wear time, and a natural-looking appearance. They can be customized with various colors, finishes
                        and nail art designs, making them a versatile option for those seeking a flawless and long-lasting manicure.
                    </p>
                </div>
            </div>

            <div class="row mb-20">
                    <div class="imgAbt col-md-4" className="mx-auto">
                        <img
                            width="500"
                            height="500"
                            src={Chrome}
                            className="rounded-full mx-auto mb-10"
                        />
                    </div>
                <div class="col-md-8 row" className="text-center">
                    <h4 className="mb-10"> 
                        Gel nails
                    </h4>
                    <p>
                        Gel nails are a popular type of artificial nails that provide a long-lasting and durable manicure.
                        They are created by applying several layers of gel polish onto the natural nails and then curing them
                        under a UV or LED lamp. The gel polish is formulated to harden and bond to the nail, resulting in a
                        glossy and chip-resistant finish. Gel nails offer numerous benefits, such as increased durability,
                        extended wear time, and a natural-looking appearance. They can be customized with various colors, finishes
                        and nail art designs, making them a versatile option for those seeking a flawless and long-lasting manicure.
                    </p>
                </div>
            </div>


        </div>
    );
}

//Export
export default InfoCards;
