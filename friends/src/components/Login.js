import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';



class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
  
    handleChange = e => {
        // console.log(e);
        this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
        })
    }

    //POST REQUST TO LOGIN IN
    login = e => {
        e.preventDefault();
        // make a POST request to the login endpoint
        // _if_ the creds match what's in the database, the server will return a JSON web token
        // set the token to localStorage (sessions)
        // navigate the user to the "/protected" route
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(response => {
                console.log(`->`, response);
                console.log(`this.props.history`, this.props.history);
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/protected')              
                
            })
            .catch(err => console.log(err))
    }


    

    render(){
         
        return (
            <div>
               <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <br/>


                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                      />
                      <br/>

                    <button>Login</button>

                </form>    
            </div>    
        )
    }
}

export default Login;