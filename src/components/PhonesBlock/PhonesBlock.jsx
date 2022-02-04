import "./PhonesBlock.scss";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import mts_logo from "../../assets/img/mts_logo.png";
import a1_logo from "../../assets/img/a1_logo.png";
import viber_logo from "../../assets/img/viber_logo.png";

const PhonesBlock = () => {
    return (
        <div className="phones_block">
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
        </div>
    );
};

export default PhonesBlock;
