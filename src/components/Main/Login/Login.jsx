// == Base:
import { Field, reduxForm } from 'redux-form'
// == Styles:
import './Login.scss'
// == Components:

const Login = () => {
    const onSubmit = (formData) => console.log(formData);

    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div >
    )
}

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="login" placeholder="Enter login" component="input" />
            <Field name="password" placeholder="Enter password" type="password" component="input" />
            <label htmlFor="rememberMe">
                <Field name="rememberMe" type="checkbox" id="rememberMe" component="input" />
                Remember me
            </label>
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default Login