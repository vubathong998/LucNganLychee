import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/pictures/logo.png';
import Language from './TippyHeader/Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlassCheers,
    faHeart,
    faLanguage,
    faMagnifyingGlass,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { CurrentLanguageContext } from '~/App';
import { useContext } from 'react';

import Wishlist from './Wishlist/Wishlist';

const cx = classNames.bind(styles);

function Header() {
    const currentLanguage = useContext(CurrentLanguageContext)[0];
    const setCurrentLanguage = useContext(CurrentLanguageContext)[1];
    return (
        <div className={cx('header')}>
            <div className={cx('headerContent')}>
                <div className={cx('logoInput')}>
                    <img className={cx('logo')} src={logo} />
                    <input className={cx('input')} placeholder={currentLanguage === 'VN' ? 'Tìm kiếm' : 'Search'} />
                    <a href="#" className={cx('iconInput')}>
                        <FontAwesomeIcon className={cx('iconInput__child')} icon={faMagnifyingGlass} />
                    </a>
                </div>
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
