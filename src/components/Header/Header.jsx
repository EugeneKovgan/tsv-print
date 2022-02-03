import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SocBlock from "../SocBlock/SocBlock";
import mts_logo from "../../assets/img/mts_logo.png";
import a1_logo from "../../assets/img/a1_logo.png";
import viber_logo from "../../assets/img/viber_logo.png";
import logo_tsv from "../../assets/img/favicon.png";

const Header = () => {
    return (
        <Navbar className="header" collapseOnSelect expand="lg" variant="dark" sticky="top">
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
                            <NavDropdown.Item className="logo-mob-title" href="tel:+375295745959">
                                <img className="logo-mob-img" src={mts_logo} alt="mts_logo" /> +375-29-574-59-59
                            </NavDropdown.Item>
                            <NavDropdown.Item className="logo-mob-title" href="tel:+375296678347">
                                <img className="logo-mob-img" src={a1_logo} alt="a1_logo" />
                                +375-29-667-83-47
                            </NavDropdown.Item>
                            <NavDropdown.Item className="logo-mob-title" href="viber://chat?number=%+375296678347">
                                <img className="logo-mob-img" src={viber_logo} alt="viber_logo" />
                                +375-29-667-83-47
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item tp="/contacts">
                                <NavLink className={"nav-link nav-link-contacts"} to="/contacts">
                                    Прочая информация
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <SocBlock />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
