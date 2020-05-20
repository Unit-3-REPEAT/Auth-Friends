import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

class FriendsList extends React.Component {
    state = {
        friends: []
    }
   
    componentDidMount(){
        this.getData();
    }

    //GET REQUEST TO FETCH DATA
    //getData here
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            // console.log(response);
            //response.data
            this.setState({friends: response.data})
            console.log(this.state.friends);
        })
        .catch(error => {
            console.log(error)
        })
    }
    



    render(){
        console.log(`friends -->`, this.state.friends)
        return (
            <section>
                <AddFriendForm/>
                <h2>This is where friends should go:</h2>
                {this.state.friends.map((friend) => {
                    return (
                        <div key={friend.id}>
                            <h3>Name: {friend.name} </h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>    
                    )

                })}
            </section>
        )
    }
}

export default FriendsList;