// == Styles:
import './Profile.scss'
// == Components:
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus }) => {
    return (
        <div className='profile'>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile