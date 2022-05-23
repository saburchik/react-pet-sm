// == Styles:
import "./Profile.scss";
// == Components:
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div className="profile">
      <ProfileInfo
        profile={profile}
        isOwner={isOwner}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
