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
        const {email: username, password} = this.state
        const response = await api.post('/api/login', {username, password})
        localStorage.setItem('token', response.data.token)
    }

    testToken = async () => {
        const response = await api.get('/api/admin')
        console.log(response)
    }

    logout = () => {
        localStorage.removeItem('token')
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
                <input type="button" value="Test" onClick={this.testToken} />
                <input type="button" value="Logout" onClick={this.logout} />
            </div>
        )
    }
}

export default Login