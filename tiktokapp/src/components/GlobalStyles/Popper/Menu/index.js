import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'; // optional
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from './../../Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles)

const defaultFn = () => { }
const Menu = ({ children, items = [], onChange = defaultFn }) => {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //kiểm tra xem item nào có children (boolean)

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        });
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
                        {history.length > 1 && <Header
                            title='Language'
                            onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
            onHidden={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}

        </Tippy>
    )
}

export default Menu