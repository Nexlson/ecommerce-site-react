import React from 'react'
import './signInPage.styles.scss'
import SignIn from '../../components/sign-in/sign-in.components'
import SignUp from '../../components/sign-up/sign-up.components'

const SignInPage = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInPage