import { connect } from "react-redux";
import React, { Component } from "react";
import { readUser, setUser, pullStatus } from "../store/action";
import Forked from './Forked';
import Pull from './Pull';

//TODO: add error handling for no user
//TODO: add second fetch for push event URL

class Login extends Component {
  render() {

    const onSubmitFunc = event => {
      event.preventDefault();
      this.props.readUser(this.props.user);
    };

    const forkedRepos = events => {
      return this.props.events
        ? this.props.events.filter(event => event.type === "ForkEvent")
        : "";
    };

    const pullRepos = events => {
      let pullEvents = this.props.events
        ? this.props.events.filter(event => event.type === "PullRequestEvent")
        : "";

      let pullURLs = pullEvents.map(repo => repo.payload.pull_request.url);

      // queryEvents(pullURLs);

      return [pullEvents, pullURLs];
    };

    const queryEvents = urls =>{
      Promise.all(urls.map(url => this.props.pullStatus(url)))
      // .then(data => dispatchEvent(popPullStatus(data)))
    }


    //TODO: error handling if no such user
    //TODO: add error handling if user doesn't have any fork or pull events

    return (
      <div className="wrapper">
        <img src="../../assets/octoface.svg" alt="github cat face" className="gitLogo"/>
        <h1>Enter a Github User name:</h1>
        <form onSubmit={onSubmitFunc}>
          <input
            type="text"
            name="userId"
            id=""
            onChange={this.props.setUser}
          />
          <button type="submit">Submit</button>
        </form>
        {/* {console.log(pullURLs(this.props.events))} */}
        {/* {this.props.events ? this.props.pullStatus(pullRepos(this.props.events)): ""} */}
        <div className="flex-parent-row">
          <Forked forkRepos={forkedRepos(this.props.events)} />
          <Pull pullRepos={pullRepos(this.props.events)} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  events: state.events,
  pullStat: state.pullStat
  // merged: state.merged,
  // stateReq: state.stateReq
});

const mapDispatchToProps = {
  readUser,
  setUser,
  pullStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
