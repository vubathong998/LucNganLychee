import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
const cx = classNames.bind(styles);

function Buttons({ type, children, onClick }) {
    var classOfBtn = [];

    type = 1 ? (classOfBtn = ['type1']) : '';

    return (
        <button onClick={onClick} className={cx([...classOfBtn])}>
            {children}
        </button>
    );
}

export default Buttons;
