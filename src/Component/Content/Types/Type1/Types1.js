import classNames from 'classnames/bind';
import styles from './Type1.module.scss';
const cx = classNames.bind(styles);

function Type1({ type }) {
    console.log(type.sale);
    return (
        <div className={cx('container')}>
            <div className={cx('pic')}>
                <img src={type.pic} />
                <div className={cx('picAnimation', 'show')}></div>
                <div className={cx('picAnimation2', 'show')}></div>
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
            </div>
        </div>
    );
}

export default Type1;
