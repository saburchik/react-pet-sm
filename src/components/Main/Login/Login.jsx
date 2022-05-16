// == Base:
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { createField, Input } from '../../common/FormControls'
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
            {createField("Enter email", "email", [required, maxLength20], Input)}
            {createField("Enter password", "password", [required, maxLength20], Input, { type: "password" })}
            <label>
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember me")}
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