import styles from './AfterContent__BestSeller.module.scss';
import classNames from 'classnames/bind';
import Type1 from '../Types/Type1/Types1';
import Picture from '~/pictures';
const cx = classNames.bind(styles);

function AfterContent__BestSeller() {
    return (
        <div className={cx('container')}>
            <h1>Các sản phẩm khi Tham gia miệt vườn</h1>
            <div className={cx('pictures')}>
                <Type1 type={Picture[0]} />
                <Type1 type={Picture[1]} />
                <Type1 type={Picture[8]} />
                <Type1 type={Picture[9]} />
            </div>
        </div>
    );
}

export default AfterContent__BestSeller;
