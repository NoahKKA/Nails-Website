import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <body>
                
                <div className="TopBar">
                    <TopBar />
                </div>
                <div className="">
                    <MidImgLogo />
                </div>
            </body>
        </div>
    );
}

export default App;
