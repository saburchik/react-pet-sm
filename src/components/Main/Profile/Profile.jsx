// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'

const Profile = ({ store }) => {
    return (
        <div className='profile'>
            <Personal />
            <MyPosts store={store} />
        </div>
    )
}

export default Profile