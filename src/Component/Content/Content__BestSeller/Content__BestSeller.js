import { Routes, Route, Link } from 'react-router-dom';
import { CurrentLanguageContext } from '~/App';
import { useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './Content__bestSeller.module.scss';
import Page__BestSeller from './BestSeller__pages/Page__BestSeller/Page__BestSeller';
import Page__Featured from './BestSeller__pages/Page__Featured/Page__Featured';
import Page__TheBest from './BestSeller__pages/Page__TheBest/Page__TheBest';

const cx = classNames.bind(styles);

function Content__BestSeller() {
    const language = useContext(CurrentLanguageContext)[0];
    return (
        <div className={cx('container')}>
            <div className={cx('link')}>
                <ul>
                    <li>
                        <Link to="/">{language === 'VN' ? 'Bán chạy nhất' : 'BestSeller'}</Link>
                    </li>
                    <li>
                        <Link to="/BestSeller__pages/Page__Featured">
                            {language === 'VN' ? 'Đặc trưng' : 'Featured'}
                        </Link>
                    </li>
                    <li>
                        <Link to="/BestSeller__pages/Page__TheBest">{language === 'VN' ? 'Tốt nhất' : 'TheBest'}</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('straightLine')}></div>
            <div className={cx('content')}>
                <Routes>
                    <Route path="/" element={<Page__BestSeller />} />
                    <Route path="BestSeller__pages/Page__Featured" element={<Page__Featured />} />
                    <Route path="BestSeller__pages/Page__TheBest" element={<Page__TheBest />} />
                </Routes>
            </div>
        </div>
    );
}

export default Content__BestSeller;
