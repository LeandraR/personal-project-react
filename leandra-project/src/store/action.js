export const setUser = event => ({
  type: "SET_USER",
  user: event.target.value
});

const popState = events => ({
  type: "SET_EVENTS",
  events
});

export const readUser = userId => dispatch => {
  fetch(`https://api.github.com/users/${userId}/events`)
    .then(res => res.json())
    .then(events => dispatch(popState(events)))
    .catch(err => console.log(err));
};

const popPullStatus = pullStat => ({
  type: "SET_STATUS",
  pullStat
});

export const pullStatus = repo => dispatch => {
    fetch(repo)
    .then(res => res.json())
    .then(status => dispatch(popPullStatus(status)))
    .catch(err => console.log(err));
};

