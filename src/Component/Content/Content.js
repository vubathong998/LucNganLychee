import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Content__Img from './Content__Img/Content__Img';
import Content__BestSeller from './Content__BestSeller/Content__BestSeller';
import Ads1 from './Ads1/Ads1';
import AfterContent__BestSeller from './AfterContent__BestSeller/AfterContent__BestSeller';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('content')}>
            <Content__Img />
            <Content__BestSeller />
            <Ads1 />
            <AfterContent__BestSeller />
        </div>
    );
}

export default Content;
