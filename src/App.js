import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import InfoCards from "./pages/home-page/InfoCards";
import Products from "./pages/home-page/Products";
import Footer from "./componets/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <body>
                <div className="TopBar">
                    <TopBar />
                </div>
                <div className="max-w-7xl mx-auto ">
                    <MidImgLogo />
                    <InfoCards />
                    <Products />
                    
                </div>
                <Footer />
            </body>
        </div>
    );
}


export default App