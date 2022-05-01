// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus }) => {
    return (
        <div className='profile'>
            <Personal profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile