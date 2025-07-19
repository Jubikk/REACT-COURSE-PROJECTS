
function UserGreeting(props) {

  const WelcomeMessage = <h2 className="welcome-message">Welcome back! {props.username}</h2>;
  const SignInMessage = <h2 className="sign-in-message">Please sign in</h2>;

  return (props.isLoggedIn ? WelcomeMessage : SignInMessage);
  
}

export default UserGreeting