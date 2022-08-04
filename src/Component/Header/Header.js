/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/pictures/logo.png';
import { useState } from 'react';
import Language from './TippyHeader/Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLanguage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import WishList from './WishList/WishList';

const cx = classNames.bind(styles);

function Header() {
    const [currentLanguage, setCurrentLanguage] = useState('VN');

    return (
        <div className={cx('header')}>
            <div className={cx('headerContent')}>
                <img className={cx('logo')} src={logo} />
                <div className={cx('actions')}>
                    <div>
                        <WishList>
                            <div className={cx('gotPadding')}>
                                <span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </span>
                                <span>{currentLanguage === 'VN' ? 'Ưa Thích' : 'WishList'}</span>
                            </div>
                        </WishList>
                    </div>
                    <div>
                        <Language propLanguage={[currentLanguage, setCurrentLanguage]}>
                            <div className={cx('gotPadding')}>
                                <span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faLanguage} />
                                </span>
                                <span>{currentLanguage}</span>
                            </div>
                        </Language>
                    </div>
                    <div>
                        <a href="#" className={cx('gotPadding')}>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faRightFromBracket} />
                            </span>
                            {currentLanguage === 'VN' ? 'Đăng nhập' : 'Login'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
