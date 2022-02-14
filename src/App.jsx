import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Price from "./components/Price/Price";
import Comments from "./components/Comments/Comments";
import Articles from "./components/Articles/Articles";
import Error from "./components/Error/Error";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import OverHeader from "./components/OverHeader/OverHeader";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop ";

function App() {
    return (
        <div className="App">
            <Router>
                <OverHeader />
                <Header />

                <Routes>
                    <Route path="/tsv-print" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer className={"footer"} />
            </Router>
        </div>
    );
}

export default App;
