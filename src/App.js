import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import InfoCards from "./pages/home-page/InfoCards";
import Products from "./pages/home-page/Products";
import Footer from "./pages/home-page/Footer";
import Cal1 from "./componets/Calander";
import "./App.css";

function App() {
    return (
        <div className="App">
            <body className="bg-rose-500">
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

export default App;
