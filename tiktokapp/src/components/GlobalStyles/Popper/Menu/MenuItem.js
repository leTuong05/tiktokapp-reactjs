import React from 'react'
import Button from '../../Button'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)
const MenuItem = ({ data, onClick }) => {

    return (
        <Button
            className={cx('menu-item', {separate: data.separate})}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    )
}

export default MenuItem