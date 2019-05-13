import React from "react";
import SingleRepo from './SingleRepo';
// import { checkPropTypes } from "prop-types";

//TODO: create list component & pass title as prop
const Forked = props => (
    <div className="flex-parent">
    {props.forkRepos.length ? <h2>Forked Repos:</h2> : ""}
        <SingleRepo reposToList={props.forkRepos}/>
    </div>
);

export default Forked;