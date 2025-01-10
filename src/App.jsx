import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgotpass from "./components/Forgotpass";
import Notfound from "./components/Notfound";
import Resetpass from "./components/Resetpass";
function App(){
  return (
    <Router basename="/ATG">
        <div>
            <Routes>
                <Route exact path="/" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/homepage" element={<Homepage />}/>
                <Route path="/forgotpass" element={<Forgotpass />}/>
                <Route path="/reset-password" element={<Resetpass />}/>
                <Route path="*" element={<Notfound />}/>
            </Routes>
        </div>
    </Router>
  );
}
export default App;