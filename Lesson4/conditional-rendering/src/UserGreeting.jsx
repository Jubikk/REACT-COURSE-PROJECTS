
function UserGreeting(props) {

  return (props.isLoggedIn ? <h2 className = "welcome-message">Welcome back! {props.username}</h2> : 
                              <h2 className = "sign-in-message">Please sign in</h2>);

}

export default UserGreeting