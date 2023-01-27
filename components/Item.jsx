import React from 'react'

import styles from '../styles/modules/Item.module.css'

import Heading from '@/components/Heading'

const Item = ({ avatar, type, login }) => {
    return (
        <div className={styles.item}>
            <img className={styles.avatar} src={avatar} alt="user avatar" />
            <div className={styles.body}>
                <Heading priority={5}>{login}</Heading>
            </div>
        </div>
    )
}

export default Item
