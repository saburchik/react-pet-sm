// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ store }) => {
    return (
        <div className='profile'>
            <Personal />
            <MyPostsContainer store={store} />
        </div>
    )
}

export default Profile