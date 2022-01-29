import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                {/* <NavLink className={"navbar-brand navnav"} to="/about-us">
                    TSV-print
                </NavLink> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="/about-us">
                            О нас
                        </NavLink>
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
                        <NavLink className={"nav-link"} to="/contacts">
                            Контакты
                        </NavLink>
                        <NavDropdown title="(Выпадалка. Что б сюда засунуть?)" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Тыц номер 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Тыц номер 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Тыц номер 3</NavDropdown.Item>
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
