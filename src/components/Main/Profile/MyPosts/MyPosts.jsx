// == Base:
import React from 'react'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const MyPosts = ({ data, addPost }) => {
    const state = data.ProfilePage

    let newPostEl = React.createRef()

    const onAddPost = () => {
        debugger
        let text = newPostEl.current.value
        addPost(text)
        newPostEl.current.value = ''
    }

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea ref={newPostEl} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <aside className='posts__wrapper'>
                {
                    state.posts.map(pos => <Post id={pos.id} message={pos.message} />)
                }
            </aside>
        </article>
    )
}

export default MyPosts