import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogle, inverted, ...others }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'google-sign-in' : ''} custom-button`} {...others}>
        {children}
    </button>  
)

export default CustomButton
