// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ profile }) => {
    return (
        <div className='profile'>
            <Personal profile={profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile