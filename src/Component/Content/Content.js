import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Content__Img from './Content__Img/Content__Img';
import Content__BestSeller from './Content__BestSeller/Content__BestSeller';
import Ads1 from './Ads1/Ads1';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('content')}>
            <Content__Img />
            <Content__BestSeller />
            <Ads1 />
        </div>
    );
}

export default Content;
