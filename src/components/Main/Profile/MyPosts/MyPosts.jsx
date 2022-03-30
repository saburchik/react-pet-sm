// == Base:
import React from 'react'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const MyPosts = ({ updatePostText, addPost, state, postState, ref }) => {
    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea ref={ref} value={postState} onChange={updatePostText} />
                <button onClick={addPost}>Add post</button>
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