import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/352307362_813863556749228_8124736546044935585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fBhQmbL9RYEAX-7bn1G&_nc_ht=scontent.fhan5-1.fna&oh=00_AfA01Z_NskbYqB0osXSqV12rcxt6IMKmG0bGJx9ACqcJgw&oe=64983CF9" alt='' />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem