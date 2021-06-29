import React, {Component} from 'react'
import api from './service/api'

class Login extends Component {

    initalState = {
        email: '',
        password: ''
    }

    state = this.initalState

    handleChange = (e) => {
        const {name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    submitForm = async () => {
        console.log(this.state.email)
        console.log(this.state.password)
        const {email, password} = this.state
        const token = await api.post('/api/authenticate', {email, password})
    }

    render () {

        const {email, password} = this.state

        return (
            <div>
                <label>E-mail</label>
                <input id="email" type="email" name="email" value={email} onChange={this.handleChange}/>
                <label>Password</label>
                <input id="password" type="password" name="password" value={password} onChange={this.handleChange}/>
                <input type="button" value="Login" onClick={this.submitForm} />
            </div>
        )
    }
}

export default Login