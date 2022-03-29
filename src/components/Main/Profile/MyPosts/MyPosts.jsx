// == Base:
import React from 'react'
import { updateActionChange, addPostActionCreate } from '../../../../redux/reducers/profile-reducer'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const MyPosts = ({ store }) => {
    const state = store.getState().ProfilePage
    const postState = store.getState().ProfilePage.postState

    let newPostEl = React.createRef()

    const changeText = () => {
        let text = newPostEl.current.value
        let action = updateActionChange(text)
        store.dispatch(action)
    }

    const onAddPost = () => {
        store.dispatch(addPostActionCreate())
    }

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea ref={newPostEl} value={postState} onChange={changeText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <aside className='posts__wrapper'>
                {
                    state.posts.map(pos => <Post key={pos.id} id={pos.id} message={pos.message} />)
                }
            </aside>
        </article>
    )
}

export default MyPosts