import classNames from 'classnames/bind';
import styles from './Page__Featured.module.scss';
import Picture from '~/pictures';
import Type1 from '~/Component/Content/Types/Type1/Types1';
const cx = classNames.bind(styles);

function Page__Featured() {
    return (
        <div className={cx('container')}>
            <Type1 type={Picture[1]} />
            <Type1 type={Picture[3]} />
            <Type1 type={Picture[6]} />
            <Type1 type={Picture[8]} />
            <Type1 type={Picture[9]} />
        </div>
    );
}

export default Page__Featured;
