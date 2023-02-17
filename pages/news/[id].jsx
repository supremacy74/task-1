import React from 'react'

import { useRouter } from 'next/router'

import { useGetItemQuery } from '@/app/hacker-news/hacker-news.api'

import Comments from '@/components/Comments'

import styles from '@/styles/modules/News.module.css'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

const News = () => {
    const router = useRouter()
    const { id } = router.query

    const { data, isLoading } = useGetItemQuery(id)

    if (isLoading) {
        return <div>Loading...</div>
    }

    const { by, title, kids } = data

    return (
        <Wrapper>
            <Container>
                <h1>{title}</h1>
                <p>By: {by}</p>
                <p>Comments: {kids ? kids.length : 0}</p>
                {kids && <Comments comments={kids} />}
            </Container>
        </Wrapper>
    )
}

export default News
