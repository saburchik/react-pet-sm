// == Styles:
import './Profile.scss'
// == Components:
import Personal from './Personal/Personal'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <main className='profile'>
            <Personal />
            <Posts />
        </main>
    )
}

export default Profile