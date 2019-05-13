import React from "react";
import PullRequestStatus from './PullRequestStatus';


const PullSingleRepo = (props) => (
    <ul>
        {props.reposToList.map(repo => <li key={repo.id} className="list-item"><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.payload.pull_request.title}</a>
        <PullRequestStatus status={repo.payload.pull_request.url} />
        </li>)}
    </ul>
);

export default PullSingleRepo;