import React, {useState} from 'react';
import Card from './Components/Card';
import axios from 'axios'




class App extends React.Component {

   state = {
       userData: [],
       userFollower: []
   }

   componentDidMount() {
    fetch("https://api.github.com/users/francisngafua")
      .then(res => res.json())
      .then(data => {
        this.setState({ userData: data});
      })
      .catch(err => console.error(err));

      fetch("https://api.github.com/users/francis2023/followers")
      .then(res => res.json())
      .then(followers => {
        this.setState({ userFollower: followers});
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
       <div>
           <h1>Github User</h1>
           {this.state.userData.map(item => {
               return <Card userData={item} />
           })}
           <p>{userFollower}</p>
       </div>
    );
  }
}

export default App;