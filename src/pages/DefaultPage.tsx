import TopBar from "../componets/TopBar";
import Footer from "../componets/Footer";
import React from "react";

const Default = (props) => {
    return (
        <div>
            <TopBar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Default;
