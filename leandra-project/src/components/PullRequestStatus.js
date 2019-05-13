import React, { Component } from "react";

class PullRequestStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mergeStatus: {}
        }

    }

    componentDidMount(){
        fetch(this.props.status)
        .then(res => res.json())
        .then(res => this.setState({
            mergeStatus: res
        }))
    }

    render() {
        const pullStatus = (response) => {
            if (response.merged){
                return 'merged'
            }else if (!response.merged && response.state === 'closed'){
                return 'closed'
            } else {
                return 'open'
            }
        }

        return (
            <p className="status">
                <span className={pullStatus(this.state.mergeStatus)}>{pullStatus(this.state.mergeStatus)}</span>

            </p>
        )
    }

};

export default PullRequestStatus;