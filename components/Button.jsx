import React from 'react'
import styles from '../styles/modules/Button.module.css'

const Button = ({ content, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
