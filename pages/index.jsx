import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import styles from '../styles/modules/Home.module.css'

import { useSearchUsersQuery } from '@/app/github/github.api'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'
import Item from '@/components/Item'

import { useDebounce } from '@/hooks/useDebounce'

const Home = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)

    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })

    useEffect(() => {
        console.log(debounced)
    }, [debounced])

    console.log(data)

    return (
        <Wrapper>
            <Container>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search for Github username."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                {isError && (
                    <p className="text-red-600">Something went wrong.</p>
                )}
                {isLoading && <p className="text-green-600">Loading.</p>}
                <div className={styles.items}>
                    {data?.map((item) => {
                        return (
                            <Link
                                className={styles.user}
                                href={item.html_url}
                                target="_blank"
                            >
                                <Item
                                    avatar={item.avatar_url}
                                    type={item.type}
                                    login={item.login}
                                />
                            </Link>
                        )
                    })}
                </div>
            </Container>
        </Wrapper>
    )
}

export default Home
