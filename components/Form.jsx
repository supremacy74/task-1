import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/modules/Form.module.css'

import { login } from '../app/features/formSlice'

import FormItem from '@/components/FormItem'
import Button from '@/components/Button'

const Form = ({ items, buttonText }) => {
    const dispatch = useDispatch()
    const isAuthorized = useSelector((state) => state.form.isAuthorized)
    const isError = useSelector((state) => state.form.isError)

    const router = useRouter()

    useEffect(() => {
        console.log(isAuthorized)

        localStorage.setItem('isAuthorized', JSON.stringify(isAuthorized))

        if (isAuthorized) {
            router.push('/profile')
        }
    }, [isAuthorized])

    return (
        <form className={`${styles.form} ${items.length > 3 && styles.many}`}>
            <div className={styles.items}>
                {items.map((item) => {
                    return (
                        <FormItem
                            key={item.id}
                            title={item.title}
                            type={item.type}
                            isFocused={item.isFocused}
                            hint={item.hint}
                        />
                    )
                })}
            </div>
            {isError && (
                <p className={styles.wrong}>Invalid username or password.</p>
            )}
            <Button
                content={buttonText}
                onClick={(event) => {
                    event.preventDefault()
                    dispatch(login())
                }}
            />
        </form>
    )
}

export default Form
