import { FaTag } from "react-icons/fa";
import style from './pin.module.scss';

interface PinProps {
    title: string;
}

const Pin: React.FC<PinProps> = ({ title }) => {
    return (
        <div className={style.pinContainer}>
            <FaTag className={style.pinContainer__icon}/>{title}
        </div>
    );
};

export default Pin;