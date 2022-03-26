// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'

const Profile = ({ data, addPost, updatePostText }) => {
    return (
        <div className='profile'>
            <Personal />
            <MyPosts data={data} addPost={addPost} updatePostText={updatePostText} />
        </div>
    )
}

export default Profile