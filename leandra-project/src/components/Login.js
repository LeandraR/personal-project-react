import React from 'react';

class Login extends React.Component {

  render() {
    return (
        <div className="body flex-parent">
        <h1>Please Input a GitHub user name</h1>
            <form onSubmit={this.props.handleSearch}>
                <input type="text" name="username" placeholder="Username" onChange={this.props.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }
}

export default Login;