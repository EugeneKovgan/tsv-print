import "./Services.scss";
import { Accordion } from "react-bootstrap";
import cartridge_img from "../../assets/img/cartridge_img.png";
import tonner_img from "../../assets/img/tonner_img.png";
import repair_img from "../../assets/img/repair_img.png";
import repair_print_img from "../../assets/img/repair_print_img.png";
import firmware_print from "../../assets/img/firmware_print.png";

const Services = () => {
    return (
        <div className="wrapper">
            <div className="content-container">
                <h3>Услуги</h3>
                {/* <h3>Упс! раздел находится в разработке. Приходите позже</h3> */}
                <Accordion className="price_info-block">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="services_header">
                                <h5>Заправка картриджей</h5>
                                <img src={tonner_img} alt="tonner" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Обеспечить отменное качество печати и заручиться Вашим доверием,- задача специалистов
                                TSV-print номер один. Мы будем рады помочь в любом вопросе, касающемся заправки или
                                восстановления картриджей лазерных принтеров и МФУ, как монохромных (в народе именуемых
                                чёрно-белыми), так и цветных. Если картриджей для заправки не много, осуществить работу
                                мы предлагаем непосредственно на месте, у Вас в офисе или дома. В случае большого
                                объема,- заберём в мастерскую и вернем своими силами. Естественно с оформлением
                                соответствующих документов и гарантией. Соотношение «ЦЕНА-КАЧЕСТВО»,- та золотая
                                середина, которую ищет каждый! Заправляем картриджи: Canon (Кэнон), HP
                                (Hewlett-Pakkart), Kyocera Mita (Киосера), Samsung (Самсунг), Xerox (Ксерокс), Ricoh
                                (Рико), Panasonic, Brother, Conica Minolta, Sharp. Заправка картриджей в Минске и в 10
                                км. от МКАД. Заправка картриджей Canon Оставьте заявку на сайте, позвоните или напишите
                                в Viber. Мы постараемся учесть все Ваши пожелания и подстроиться под Вам удобное время.
                                Перед приездом к Вам, наши специалисты в обязательном порядке предупредят о своем визите
                                и скорректируют время прибытия в случае необходимости. Для заправки одной единицы
                                техники потребуется примерно 10-15 минут. Работы осуществляются в присутствии заказчика.
                                После себя сотрудники оставят чистоту и порядок, ответят на интересующие вопросы, дадут
                                советы по дальнейшей эксплуатации. Мастера применяют специализированный пылесос,
                                необходимые средства очистки и имеют большой опыт. Работаем в пределах 10 км. от МКАД и
                                в Минске: Заводской район, Ленинский район, Октябрьский район, Московский район,
                                Фрунзенский район, Центральный район, Советский район, Первомайский район, Партизанский
                                район. Заправка картриджей в Минске на дому или с выездом в офис. Темп жизни столицы
                                диктует свои условия. Времени всегда не хватает даже на осуществление приоритетных
                                задач, не говоря уже о попутно возникающих вопросах. Вернуть в строй опустевший принтер
                                можно и в стационарной мастерской. Но в этом случае понадобиться потратить час — два на
                                поездку туда и обратно. Не всегда в таком сервисном центре Вам осуществят заправку
                                непосредственно в момент обращения. Если невозможно сразу протестировать
                                свежезаправленный картридж, дефекты проявятся уже по возвращении, на рабочем месте.
                                Придётся возвращаться для их устранения повторно. Оценив такой вариант развития событий,
                                мы готовы решить проблему приехав к Вам на дом или в офис. Это сэкономит время, оградит
                                Вас от лишних забот и гарантирует желаемый результат. Как выглядит правильная заправка
                                лазерных картриджей? Осуществляется по следующему алгоритму: Внешний осмотр и
                                предварительная проверка. Уже на этом этапе специалист может сделать первые выводы о
                                состоянии отдельных деталей. Разборка. Она обязательна, так как все составляющие должны
                                быть надлежащим образом очищены и обработаны спец.растворами, спец. пылесосом опустошён
                                отсек с отработанным тонером. Не доверяйте тому, кто предлагает Вам, что называется, «на
                                коленке», не заморачиваясь, засыпать новую партию порошка.Как самому заправить картридж
                                HP Очищение механизмов, шестеренок, контактов. Здесь же немаловажным будет отметить, что
                                специальной силиконовой смазкой обрабатываются и участки трения пластиковых частей
                                (втулки шестерен, фотовалов, магнитных роликов). Это защитит их от преждевременного
                                износа, заклинивания, поломки. Заполнение заправочной части новым тонером. Засыпка новым
                                поверх старого недопустима. Сборка. Проверочное тестирование. Есть ли разница каким
                                тонером заправить картридж? Безусловно, разница есть. Свойства применяемого тонера
                                напрямую скажутся как на качестве получаемой картинки (насыщенность цвета, четкость
                                изображения, передача полутонов), так и на состоянии (скорости износа) рабочих деталей и
                                самого принтера. Последнее наиболее актуально для печатных устройств марки Kyocera,
                                Ricoh, Panasonic, так как они особенно требовательны к тонеру и даже однократное
                                использование низкопробного порошка способно безвозвратно вывести их печатающий узел из
                                строя. К тому же, помимо того, насколько хорош выбранный заправочный материал, большое
                                значение имеет и его правильный подбор для конкретной марки и модели. Не поддавайтесь на
                                уловки об «универсальном порошке», который подходит для всех принтеров. Принтеры и МФУ
                                разных производителей, а нередко и модели одной марки, имеют свои особенности работы.
                                Отличаются рабочие температуры узлов закрепления изображения, величины токов, способы
                                снятия заряда с фотобарабана и др. Поэтому и тонер должен соответствовать специфике.
                                Заправка цветных картриджей. В целом технология такая же как и для монохромных
                                картриджей, но имеет ряд своих особенностей. Первая из которых – это их куда большая
                                требовательность к качеству применяемого тонера, чем картриджей монохромных аппаратов.
                                Неправильно подобранный или низкокачественный порошок не только не сможет верно передать
                                палитру требуемых цветов, но и даже нарушить корректность работы устройства. К примеру
                                испортить фотовал или загрязнить дозирующее лезвие. Следует так же отметить
                                необходимость применения специального талька для фотовалов. Это поможет устранить скрип,
                                часто тревожащий владельцев аппаратов цветной печати, и убережет от повреждения лезвие
                                очистки (ракельный нож). Обязательным будет нанесение смазки на посадочные места рабочих
                                деталей, во избежание нарушения их должного прилегания друг к другу.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="services_header">
                                <h5>Ремонт и восстановление картриджей</h5>
                                <img src={repair_img} alt="tonner" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>
                                Ремонт и восстановление картриджей При эксплуатации печатной техники, наряду с
                                заправкой, следует помнить и про ремонт картриджей. Что такое ремонт и восстановление
                                картриджа? Восстановление лазерного картриджа – это замена деталей или частей корпуса,
                                вышедших из строя вследствие естественного износа или в результате механического
                                повреждения. Чаще всего причиной повреждения становятся попавшие в картридж вместе с
                                бумагой канцелярские мелкие предметы: скрепки, кнопки, скобы и тому подобный мелкий
                                мусор. Другой причиной может стать и использование некачественной бумаги. Укоротит срок
                                службы фотобарабана печать накладных, имеющих металлизированные элементы. Где сделать
                                ремонт картриджей в Минске? Ремонт картриджей Многие мастерские могут оказать помощь в
                                этом вопросе, но результаты работы могут различаться. Большое значение имеет не только
                                квалификация мастера, но и качество применяемых для замены деталей. Низкопробные
                                запчасти «сомнительного происхождения» не обеспечат должного качества работы, и срок
                                службы окажется в разы короче аналогичных деталей марок Duc или Mitsubishi, которые
                                используют в работе мастера TSV-print. Поэтому мы рекомендуем Вам обращаться именно к
                                нам. Когда надо производить восстановление лазерного картриджа? Наиболее частые дефекты
                                печати: бледность текста, черные края листа, точки, полосы (могут быть как вертикальные,
                                так и горизонтальные), серый фон, повтор текста (дубль), «волны». Почему нужно
                                производить восстановление картриджа, если он не поврежден и «совсем новый»? С таким
                                неприятным моментом придется столкнуться обладателям только что купленного аппарата
                                марки Canon или HP. Причиной является практика завода-изготовителя устанавливать в
                                картриджи детали, срок службы которых ориентирован на печать количества листов равных
                                заявленному ресурсу самого картриджа. Другими словами, если картридж изготавливается как
                                «одноразовый», то и незачем комплектовать его более долговечными деталями. На практике
                                это проявляется как осветление (бледность) текста. Поэтому, скорее всего, заменить
                                фотобарабан и магнитный ролик придется уже в первую его заправку. Расстраиваться не
                                стоит, замененные барабан и ролик (надлежащего качества), прослужат не менее 5
                                последующих заправок. Остальные же детали в картриджах этих марок нареканий не вызывают,
                                сама техника зарекомендовала себя с положительной стороны. Почему восстанавливать
                                картридж нужно сразу после появления дефектов печати ? Дальнейшая работа одной
                                поврежденной детали может привести к порче других. А своевременный ремонт защитит Вас от
                                лишних трат и продлит жизнь картриджа.
                            </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="services_header">
                                <h5>Ремонт принтеров и МФУ</h5>
                                <img src={repair_print_img} alt="tonner" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>
                                Ремонт принтеров и МФУ Где быстро и качественно произвести ремонт лазерных принтеров и
                                МФУ в Минске? Предлагаем Вам обратиться к команде профессионалов TSV-print. Мы
                                осуществляем ремонт принтеров и МФУ (монохромных и цветных) с выездом домой, в
                                офис.Ремонт принтера Canon Готовы заниматься аппаратами всех известных производителей —
                                Canon, HP, Samsung, Xerox, Kyocera Mita, Panasonic, Brother, Ricoh Мелкие мероприятия по
                                починке осуществляются на месте. Мы поможем извлечь застрявшую бумагу, освободить от
                                накопившейся пыли, грязи, просыпавшегося тонера ролики захвата, узлы и агрегаты. Для
                                проведение более сложных ремонтных процедур: прошивки (расчиповки), диагностики
                                неисправностей, замены ролика подачи бумаги, термопленки или тефлона, прижимного вала —
                                мы своими силами доставляем технику в нашу мастерскую и обратно. Принимая оборудование,
                                сотрудник фирмы выдаст документ подтверждающий факт передачи, с указанием марки, модели,
                                заводского номера. После диагностики, наши сотрудники свяжутся с Вами для согласования
                                вопросов ремонта и сроков исполнения. При возврате — предоставляется гарантийный талон.
                                В случае нецелесообразности проведения ремонта (когда стоимость устранения неисправности
                                слишком высока или модель морально и технически устарела), мы готовы выписать акт
                                технического состояния для дальнейшего списания устройства. Как правило такая ситуация
                                возникает при поломке электронных и электромеханических частей принтера: лазера,
                                высоковольтного блока питания, платы формтера и т.п. Сервисное обслуживание оргтехники.
                                Систематическое проведение профилактики: проверка состояния узлов и деталей, удаление
                                просыпавшегося тонера, скоб, скрепок и подобного мусора, чистка тормозных площадок,
                                обработка роликов подачи бумаги и резиновых элементов специальными растворами, очистка
                                оптики и смазка электрических контактов, — своевременное выполнение подобных операций
                                снижает риск поломки, обеспечивает максимально высокую производительность, улучшает
                                качество печати. Настоящие действия выполняются нашими мастерами бесплатно, в комплексе
                                с заказанными услугами, что продлевают срок службы агрегата.
                            </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className="services_header">
                                <h5>Прошивка принтеров</h5>
                                <img src={firmware_print} alt="tonner" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>
                                Прошивка принтеров Что такое прошивка принтера? Прошивка принтеров – это программное
                                обеспечение, обеспечивающее слаженную работу отдельных частей устройства. Самый простой
                                пример – Ваш телефон. Уж про его прошивку и перепрошивку вы наслышаны точно. Такая же
                                ситуация и с прошивка принтера. Благодаря ей он может работать резво и слаженно, а может
                                и «глючить». Когда нужна повторная прошивка (перепрошивка или расчиповка) принтера?
                                Прошивка принтера Тут может быть две причины: Причина первая – Вы приобрели новый
                                принтер (или МФУ) и на нем, естественно, стоит заводская прошивка. И проблема, с которой
                                вы столкнетесь именно в ней. Заводская прошивка содержит функцию «контроля количества
                                напечатанных страниц». Это означает, что когда Ваш аппарат выдаст положенное ресурсом
                                картриджа количество страниц, внутренний счетчик заблокирует его работу. Световой сигнал
                                состояния смениться с зеленого на красный, и Вы увидите сообщение «нет тонера» или
                                «замените картридж». Заводом-изготовителем это предусмотрено с целью защиты от повторных
                                заправок. Причина вторая – сбой в работе прошивки установленной ранее. В основном это
                                случается при неграмотной установке, по причине плохого качества самой прошивки (наличия
                                в ней ошибок) или при перепадах напряжения. После прошивки Ваш принтер воспринимает
                                картридж каждый раз как новый. Прошивка принтера делается единожды и решает проблему с
                                многократным использованием картриджа. Прошивки, выполняемые неквалифицированными
                                специалистами несут риск безвозвратно испортить технику. Принтера (МФУ) каких марок
                                нужно прошивать? В основе своей это Samsung и Xerox. Этот момент необходимо учитывать
                                при выборе техники. Монохромные (черно-белые) аппараты марок Canon, HP, Kyocera также
                                оповестят о том что «тонера нет» и нужно «заменить расходный материал», но на работе это
                                никак не скажется. Они просто Вас будут об этом информировать, не доставляя неудобств. В
                                цветных же, — необходимо будет заменять чип картриджа при каждой заправке. В принтерах и
                                МФУ Brother программного счетчика нет, а защита выполняется механическим способом. Это
                                значит, что прошивать их не нужно, но потребуется установка механического ключа на
                                картридж. Этот ключ есть в дополнительно купленных картриджах, и требует установку в
                                нужное положение каждую последующую заправку.
                            </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <div className="services_header">
                                <h5>Выезд специалиста</h5>
                                <img src={tonner_img} alt="tonner" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>
                                Выезд специалиста Хотите сэкономить время и средства? Тогда выезд специалиста к Вам
                                домой или в офис – это ваш вариант! Порядок вызова мастера и зона обслуживания Заявка но
                                обслуживание оставленная до 16.00 выполняется в день заказа, заявки оставленные позже —
                                переносятся на следующий день. Наша компания осуществляет выезд специалиста в любую
                                точку Минска и Минского района. Мы обслуживаем: Центральный, Советский, Первомайский,
                                Партизанский, Заводской, Лененский, Октябрьский, Московский и Фрунзенский районы, а так
                                же в радиусе 10 км от МКАД. Другие способы связи. Так же вы можете получить консультацию
                                наших мастеров, позвонив по телефону или оставив вопрос в группах социальных сетей
                                (facebook, vkontakte, instagram) или в viber/skype/e-mail. Опишите, какие трудности
                                возникли с техникой — специалист сориентирует о возможных неисправностях и сообщит
                                примерную стоимость ремонта или замены деталей. При необходимости оставьте свои
                                контактные данные и наши менеджеры из технической поддержки максимально оперативно
                                свяжутся с Вами сами и помогут решить возникшие вопросы. Преимущества вызова
                                специалиста: 1. Вам не надо тратить время и силы на транспортировку техники/картриджа;
                                2. Работы производятся в удобное для Вас время; 3. Заправка одного картриджа в среднем
                                занимает не более 15 минут, что позволит быстро вернуть технику в строй; 4.
                                Заправка/восстановление происходит в Вашем присутствии, что дает возможность убедиться в
                                добросовестности и качестве выполненных работ; 5. Вы получаете консультацию на месте по
                                всем интересующим Вас вопросам; По окончании работ специалист обеспечит чистоту и
                                порядок. Заказать выезд специалиста Вы можете: по телефонам: 8029 667-83-47 (Velcom),
                                8029 574-59-59 (МТС) оставить вопрос в Viber: +375 29 667 84 47 написать вопрос в Skype:
                                tarabezh_sergey отправить письмо на почту: tarabezh_sv@mail.ru оставить заявку онлайн —
                                оставить заявку на обслуживание Мы дорожим каждым своим клиентом, поэтому всегда рады
                                помочь.
                            </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Services;
