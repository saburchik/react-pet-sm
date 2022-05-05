// == Base:
import { addPostActionCreate } from '../../../../redux/reducers/profile-reducer'
// == Components:
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        defaultValue: state.ProfilePage.defaultValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreate(newPost))
        },
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer