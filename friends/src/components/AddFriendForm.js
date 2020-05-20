import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    state = {
        newFriend: {
            name:'',
            age:'',
            email:''           
        }       
        
    }
    


    handleChange = (e) => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name] : e.target.value
            }
            
        })
    }

    //POST REQUEST TO ADD A FRIEND
    addFriend = (e) => {
        // Only way I can add a friend is if page rerenders
        //  e.preventDefault();

        axiosWithAuth()
        .post('/api/friends', this.state.newFriend)
        .then((response) => {
            console.log(`------>`, response)
        })
        .catch(err => {console.log(err.response)})

        

    }

    render(){
        // console.log(`newFriend -->`, this.state.newFriend);

        return (
            <form onSubmit={this.addFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                />
                <br/>

                <input 
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                />
                <br/>

                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                />
                <br/>
                <button>Add friend</button>
                
            </form>    
        )
    }

}

export default AddFriendForm;