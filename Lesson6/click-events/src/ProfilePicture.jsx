
function ProfilePicture (){

  const imageUrl = './src/assets/profile-pic.jpg';

  const handleClick = (e) => e.target.style.display = 'none';

  return (<img onClick={(e) => handleClick(e)} src = {imageUrl} className = "ProfilePic"></img>);
 
}

export default ProfilePicture