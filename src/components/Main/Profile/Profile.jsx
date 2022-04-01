// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = () => {
    return (
        <div className='profile'>
            <Personal />
            <MyPostsContainer />
        </div>
    )
}

export default Profile