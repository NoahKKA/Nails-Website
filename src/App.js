import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalanderPage";
import Error404Page from "./pages/error404";
import SchedulePage from "./pages/SchedulePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/Calendar' element={<CalendarPage/>}/>
                    <Route path='/Schedule' element={<SchedulePage/>}/>
                    <Route path='*' element={<Error404Page/>}/>
                </Routes>           
            </Router>
        </div>
    );
}

export default App;
