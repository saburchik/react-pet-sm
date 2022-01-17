// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import Posts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className='profile'>
            <Personal />
            <Posts />
        </div>
    )
}

export default Profile