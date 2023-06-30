import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

let Component = 'button'
// passProps: Các props có thể thêm như target...

const Button = ({
    to,
    href,
    leftIcon,
    rightIcon,
    rounded,
    text,
    disable,
    onClick,
    primary,
    outline,
    small,
    medium,
    large,
    children,
    className,
    ...passProps
}) => {
    const props = {
        onClick,
        ...passProps
    }


    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }
    const classes = cx('wrapper', {
        [className]: className, // khi có className ở đâu đó thì sẽ lấy custom ở đó truyển vào
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disable, rounded
    })

    if (disable) {
        delete props.onClick;
    }
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    )
}

Button.propTypes = {
    to:PropTypes.string,
    href:PropTypes.string,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    rounded:PropTypes.string,
    text:PropTypes.bool,
    disable:PropTypes.bool,
    onClick:PropTypes.func,
    primary:PropTypes.bool,
    outline:PropTypes.bool,
    small:PropTypes.bool,
    medium:PropTypes.string,
    large:PropTypes.bool,
    children:PropTypes.node.isRequired,
    className:PropTypes.string,
}
export default Button