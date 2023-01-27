import React from 'react'

import styles from '../styles/modules/Articles.module.css'

import { useGetPostsQuery } from '@/app/jsonplaceholder/jsonplaceholder.api'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'

const Articles = () => {
    const { isError, isLoading, data } = useGetPostsQuery()

    console.log(data)

    return (
        <Wrapper>
            <Container>
                <div className={styles.posts}>
                    {data ? (
                        data.map((post) => {
                            return (
                                <div key={post.id} className={styles.post}>
                                    <Heading priority={5}>{post.title}</Heading>
                                    <p>{post.body}</p>
                                </div>
                            )
                        })
                    ) : (
                        <p>Loading.</p>
                    )}
                </div>
            </Container>
        </Wrapper>
    )
}

export default Articles
