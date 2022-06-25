import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SlotMachine from "./pages/SlotMachine";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/slot-machine" exact element={<SlotMachine/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
