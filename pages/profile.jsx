import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'

import styles from '../styles/modules/Profile.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Item from '@/components/Item'

const Profile = () => {
    const router = useRouter()

    const isAuthorized = useSelector((state) => state.form.isAuthorized)

    useEffect(() => {
        if (!isAuthorized) {
            router.push('/login')
        }
    }, [])

    return (
        <Wrapper>
            <Container>
                <div className="inner">
                    <Item
                        avatar="https://cdn.openai.com/dall-e-2/demos/text2im/astronaut/horse/photo/1.jpg"
                        login="User"
                    />
                </div>
            </Container>
        </Wrapper>
    )
}

export default Profile
