import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
const cx = classNames.bind(styles);

function Buttons({ type, children, onClick, left, right }) {
    var classOfBtn = [];
    if (type === '1') {
        classOfBtn = ['type1'];
    } else {
        classOfBtn = ['type2'];
    }

    return (
        <button onClick={onClick} className={cx([...classOfBtn])} style={{ left, right }}>
            {children}
        </button>
    );
}

export default Buttons;
