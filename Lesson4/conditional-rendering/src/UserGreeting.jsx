
function UserGreeting(props) {

  returrn (props.isLoggedIn ? <h2>Welcome back! {props.username}</h2> : 
                              <h2>Please sign in</h2>);

}

export default UserGreeting