import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import InfoCards from "./pages/home-page/InfoCards";
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
                </div>
            </body>
        </div>
    );
}

export default App; //here
