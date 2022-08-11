import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { logo } from '../../pictures/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { apps } from '../../pictures/index';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('container-logo')}>
                <img className={cx('logo')} src={logo} alt="logo" />
                <div className={cx('contentCol')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <div>
                        <b>Messenger</b>
                        <p>
                            <a href="https://www.facebook.com/VuBaThong/">Liên Hệ</a>
                        </p>
                    </div>
                </div>
                <div className={cx('contentCol')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                        <b>Callcenter</b>
                        <p>
                            <a>123.456.789</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('midContent')}>
                <h4>Top Địa điểm yêu thích</h4>
                <p>
                    <a href="#">Xã Kiên Lao</a>
                </p>
                <p>
                    <a href="#">Xã Thanh Hải</a>
                </p>
                <p>
                    <a href="#">Xã Nam Dương</a>
                </p>
                <p>
                    <a href="#">Xã Đồng cốc</a>
                </p>
                <p>
                    <a href="#">Xã Xa Lý</a>
                </p>
            </div>
            <div className={cx('midContent')}>
                <h4>Top Không gian yêu thích</h4>
                <p>
                    <a href="#">Vườn vải</a>
                </p>
                <p>
                    <a href="#">Vườn cam</a>
                </p>
                <p>
                    <a href="#">Ruộng bậc thang</a>
                </p>
                <p>
                    <a href="#">Rừng núi</a>
                </p>
                <p>
                    <a href="#">Đồng bằng</a>
                </p>
            </div>
            <div className={cx('midContent')}>
                <h4>Về chúng tôi</h4>
                <p>
                    <a href="#">Block</a>
                </p>
                <p>
                    <a href="#">Số hợp đồng</a>
                </p>
                <p>
                    <a href="#">Điều khoản hoạt động</a>
                </p>
                <p>
                    <a href="#">Thông tin chủ nhà</a>
                </p>
                <p>
                    <a href="#">Đơn vị vận chuyển</a>
                </p>
            </div>
            <div>
                <h4 className={cx('moreInfo')}>Thông tin thêm</h4>
                <div className={cx('app')}>
                    <img src={apps[0].pic} alt="logo" />
                    <div className={cx('logoImg')}>
                        <a href="#">
                            <img src={apps[1].pic} alt="logo" />
                        </a>
                        <a href="#">
                            <img src={apps[2].pic} alt="logo" />
                        </a>
                        <a href="#">
                            <img src={apps[3].pic} alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
