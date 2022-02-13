import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SocBlock from "../SocBlock/SocBlock";
import PhonesBlock from "../PhonesBlock/PhonesBlock";
import logo_tsv from "../../assets/img/favicon.png";

const Header = () => {
    return (
        <Navbar className="header" collapseOnSelect expand="lg" variant="dark" sticky="top">
            {/* <Navbar className="header" collapseOnSelect expand="lg" variant="dark" sticky="top"></Navbar> */}
            {/* <h1>Заправка картриджей и ремонт принтеров </h1> */}
            <Container>
                <NavLink className={"navbar-brand"} to="/tsv-print">
                    <img className="logo_tsv" src={logo_tsv} alt="logo_tsv" />
                    {/* TSV-print */}
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="/services">
                            Услуги
                        </NavLink>
                        <NavLink className={"nav-link"} to="/price">
                            Цены
                        </NavLink>
                        <NavLink className={"nav-link"} to="/comments">
                            Отзывы
                        </NavLink>
                        <NavLink className={"nav-link"} to="/articles">
                            Статьи
                        </NavLink>
                        <NavDropdown to="/contacts" title="Контакты" id="collasible-nav-dropdown">
                            <PhonesBlock />
                            <NavDropdown.Divider />
                            <NavDropdown.Item tp="/contacts">
                                <NavLink className={"nav-link nav-link-contacts"} to="/contacts">
                                    Прочая информация
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* <SocBlock /> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
