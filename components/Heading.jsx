import React from 'react'

import styles from '../styles/modules/Heading.module.css'

const Heading = ({ priority, children }) => {
    const Tag = `h${priority}`

    return <Tag className={`${styles.heading} ${styles[Tag]}`}>{children}</Tag>
}

export default Heading
