import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Type1.module.scss';
const cx = classNames.bind(styles);

function Type1__tippy({ children, type }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('tippyContainer')} tabIndex="-1" {...attrs}>
                    {type}
                    <span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Type1__tippy;
