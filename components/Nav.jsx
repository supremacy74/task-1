import React from 'react'

import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'

import { hide, setIsVisible } from '../app/features/navSlice'
import { setIsAuthorized } from '../app/features/formSlice'

import styles from '../styles/modules/Nav.module.css'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Nav = ({ items }) => {
    const isVisible = useSelector((state) => state.nav.isVisible)
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.menuIconWrapper}
                onClick={() => dispatch(setIsVisible())}
            >
                {isVisible ? <CloseIcon /> : <MenuIcon />}
            </div>
            <nav className={`${styles.nav} ${isVisible && styles.nav_visible}`}>
                {items.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            href={item.path}
                            className={styles.link}
                            onClick={() => {
                                dispatch(hide())

                                if (item.title === 'Logout') {
                                    dispatch(setIsAuthorized(false))
                                }
                            }}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default Nav
