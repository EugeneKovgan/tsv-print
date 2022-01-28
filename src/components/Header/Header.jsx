import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [color, setColor] = useState("black");

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">О нас</Link>
                </li>
                <li>
                    <Link to="/services">Услуги</Link>
                </li>
                <li>
                    <Link to="/price">Цены на услуги</Link>
                </li>
                <li>
                    <Link to="/comments">Отзывы</Link>
                </li>
                <li>
                    <Link to="/articles">Статьи</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
            <div style={{ padding: "10px", backgroundColor: color }}>
                <button onClick={() => setColor("black")}>Dark</button>
                <button onClick={() => setColor("white")}>Light</button>
            </div>
        </div>
    );
};

export default Header;
