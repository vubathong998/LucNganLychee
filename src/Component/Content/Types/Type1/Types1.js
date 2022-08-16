import classNames from 'classnames/bind';
import styles from './Type1.module.scss';

import { useContext } from 'react';
import { CurrentLanguageContext } from '~/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCodeCompare, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import Type1__tippy from './Type1__tippy';

const cx = classNames.bind(styles);

function Type1({ type }) {
    const language = useContext(CurrentLanguageContext)[0];
    return (
        <div className={cx('container')}>
            <div className={cx('pic')}>
                <img src={type.pic} alt={type.name} />
                <div className={cx('picAnimation', 'show')}>
                    <a href="#" className={cx('cart')}>
                        <span className={cx('span')}>
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </span>
                        {language === 'VN' ? 'THÊM VÀO GIỎ HÀNG' : 'ADD TO CART'}
                    </a>
                </div>
                <div className={cx('picAnimation2', 'show')}>
                    <Type1__tippy type={language === 'VN' ? 'Thích' : 'Love'}>
                        <a href="#">
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                    </Type1__tippy>
                    <Type1__tippy type={language === 'VN' ? 'So sánh' : 'Compare'}>
                        <a href="#">
                            <FontAwesomeIcon icon={faCodeCompare} />
                        </a>
                    </Type1__tippy>
                    <Type1__tippy type={language === 'VN' ? 'Quan sát' : 'Quick View'}>
                        <a href="#">
                            <FontAwesomeIcon icon={faEye} />
                        </a>
                    </Type1__tippy>
                </div>
            </div>
            <div className={cx('content')}>
                <p className={cx('name')}>{type.name}</p>
                <p>
                    <span>
                        {type.sale ? (
                            <>
                                <span className={cx('cost')}>{type.cost}VND</span>
                                <b>
                                    {Math.floor((type.cost * 100) / (100 - type.sale)) -
                                        (Math.floor((type.cost * 100) / (100 - type.sale)) % 1000)}
                                    VND
                                </b>
                            </>
                        ) : (
                            <b>{type.cost}VND</b>
                        )}
                    </span>
                </p>
                <p className={cx('buy')}>
                    <a href="#">{language === 'VN' ? 'Mua ngay' : 'Buy now'}</a>
                </p>
            </div>
        </div>
    );
}

export default Type1;
