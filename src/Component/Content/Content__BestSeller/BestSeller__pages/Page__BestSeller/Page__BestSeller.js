import classNames from 'classnames/bind';
import styles from './Page__BestSeller.module.scss';
import Picture from '~/pictures';
import Type1 from '~/Component/Content/Types/Type1/Types1';
const cx = classNames.bind(styles);

function Page__BestSeller() {
    return (
        <div className={cx('container')}>
            <Type1 type={Picture[0]} />
        </div>
    );
}

export default Page__BestSeller;
