import React from 'react'

import { useGetItemQuery } from '@/app/hacker-news/hacker-news.api'

import styles from '../styles/modules/Comments.module.css'

const Comment = ({ id }) => {
    const [showChildren, setShowChildren] = React.useState(false)

    const { data, isLoading } = useGetItemQuery(id)

    if (isLoading) {
        return <div>Loading...</div>
    }

    const { by, title, kids, text } = data

    const toggleShowChildren = () => {
        setShowChildren(!showChildren)
    }

    return (
        <div className={styles.comment}>
            <div>{by}</div>
            <div>{text}</div>
            {kids && (
                <button className={styles.show} onClick={toggleShowChildren}>
                    {showChildren ? 'Hide replies' : 'Show replies'}
                </button>
            )}
            {showChildren && (
                <div className={styles.comments} style={{ marginLeft: 20 }}>
                    {kids.map((id) => (
                        <Comment key={id} id={id} />
                    ))}
                </div>
            )}
        </div>
    )
}

const Comments = ({ comments }) => {
    return (
        <div className={styles.comments}>
            {comments.map((id) => (
                <Comment key={id} id={id} />
            ))}
        </div>
    )
}

export default Comments
