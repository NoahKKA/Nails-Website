import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import InfoCards from "./pages/home-page/InfoCards";
import Products from "./pages/home-page/Products";
import Cal1 from "./componets/Calander";
import "./App.css";

function App() {
    return (
        <div className="App">
            <body>
                <div className="TopBar">
                    <TopBar />
                </div>
                <div className="max-w-7xl mx-auto ">
                    <Cal1 />
                    <MidImgLogo />
                    <InfoCards />
                    <Products />
                </div>
            </body>
        </div>
    );
}

export default App;
