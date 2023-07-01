<<<<<<< HEAD
=======
import TopBar from "./pages/home-page/TopBar";
import MidImgLogo from "./pages/home-page/logoWithBg";
import InfoCards from "./pages/home-page/InfoCards";
import Products from "./pages/home-page/Products";
import Cal1 from "./componets/Calander";
>>>>>>> 0de3e0b3ff5b468edc1b72008303c6cb35720bba
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalanderPage";

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
                <Routes>
                    <Route path='/Calendar' element={<CalendarPage/>}/>
                </Routes>
            </Router>
=======
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
>>>>>>> 0de3e0b3ff5b468edc1b72008303c6cb35720bba
        </div>
    );
}

export default App;
