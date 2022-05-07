// == Base:
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormControls'
import { login, logout } from '../../../redux/reducers/auth-reducer'
// == Styles:
import './Login.scss'

const Login = ({ login }) => {
    const onSubmit = (formData) => {
        console.log(formData.email, formData.password, formData.rememberMe);
        login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div >
    )
}

const maxLength10 = maxLengthCreator(10)
const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Enter email" component={Input} validate={[required, maxLength10]} />
            <Field name="password" placeholder="Enter password" type="password" component={Input} validate={[required, maxLength10]} />
            <label>
                <Field name="rememberMe" type="checkbox" component={Input} />
                Remember me
            </label>
            <button>Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(null, { login, logout })(Login)