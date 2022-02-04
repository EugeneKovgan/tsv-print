import "./Contacts.scss";
import sertificate from "../../assets/img/sertificate.jpg";

const Contacts = () => {
    return (
        <div className="wrapper">
            <div className="content-container">
                <h3>Контакты</h3>
                <h3>Упс! раздел находится в разработке. Приходите позже</h3>
                <p>
                    Контакты: + 375 (29) 574 59 59 + 375 (29) 667 83 47 + 375 (29) 667 83 47 Реквизиты: ИП Тарабеж
                    Сергей Владимирович 220075 г.Минск, ул. А.Бачило 3-61 р/с BY27 ALFA 3013 2138 3200 7027 0000 в ЗАО
                    «Альфа-Банк» код банка ALFABY2X Республика Беларусь, г.Минск, ул. Сурганова 43-47 УНП 192 646 978
                    Skype: tarabezh_sergey Эл. почта: tarabezh_sv@mail.ru Про выезд специалиста можно почитать тут Про
                    нашу команду можно почитать тут
                </p>
                <img src={sertificate} alt="sertificate"></img>
            </div>
        </div>
    );
};

export default Contacts;
