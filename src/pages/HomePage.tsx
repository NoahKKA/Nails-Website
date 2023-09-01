import Default from "./DefaultPage";
import MidImgLogo from "../componets/logoWithBg";
import InfoCards from "../componets/InfoCards";
import Products from "../componets/Products";
import "../App.css"
import React from "react";

export default function HomePage() {
    return (
        <Default className="bg-green-100">
            <div className="bg-green-100">
                <body className="bg-green-100">
                    <MidImgLogo className="bg-green-100" />
                    <div className="max-w-7xl mx-auto">
                        
                        <InfoCards  className="bg-green-100"/>
                        <Products  className="bg-green-100"/>
                    </div>
                </body>
            </div>
        </Default>
    );
}