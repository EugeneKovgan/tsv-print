import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";
import office from "../../assets/img/office-4.jpg";

const Home = () => {
    return (
        <div className="wrapper home">
            {/* <h3>О нас</h3> */}
            {/* <h3>Упс! раздел находится в разработке. Приходите позже</h3> */}
            <Carousel interval="3000">
                <Carousel.Item>
                    <img className="d-block w-100" src={office} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className="slider_text">Заправка картриджей</h3>
                        {/* <p className="slider_text">Работы осуществляются со спецпылесосом.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={office} alt="Second slide" />

                    <Carousel.Caption>
                        <h3 className="slider_text">Ремонт и восстановление картриджей</h3>
                        {/* <p className="slider_text">
                            Полная сборка -разборка картриджа и диагностика деталей в Вашем присутствии.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={office} alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className="slider_text">Ремонт и обслуживание орг-техники</h3>
                        {/* <p className="slider_text">Работы осуществляются со спецпылесосом.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={office} alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3 className="slider_text">Выезд специалиста</h3>
                        {/* <p className="slider_text">Заправка у Вас дома или в офисе, в удобное для вас время.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="content-container">
                <p>
                    О компании TSV-print: TSV-print – это команда специалистов, готовых в самые сжатые сроки оказать Вам
                    помощь во всех возникающих вопросах касающихся Вашей офисной или домашней печатной техники
                    (оргтехники). У нас Вы можете получить бесплатную консультацию по её обслуживанию, эксплуатации или
                    приобретению по телефону либо заказать бесплатный выезд специалиста. Заправку, ремонт,
                    восстановление лазерных картриджей, а так же не сложный ремонт принтеров либо МФУ мы можем
                    осуществить на месте. Для проведения более сложных ремонтных работ, прошивки (расчиповки),
                    диагностики неисправностей, — мы своими силами доставляем вашу технику в нашу мастерскую и обратно.
                    В TSV-print мы используем только проверенные оригинальные материалы, что дает возможность обеспечить
                    отличное качество печати, свести к минимуму частоту необходимых замен узлов и деталей. На весь
                    спектр оказанных услуг в обязательном порядке предоставляется гарантия.
                </p>
            </div>
        </div>
    );
};

export default Home;
