import React from "react";


const SingleRepo = (props) => (
    <ul>
        {props.reposToList.map(repo => <li key={repo.id} className="list-item"><a href={`https:/github.com/${repo.repo.name}`} target="_blank" rel="noopener noreferrer">{repo.repo.name}</a></li>)}
    </ul>
);


export default SingleRepo;