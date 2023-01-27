import React from 'react'

import Head from 'next/head'

import styles from '../styles/modules/Container.module.css'

const Container = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
