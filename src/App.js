import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalanderPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
                <Routes>
                    <Route path='/Calendar' element={<CalendarPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
