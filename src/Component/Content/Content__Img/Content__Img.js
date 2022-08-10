import { useEffect, useRef, useState } from 'react';
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Content__Img.module.scss';
import linkImgs from './linkImgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Buttons from '~/Buttons/Buttons';
const cx = classNames.bind(styles);
const linkImgslength = linkImgs.length;

function ContentImg() {
    var love = useRef(0);

    const [currentPicture, setCurrentPicture] = useState(0);
    // console.log(love.current, currentPicture);
    love.current++;
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (currentPicture < 4) {
    //             console.log('less');
    //             setCurrentPicture((prev) => prev + 1);
    //         } else {
    //             console.log('more');
    //             setCurrentPicture(0);
    //         }
    //     }, 1000);
    // }, []);

    const clickLeftIcon = () => {
        setCurrentPicture(currentPicture > 0 ? currentPicture - 1 : linkImgslength - 1);
    };

    const clickRightIcon = () => {
        setCurrentPicture(currentPicture < linkImgslength - 1 ? currentPicture + 1 : 0);
    };

    const handleClickList = (e) => {
        setCurrentPicture(e);
    };

    return (
        <div className={cx('contentImg')}>
            <div className={cx('direction')}>
                <Buttons type="2" left={0} onClick={clickLeftIcon}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Buttons>
                <Buttons type="2" right={0} onClick={clickRightIcon}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Buttons>
            </div>
            {<img className={cx('img')} src={linkImgs[currentPicture].link} />}
            <div className={cx('selectPicture')}>
                {linkImgs.map((e, i) => {
                    return (
                        <div
                            key={i}
                            className={cx('listSelect', { selected: i === currentPicture })}
                            onClick={() => {
                                handleClickList(i);
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}

export default ContentImg;
