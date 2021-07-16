import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogle, ...others }) => (
    <button className={`${isGoogle ? 'google-sign-in' : ''} custom-button`} {...others}>
        {children}
    </button>  
)

export default CustomButton
