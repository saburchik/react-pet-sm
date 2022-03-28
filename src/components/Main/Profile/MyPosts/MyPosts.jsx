// == Base:
import React from 'react'
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
        store.dispatch({ type: 'UPDATE-POST-TEXT', newText: text }) // updatePostText(text)
    }

    const onAddPost = () => {

        store.dispatch({ type: 'ADD-POST' }) // addPost()
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