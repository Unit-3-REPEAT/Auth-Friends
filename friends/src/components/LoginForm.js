import React from 'react';


class LoginForm extends React.Component {

    state = {
        credentials: {
            username:'',
            password:''
        }
    }


    handleChange = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    
  
    


    render() {
        return (
            <form>
                <h3>Please log in:</h3>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange = {this.handleChange}
                    />
                    <br/>
    
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange = {this.handleChange}
                    />
                    <br/>
    
                    <button>Log in</button>
                
            </form>
        );
    }
    }
   

export default LoginForm;