import "./OverHeader.scss";
import PhonesBlock from "../PhonesBlock/PhonesBlock";

const OverHeader = () => {
    return (
        <div className="over_header container">
            <h1 className="over_header_title">Заправка картриджей и ремонт принтеров </h1>
            <div className="phones_block"></div>
            <PhonesBlock />
        </div>
    );
};
export default OverHeader;
