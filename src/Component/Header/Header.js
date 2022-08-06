/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/pictures/logo.png';
import Language from './TippyHeader/Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLanguage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { CurrentContext } from '~/App';
import { useContext } from 'react';

import Wishlist from './Wishlist/Wishlist';

const cx = classNames.bind(styles);

function Header() {
    const currentLanguage = useContext(CurrentContext)[0];
    const setCurrentLanguage = useContext(CurrentContext)[1];
    return (
        <div className={cx('header')}>
            <div className={cx('headerContent')}>
                <img className={cx('logo')} src={logo} />
                <div className={cx('actions')}>
                    <div>
                        <Wishlist>
                            <div className={cx('gotPadding')}>
                                <span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </span>
                                <span>{currentLanguage === 'VN' ? 'Ưa Thích' : 'Wishlist'}</span>
                            </div>
                        </Wishlist>
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
