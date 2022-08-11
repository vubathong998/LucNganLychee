import { travel } from '~/pictures';

import styles from './Ads1.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Ads1() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h2>Chào mừng bạn đến với du lịch miệt vườn tại Lục Ngạn!</h2>
                <div className={cx('content1')}>
                    <div>
                        Vùng đất Lục Ngạn Bắc Giang không chỉ nổi tiếng bởi trái vài thiều được xuất khẩu ra nhiều nước
                        trên thế giới. Vùng đất này được thiên nhiên ưu đãi cộng với sự năng động chịu khó của người dân
                        nên mùa nào thức ấy, trái ngọt luôn đầy tay. Để khai thác lợi thế từ của vùng đồi Lục Ngạn, hiện
                        nay ngành du lịch đang tích cực xúc tiến các hoạt động khai thác phát triển du lịch nơi đây bằng
                        sự kết nối các tour trải nghiệm cuộc sống nông thôn vùng đồi đầy hoa trái.
                    </div>
                    <div>
                        Vào mùa thu đông từ tháng 10 đến tháng 12 vùng đất Lục Ngạn lại sôi động bước vào vụ thu hoạch
                        cam, bưởi. Những giống cam bưởi được trồng ở vùng đất này luôn mang đến chất lượng cao. Nhiều
                        người khi đến với Lục Ngạn luôn cảm thấy hứng thú và vui thích khi được đi dưới những vườn cây
                        sai trĩu quả, ngắm nhìn màu vàng rộm và hít hà hương thơm của những trái cam, bưởi vào vụ chín,
                        thưởng thực sự thơm ngọt thanh mát của những múi bưởi, cam được hái ngay tại vườn.Nắm bắt nhu
                        cầu này, hiện nay nhiều tổ chức, cá nhân đã thực hiện các tour Du lịch trải nghiệm về miền cây
                        trái Lục Ngạn. Đây là một xu hướng du lịch bền vững đang được nhiều khách du lịch quan tâm!.
                        <a href="#">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
            <div className={cx('picture')}>
                <div className={cx('piece1', 'piece')}>
                    <img src={travel[9].pic} alt="travel" />
                    <div className={cx('more1', 'more')}>
                        <button>Tìm hiểu thêm</button>
                    </div>
                </div>
                <div className={cx('piece2', 'piece')}>
                    <img src={travel[11].pic} alt="travel" />
                    <div className={cx('more2', 'more')}>
                        <button>Tìm hiểu thêm</button>
                    </div>
                </div>
                <div className={cx('piece3', 'piece')}>
                    <img src={travel[10].pic} alt="travel" />
                    <div className={cx('more3', 'more')}>
                        <button>Tìm hiểu thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads1;
