import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import mts_logo from "../../assets/img/mts_logo.png";
import a1_logo from "../../assets/img/a1_logo.png";
import viber_logo from "../../assets/img/viber_logo.png";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                <NavLink className={"navbar-brand navnav"} to="/tsv-print">
                    TSV-print
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink className={"nav-link"} to="/about-us">
                            О нас
                        </NavLink> */}
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
                        {/* <NavLink className={"nav-link"} to="/contacts">
                            Контакты
                        </NavLink> */}
                        <NavDropdown to="/contacts" title="Контакты" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="tel:+375295745959">
                                <img className="logo" src={mts_logo} /> +375 29 574 59 59
                            </NavDropdown.Item>
                            <NavDropdown.Item href="tel:+375296678347">
                                <img className="logo" src={a1_logo} />
                                +375 29 667 83 47
                            </NavDropdown.Item>
                            <NavDropdown.Item href="tel:+375296678347">
                                <img className="logo" src={viber_logo} />
                                +375 29 667 83 47
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Можнет вообще это убрать?</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="поиск чего-то. Надо?"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
