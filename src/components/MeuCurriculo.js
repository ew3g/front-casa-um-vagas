import { React } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";

const MeuCurriculo = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AppNavbar />
            <Footer />
        </div>
    );
};

export default MeuCurriculo;