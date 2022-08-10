import classNames from 'classnames/bind';
import styles from './Page__TheBest.module.scss';
import Picture from '~/pictures';
import Type1 from '~/Component/Content/Types/Type1/Types1';
const cx = classNames.bind(styles);

function Page__TheBest() {
    return (
        <div className={cx('container')}>
            <Type1 type={Picture[6]} />
            <Type1 type={Picture[7]} />
            <Type1 type={Picture[8]} />
            <Type1 type={Picture[9]} />
            <Type1 type={Picture[2]} />
        </div>
    );
}

export default Page__TheBest;
