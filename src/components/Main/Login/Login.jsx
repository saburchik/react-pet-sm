// == Base:
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormControls'
import { login, logout } from '../../../redux/reducers/auth-reducer'
// == Styles:
import './Login.scss'
import { Redirect } from 'react-router-dom'

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        // console.log(formData.email, formData.password, formData.rememberMe);
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div >
    )
}

const maxLength20 = maxLengthCreator(30)
const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Enter email" component={Input} validate={[required, maxLength20]} />
            <Field name="password" placeholder="Enter password" type="password" component={Input} validate={[required, maxLength20]} />
            <label>
                <Field name="rememberMe" type="checkbox" component={Input} />
                Remember me
            </label>
            {error && <div className="login__error">{error}</div>}
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, { login, logout })(Login)