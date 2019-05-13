import React from "react";
import PullRequestStatus from './PullRequestStatus';


const PullSingleRepo = ({repoUrls, reposToList}) => (
    <ul className="flex-parent-pull">
        {reposToList.map((repo, i) => <li key={repo.id}><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer" className="list-item pull-list-item flex-parent-row">{repo.payload.pull_request.title} <PullRequestStatus info={repo} url={repoUrls[i]} status={repo.payload.action} merged={repo.payload.pull_request.merged} /></a>
        </li>)}
    </ul>
);

export default PullSingleRepo;