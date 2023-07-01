import Default from "./DefaultPage";
import MidImgLogo from "../componets/logoWithBg";
import InfoCards from "../componets/InfoCards";
import Products from "../componets/Products";


export default function HomePage() {
    return (
        <Default>
            <div className="Home">
                <body className="bg-rose-500">
                    <div className="max-w-7xl mx-auto ">
                        <MidImgLogo />
                        <InfoCards />
                        <Products />
                    </div>
                </body>
            </div>
        </Default>
    );
}