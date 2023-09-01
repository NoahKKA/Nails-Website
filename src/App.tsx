import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalanderPage";
import Error404Page from "./pages/Error404";
import EditPage from "./pages/EditPage";
import ContactPage from "./pages/ContactPage";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/Calendar' element={<CalendarPage/>}/>
                    <Route path='appointments/:id' element={<EditPage/>}/>
                    <Route path='/Contact' element={<ContactPage/>}/>
                    <Route path='*' element={<Error404Page/>}/>
                </Routes>           
            </Router>
        </div>
    );
}

export default App;
