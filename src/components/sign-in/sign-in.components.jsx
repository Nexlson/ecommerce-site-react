import React, { Component } from 'react'
import FormInput from '../formInput/form-input.components'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.components'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email: "", password: ''})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name]: value})
    }

    render(){
        const {email, password} = this.state
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput type="password" name='password' value={password} required handleChange={this.handleChange} label='Password'/>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn