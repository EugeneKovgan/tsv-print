import "./App.scss";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Price from "./components/Price/Price";
import Comments from "./components/Comments/Comments";
import Articles from "./components/Articles/Articles";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contacts" element={<Contacts />} />
                    {/* <Route path="*" elenemt={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
