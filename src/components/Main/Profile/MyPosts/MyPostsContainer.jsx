// == Base:
import React from 'react'
import { updateActionChange, addPostActionCreate } from '../../../../redux/reducers/profile-reducer'
// == Components:
import MyPosts from './MyPosts'

const MyPostsContainer = ({ store }) => {
    const state = store.getState().ProfilePage
    const postState = store.getState().ProfilePage.postState

    let ref = React.createRef()

    const updatePostText = () => {
        let text = ref.current.value
        let action = updateActionChange(text)
        store.dispatch(action)
    }

    const addPost = () => {
        store.dispatch(addPostActionCreate())
    }

    return (
        <>
            <MyPosts ref={ref} state={state} postState={postState} updatePostText={updatePostText} addPost={addPost} />
        </>
    )
}

export default MyPostsContainer