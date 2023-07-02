import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalanderPage";
import Error404Page from "./pages/Error404";
import SchedulePage from "./pages/SchedulePage";
import EditPage from "./pages/EditPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/Calendar' element={<CalendarPage/>}/>
                    <Route path='/Schedule' element={<SchedulePage/>}/>
                    <Route path='appointments/:id' element={<EditPage/>}/>
                    <Route path='*' element={<Error404Page/>}/>
                </Routes>           
            </Router>
        </div>
    );
}

export default App;
