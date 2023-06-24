import React, { useState } from 'react'
import { forwardRef } from 'react'
import image from '../../../asset/image';
import classNames from 'classnames/bind';
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    //dùng forwardRef để khi khi component được sử dụng thì Tippy sẽ nhận được img
    const [fallBack, setFallBack] = useState(''); //fallback là khi ảnh lỗi

    const handleError = () => {
        setFallBack(image.noImage)
    }
    return <img  ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;

})

export default Image