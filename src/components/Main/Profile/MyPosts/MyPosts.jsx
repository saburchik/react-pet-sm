// == Base:
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator, valueEmpty } from '../../../../utils/validators/validators'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'
import { Textarea } from '../../../common/FormControls'

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
const maxLength10 = maxLengthCreator(10)

const MyPostForm = ({ handleSubmit }) => {

    return (
        <form className='posts__textarea' onSubmit={handleSubmit}>
            <Field
                name="newPost"
                component={Textarea}
                validate={[required, maxLength10, valueEmpty]}
            />
            <button>Add post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({ form: 'addPost' })(MyPostForm)

export default MyPosts