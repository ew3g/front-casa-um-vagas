import { React } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";

const Vagas = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AppNavbar />
            <Footer />
        </div>
    );
};

export default Vagas;