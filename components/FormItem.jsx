import React, { useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../styles/modules/FormItem.module.css'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { show, hide, setName, setPassword } from '@/app/features/formSlice'

const FormItem = ({ title, type, isFocused, hint }) => {
    const dispatch = useDispatch()
    const isVisible = useSelector((state) => state.form.isVisible)
    const inputEl = useRef(null)

    return (
        <div className={styles.item}>
            <input
                ref={inputEl}
                className={styles.input}
                id={title}
                type={!isVisible && title === 'Password' ? 'password' : 'text'}
                autoFocus={isFocused}
                required={true}
                onChange={(event) => {
                    switch (title) {
                        case 'Password':
                            dispatch(setPassword(event.target.value))
                            break
                        case 'Name':
                            dispatch(setName(event.target.value))
                            break
                    }
                }}
            />
            {type === 'password' && (
                <div
                    className={styles.visibilityIconWrapper}
                    onMouseOver={(event) => dispatch(show())}
                    onMouseLeave={(event) => dispatch(hide())}
                >
                    {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
            )}
            <label className={styles.label} htmlFor={title}>
                {title}
            </label>
        </div>
    )
}

export default FormItem
