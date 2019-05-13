import React, { Component } from "react";
// import { connect } from "react-redux";
// import { pullStatus } from "../store/action";

const PullRequestStatus = (props) =>{

// class PullRequestStatus extends Component {
    // componentDidMount() {
    //     this.props.pullStatus(this.props.url)
    // }

// render(){


        const pullReqStatus = (merge, status) => {

            if (!merge && status === 'opened') {
                return 'open'
            }else if (!merge && status === 'closed') {
                return 'closed'
            } else if (merge) {
                return 'merged'
            }
        }



        return (
            <p className="status">
                <span className={props ? pullReqStatus(props.merged, props.status): ""}>
                    {props ? pullReqStatus(props.merged, props.status): ""}
                </span>
            </p>
        )
    // }
};


export default PullRequestStatus;

// const mapStateToProps = state => ({
//     stateReq: state.stateReq
// });

// const mapDispatchToProps = {
//     pullStatus,
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(PullRequestStatus);