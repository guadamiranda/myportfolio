import style from './pin.module.scss'

interface PinProps {
    title: string;
}

const Pin: React.FC<PinProps> = ({ title }) => {
    return (
        <div className={style.pinContainer}>
            {title}
        </div>
    );
};

export default Pin;