import "./Price.scss";
import { Accordion, Alert } from "react-bootstrap";
import canon from "../../assets/img/print-logo/canon.png";
import hewlett_packard from "../../assets/img/print-logo/hewlett-packard.png";
import kyocera from "../../assets/img/print-logo/kyocera.png";
import ricoh from "../../assets/img/print-logo/ricoh.png";
import samsung from "../../assets/img/print-logo/samsung.png";

const Price = () => {
    return (
        <div className="wrapper price">
            <div className="content-container">
                {/* <h3>Цены на услуги</h3> */}
                <Alert className="h3" variant="warning">
                    Специальные цены для корпоративных клиентов. Больше заправок – больше скидка
                </Alert>

                <h5>
                    <b>Заправка картриджей в Минске — цены колеблется от 10 до 20 бел.руб. за штуку.</b>
                    <br /> Но согласитесь, что самая низкая цена заправки картриджа предполагает и самую низкую
                    себестоимость. То есть, — использование материалов не лучшего качества.
                    <br /> Стоимость же заправки стандартного картриджа мастерами TSV-print с использованием
                    проверенных, надежных материалов и гарантией на выполненную работу будет ниже среднего —{" "}
                    <b>14 рублей</b> за один картридж. Бесплатный выезд специалиста при заправке от <b>2-х</b>{" "}
                    картриджей. При заправке одного картриджа стоимость выезда составит <b>2 рубля.</b> Так же не
                    учитывается стоимость выезда при заключении договора обслуживания, согласования условий работы и
                    цен.
                    <br /> Соотношение
                    <i>
                        <b> «ЦЕНА — КАЧЕСТВО»,</b>
                    </i>
                    — та золотая середина, которую ищет каждый!
                    <br /> <b>Для просмотра цены на заправку картриджа нажмите на логотип вашего принтера:</b>
                </h5>
                <Accordion className="price_info-block">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <img className="print-brand_img" src={canon} alt="canon"></img>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Стоимость заправки картриджей Canon. Японская фирма Canon, основанная в далеком 1933
                                году и по сегодняшний день заправить картридж canonзанимает свое почетное место в списке
                                мировых лидеров в производстве печатной лазерной техники. Принтеры, копиры и МФУ этой
                                марки продолжают радовать качеством, надежностью и доступностью как для бизнеса, так и
                                для рядового частного пользователя. Как отличительную особенность техники этого
                                производителя можно выделить относительную простоту устройства. Что, в свою очередь,
                                увеличивает срок службы и снижает вероятность поломки. Поэтому, если Вы уже являетесь
                                или собираетесь стать обладателем печатающего устройства Canon, спешим Вас уверить, —
                                это достойный выбор! Характеристики принтеров Canon. Картриджи лазерных принтеров Canon
                                устроены по принципу «все в одном». Т.е. не внутри аппарата, а уже в самом картридже
                                находятся все элементы отвечающие за формирование изображения, емкость с тонером и отсек
                                для сбора отработки. Это упрощает и удешевляет ремонтные работы, связанные с заменой
                                отработавших свой ресурс деталей. Еще одно отличие – это термопленка, устанавливаемая в
                                узле закрепления изображения (печке) аппаратов Canon, а не металлический вал с
                                тефлоновым покрытием, применяемый другими производителями. Эта особенность так же
                                уменьшает расходы на ремонт, и дает возможность скорейшего включение в работу. Почему
                                нужно производить восстановление картриджа, если он не поврежден и «совсем новый»? Цена
                                на заправку монохромных лазерных картриджей Canon. Ресурс указывается для формата A4 при
                                5% заполнении листа. ∗ при просмотре страницы на мобильном — переверните телефон
                                горизонтально.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <img className="print-brand_img" src={hewlett_packard} alt="hewlett_packard"></img>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Стоимость заправки картриджей HP (Hewlett-Packard). Hewlett-Packard (HP)– занимает
                                заправить картридж HPпочетное место на первых позициях рейтинга производителей
                                оргтехники. Печатная техника этой марки выпускается под покровительством японской
                                транснациональной корпорации Canon. А стало быть, обладает все теми же качествами и
                                характеристиками: надежностью, практичностью, простотой. Многие узлы, детали и даже
                                сменные картриджи этих двух марок являются взаимозаменяемыми. Характеристики принтеров
                                Hewlett-Packard Модельный ряд многофункциональных устройств и принтеров HP в плане
                                ассортимента – абсолютный лидер. В этом вопросе производитель учел все пользовательские
                                требования: профессиональная техника для крупного бизнеса или производства, домашние
                                компактные принтеры, скоростные, широкоформатные, для малообъемной работы и для работы
                                интенсивной, каждодневной, — каждый покупатель сумеет подобрать наилучший вариант для
                                своего вида деятельности. Ознакомиться с ценами на услуги по заправке картриджей Вы
                                можете в приведенной ниже таблице. Если интересующей модели в ней нет, — для уточнения
                                свяжитесь с нами по контактным телефонам, оставьте заявку на сайте или напишите в Viber.
                                Наши специалисты проконсультируют Вас по всем возникшим вопросам. Почему нужно
                                производить восстановление картриджа, если он не поврежден и «совсем новый»? Цены на
                                заправку картриджей HP. Ресурс указывается для формата A4 при 5% заполнении листа. ∗ при
                                просмотре страницы на мобильном — переверните телефон горизонтально.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <img className="print-brand_img" src={kyocera} alt="kyocera"></img>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Стоимость заправки картриджей Kyocera. Kyocera – малоизвестные массовому покупателю
                                печатные устройства, в основном из-за заправить картридж kyoceraориентации производителя
                                на выпуск высокопроизводительных машин для больших объемов печати. В этой технике
                                впервые была использована технология «бескартриджной печати». Это значит, что рабочие
                                узлы и компоненты, отвечающие за формирование изображения, находятся внутри корпуса, а
                                для заправки извлекается лишь тонер-туба. Характеристики принтеров Kyocera МФУ и
                                принтеры Kyocera – это вложение средств в долгосрочную перспективу в обмен на высокую
                                надежность, долговечность, хорошее качество печати. Применяемые материалы, имеют высокий
                                запас прочности. В зависимости от специфики модели, ресурс фотобарабана составляет
                                сто-триста тысяч страниц. Среди недостатков техники, наряду с высокой стоимостью, можно
                                выделить еще один. Это повышенная требовательность к качеству применяемого тонера. Дело
                                в том, что для первичного заряда фотобарабана, инженеры Kyocera сохранили применение
                                коротрона – металлической тонкой проволоки, работающей под высоким напряжением. И, если
                                применяется тонер, не отвечающий требованиям технологии, коротрон покрывается налетом и
                                приходит в негодность. По вопросам эксплуатации техники Вы можете обратиться к мастерам
                                нашего сервиса по контактным номерам телефонов, оставить заявку на сайте или написать в
                                Viber. Цены на заправку картриджей Kyocera приведены ниже в таблице. Цены на заправку
                                картриджей Kyocera приведены ниже в таблице. Ресурс указывается для формата A4 при 5%
                                заполнении листа. ∗ при просмотре страницы на мобильном — переверните телефон
                                горизонтально.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <img className="print-brand_img" src={ricoh} alt="ricoh"></img>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Стоимость заправки картриджей Ricoh. Как марка техники, Ricoh на нашем рынке известна
                                еще со времен заправить картридж ricohСоветского Союза. Но широкое распространение
                                лазерная печатная техника получила только в последние годы благодаря: — низкой цене —
                                компактности — достойному качеству печати Особенности лазерных картриджей Ricoh. Каждую
                                заправку аппарат потребует замены электронного чипа картриджа. С этого чипа считывается
                                информация о количестве отпечатанных страниц и как только будет выдано их положенное
                                количество, печатное устройство заблокируется. Пусть картридж и опустел только на
                                половину, и в нем предостаточно тонера, но дальнейшая работа будет невозможна.
                                Технология печати этой техники некоторым образом сказывается на состоянии ролика заряда
                                (PCR). А именно, он имеет свойство сильно загрязняться. К сожалению, на сегодняшний день
                                большая часть заправщиков, при появлении сероватого фона на листе после заправки, спишет
                                это на износ самого картриджа и предложит приобрести новый. Но это совсем не так,
                                достаточно качественно он очищается спец. раствором, совершенно бесследно устраняя
                                дефект. Отдельное внимание потребует и дозирующее лезвие. Оно также способно засоряться
                                налетом. А для того что бы его очистить, потребуется максимум аккуратности, оно очень
                                тоненькое и хрупкое. Цена заправки картриджей Ricoh. Ресурс указывается для формата A4
                                при 5% заполнении листа. Замена фотобарабана Ricoh – 22 руб. ∗ при просмотре страницы на
                                мобильном — переверните телефон горизонтально.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <img className="print-brand_img" src={samsung} alt="samsung"></img>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Стоимость заправки картриджей Samsung. Корейская фирма Samsung (в переводе означает «три
                                звезды») за время своего заправить картридж samsungсуществования выпустила 12 серий
                                печатающей техники: CF, CLP, CLX, MJ, MJC, ML, MSYS, Other, QL, SCX, SF, SPP. Однако в
                                пользовании у нашего потребителя встретить ML и SCX. Серия ML насчитывает почти две
                                сотни устройств. SCX – сто. Однако в последние годы продажи печатающей техники этой
                                марки сильно упали, не выдержав конкуренции других производителей. Что привело к продаже
                                Цены заправки картриджей Samsung. ∗ при просмотре страницы на мобильном — переверните
                                телефон горизонтально.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <h5>
                    <b>Скидка 10% — при заправке от пяти штук.</b>
                    <br />
                    <b>Скидка 25% — при заправке от десяти штук.</b>
                    <br /> <b>Что стало причиной низкого качества печати?</b>
                    <br /> Для того, чтобы узнать какие детали необходимо заменить пройдите в раздел <b>статьи</b> или
                    позвоните нам. Ориентировочные цены на детали представлены ниже:
                    <br /> замена дозирующего лезвия — 12 бел.руб.
                    <br /> замена фотовала — 15 бел.руб. замена ролика заряда — 12 бел.руб.
                    <br /> замена ракельного ножа — 10 бел.руб.
                    <br /> замена магнитного ролика — 12 бел.руб.
                    <br /> <b>Договорные цены на заправку картриджей для корпоративных клиентов.</b> TSV-print
                    ориентирована на индивидуальный подход к каждому клиенту, в том числе и в вопросе формирования цены
                    на услуги. Марка принтера, емкость картриджа, частота обслуживания и состояние Вашей техники, общий
                    объем работ — вот примерный перечень переменных влияющих на формирование стоимости работ. Больше
                    заправок – больше скидка.
                    <br /> Свяжитесь с нами и мы найдем вариант взаимовыгодного сотрудничества.
                </h5>
            </div>
        </div>
    );
};

export default Price;
