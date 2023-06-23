import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'; // optional
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from './../../Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem';
const cx = classNames.bind(styles)

const Menu = ({ children, items = [] }) => {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ));
    }
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement='bottom-end'
            render={attrs => (

                <div className={cx('content')} tabIndex='-1' {...attrs}>
                    <PopperWrapper
                        className={cx('menu-popper')}
                    >
                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
        >
            {children}

        </Tippy>
    )
}

export default Menu