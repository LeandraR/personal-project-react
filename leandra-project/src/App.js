import React, { Component } from 'react';
import Login from './components/Login';
import Forked from './components/Forked';
import Pull from './components/Pull';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: "",
      userRepos: [],
      searchName: true,
      loggedIn: false,
      pullURL:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.searchUser();
  };

  searchUser = () => {
    let username = this.state.userName;
    const url = `https://api.github.com/users/${username}/events`;
    fetch(url)
      .then(results => results.json())
      .then(data => {
        if(!data.length){
          this.setState({
            searchName: false
          })
        } else {
          this.setState({
            userRepos: data,
            searchName: true
        })
      }
    })
      .catch(err => console.log(err))
  };


  render(){

    const forkedRepos = events => {
      return this.state.userRepos
        ? this.state.userRepos.filter(event => event.type === "ForkEvent")
        : "";
    };

    const pullRepos = events => {
      return this.state.userRepos
        ? this.state.userRepos.filter(event => event.type === "PullRequestEvent")
        : "";
    };



    return (
      <div className="App wrapper">
        <img src="../../assets/octoface.svg" alt="github cat face" className="gitLogo" />
        <Login
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          userName={this.props.userName}
        />
        {this.state.searchName ? (
          <div className="flex-parent-row">
            <Forked results={forkedRepos(this.state.userRepos)} />
            <Pull results={pullRepos(this.state.userRepos)}
            />
          </div>
        ) : (
          "Please try another user name"
        )}
      </div>
    );

  }
}

export default App;
