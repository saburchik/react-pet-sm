// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'

const Profile = ({ data }) => {
    return (
        <div className='profile'>
            <Personal />
            <MyPosts data={data} />
        </div>
    )
}

export default Profile