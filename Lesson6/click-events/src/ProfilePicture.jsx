
function ProfilePicture (){

  const imageUrl = './src/assets/profile-pic.jpg';

  const handleClick = () => console.log('Profile picture clicked!');

  return (<img onClick={handleClick} src = {imageUrl} className = "ProfilePic"></img>);
 
}

export default ProfilePicture