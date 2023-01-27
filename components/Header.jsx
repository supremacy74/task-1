import React, { useEffect } from 'react'

import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'

import { setItems } from '@/app/features/navSlice'

import styles from '../styles/modules/Header.module.css'

import Container from '@/layouts/Container'

import Nav from '@/components/Nav'

const Header = () => {
    const dispatch = useDispatch()

    const unauthorized = useSelector((state) => state.nav.unauthorized)
    const authorized = useSelector((state) => state.nav.authorized)

    const isAuthorized = useSelector((state) => state.form.isAuthorized)

    useEffect(() => {
        if (isAuthorized) {
            dispatch(setItems(authorized))
        } else {
            dispatch(setItems(unauthorized))
        }
    }, [])

    const items = useSelector((state) => state.nav.items)

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <Link href="/">someapp</Link>
                    <Nav items={items} />
                </div>
            </Container>
        </header>
    )
}

export default Header
