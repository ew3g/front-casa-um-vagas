import { React, useState } from 'react';
import { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
    const navigate = useNavigate();
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [token, setToken] = useState("");

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("tipoUsuario");
        navigate("/");
    };

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setTipoUsuario(localStorage.getItem("tipoUsuario"));
    });

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <LinkContainer to="/home">
                    <Nav.Link>Casa 1 Vagas</Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="app-navbar-collapse" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {(token !== null && token !== "") &&
                        <LinkContainer to="/curriculos">
                            <Nav.Link>Currículos</Nav.Link>
                        </LinkContainer>
                    }
                    {(token !== null && token !== "") &&
                        <LinkContainer to="/empresas">
                            <Nav.Link>Empresas</Nav.Link>
                        </LinkContainer>
                    }
                    {/* {
                        (token !== null && token !== "") && tipoUsuario == "pessoa-fisica" &&
                        <LinkContainer to="/meu-curriculo">
                            <Nav.Link>Meu Currículo</Nav.Link>
                        </LinkContainer>
                    }
                    {
                        (token !== null && token != "") && tipoUsuario == "pessoa-juridica" &&
                        <LinkContainer to="/dados-empresa">
                            <Nav.Link>Dados Empresa</Nav.Link>
                        </LinkContainer>
                    } */}
                    {(token !== null && token !== "") &&
                        <LinkContainer to="/vagas">
                            <Nav.Link>Vagas</Nav.Link>
                        </LinkContainer>
                    }

                    {(token !== null && token !== "") &&
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    }


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;