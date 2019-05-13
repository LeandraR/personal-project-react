import React from "react";
import PullSingleRepo from './PullSingleRepo';

const Pull = props => (
    <div className="flex-parent">
        {props.pullRepos[0].length ? <h2>Pull Requests:</h2> : ""}
        <PullSingleRepo reposToList={props.pullRepos[0]} repoUrls={props.pullRepos[1]}/>
    </div>
);

export default Pull;