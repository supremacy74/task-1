import React, { useEffect } from 'react'

import styles from '../styles/modules/Login.module.css'

import { useSelector } from 'react-redux'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Form from '@/components/Form'
import Heading from '@/components/Heading'

const Login = () => {
    const items = useSelector((state) => state.form.items)

    return (
        <Wrapper>
            <Container>
                <div className={styles.inner}>
                    <Heading priority={1}>Login</Heading>
                    <Form items={items} buttonText="Login" />
                </div>
            </Container>
        </Wrapper>
    )
}

export default Login
