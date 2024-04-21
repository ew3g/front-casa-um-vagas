import { React, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Mapa from './Mapa';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <AppNavbar />
            {/* <Mapa /> */}
            <Footer />
        </div>
    )

}

export default Home;