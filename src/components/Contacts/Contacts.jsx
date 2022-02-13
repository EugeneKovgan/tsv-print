import "./Contacts.scss";
import sertificate from "../../assets/img/sertificate.jpg";
import PhonesBlock from "../PhonesBlock/PhonesBlock";

const Contacts = () => {
    return (
        <div className="wrapper">
            <div className="content-container">
                <h3>Контакты</h3>
                {/* <h3>Упс! раздел находится в разработке. Приходите позже</h3> */}
                <div className="content-container_info-block">
                    <h5>
                        <PhonesBlock /> <br />
                        {/* <b>Контакты:</b> <br /> + 375 (29) 574 59 59 <br /> + 375 (29) 667 83 47 <br /> + 375 (29) 667
                        83 47 <br /> */}
                        <b>Реквизиты:</b> <br /> ИП Тарабеж Сергей Владимирович 220075 г.Минск, ул. А.Бачило 3-61 р/с
                        BY27 ALFA 3013 2138 3200 7027 0000 в ЗАО «Альфа-Банк» код банка ALFABY2X Республика Беларусь,
                        г.Минск, ул. Сурганова 43-47 УНП 192 646 978 <br />
                        <br />
                        Skype:
                        <a href="skype:[tarabezh_sergey]?call">tarabezh_sergey</a>
                        <br /> Эл. почта:
                        <a href="mailto:tarabezh_sv@mail.ru">tarabezh_sv@mail.ru</a>
                        <br /> Про выезд специалиста можно почитать <b>тут</b> Про нашу команду можно почитать{" "}
                        <b>тут</b>
                    </h5>

                    <img className="contacts_1_img" src={sertificate} alt="sertificate"></img>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
