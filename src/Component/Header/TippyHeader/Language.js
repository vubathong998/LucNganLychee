import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Language.module.scss';
import Buttons from '~/Buttons/Buttons';
import 'tippy.js/animations/scale.css';

const cx = classNames.bind(styles);

function Language({ propLanguage, children }) {
    const mocLanguage = [
        {
            id: 1,
            name: 'Tiếng việt',
        },
        {
            id: 2,
            name: 'English',
        },
    ];

    const handleOnclickLanguage = (e) => {
        e === 1 ? propLanguage[1]('VN') : propLanguage[1]('EN');
    };

    return (
        <div>
            <HeadlessTippy
                trigger="click"
                offset={[-9, 0]}
                interactive
                // delay={[0, 500]}
                render={(attrs) => (
                    <div className={cx('inTippyLanguage')} tabIndex={-1} {...attrs}>
                        {mocLanguage.map((e, i) => (
                            <p key={i}>
                                <Buttons type="1" onClick={() => handleOnclickLanguage(e.id)}>
                                    {e.name}
                                </Buttons>
                            </p>
                        ))}
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default Language;
