// == Base:
import React from 'react'
import { Field, reduxForm } from 'redux-form'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const MyPosts = ({ posts, addPost }) => {
    const onSubmit = (values) => {
        addPost(values.newPost)
        values.newPost = ''
    }

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <MyPostReduxForm onSubmit={onSubmit} />
            <aside className='posts__wrapper'>
                {
                    posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)
                }
            </aside>
        </article>
    )
}

const MyPostForm = ({ handleSubmit }) => {
    return (
        <form className='posts__textarea' onSubmit={handleSubmit}>
            <Field name="newPost" component="textarea" />
            <button>Add post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({ form: 'mypost' })(MyPostForm)

export default MyPosts