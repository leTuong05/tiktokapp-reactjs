import React, { useEffect, useRef, useState } from 'react'
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAfrica, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faQuestion, faGear, faCoins, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../Popper';

import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../AccountItem';

const cx = classNames.bind(styles)

const Search = () => {
    const [resultSearch, setResultSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const refInput = useRef();
    useEffect(() => {
        setTimeout(() => {
            setResultSearch([1])
        }, 3000)
    })

    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
        <Tippy
            interactive
            visible={showResult && resultSearch.length > 0} // phải có showResult và resultSeảch thì mới hiện kết quả
            onClickOutside={handleHideResult}
            render={attrs => (

                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Account
                        </h4>

                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>

            )}
        >
            <div className={cx('search')}>
                <input
                    ref={refInput}
                    value={searchValue}
                    placeholder='Tìm kiếm'
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && (
                    <button className={cx('clear')}
                        onClick={() => {
                            setSearchValue('')
                            setResultSearch([])
                            refInput.current.focus()
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    )
}

export default Search