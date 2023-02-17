import React, { useState } from 'react'

import styles from '../styles/modules/Articles.module.css'

import { useGetPostsQuery } from '@/app/jsonplaceholder/jsonplaceholder.api'

import {
    useGetNewStoriesQuery,
    useGetItemQuery
} from '../app/hacker-news/hacker-news.api'

import Wrapper from '@/layouts/Wrapper'
import Container from '@/layouts/Container'

import Heading from '@/components/Heading'

const Articles = () => {
    const [isUpdating, setIsUpdating] = useState(false)
    const {
        data: newStories = [],
        isFetching,
        refetch
    } = useGetNewStoriesQuery({
        refetchOnMountOrArgChange: true,
        refetchInterval: 60000 // обновляем каждые 60 секунд
    })

    const handleUpdateClick = () => {
        setIsUpdating(true)
        refetch().finally(() => setIsUpdating(false))
    }

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <Wrapper>
            <Container>
                <button onClick={handleUpdateClick} disabled={isUpdating}>
                    {isUpdating ? 'Updating...' : 'Update'}
                </button>
                <div className={styles.articles}>
                    {newStories.map((storyId) => (
                        <StoryCard key={storyId} id={storyId} />
                    ))}
                </div>
            </Container>
        </Wrapper>
    )
}

const StoryCard = ({ id }) => {
    const { data: story, isFetching } = useGetItemQuery(id)

    if (isFetching) {
        return <div>Loading...</div>
    } else {
        console.log(story)
    }

    return (
        <div>
            <h2>{story.title}</h2>
            <p>
                {story.score} points | {story.by} |{' '}
                {new Date(story.time * 1000).toLocaleString()}
            </p>
            <a
                href={`http://localhost:3000/news/${story.id}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Read more
            </a>
        </div>
    )
}

export default Articles
