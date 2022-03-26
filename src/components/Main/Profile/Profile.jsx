// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'

const Profile = ({ data, addPost }) => {
    return (
        <div className='profile'>
            <Personal />
            <MyPosts data={data} addPost={addPost} />
        </div>
    )
}

export default Profile