// == Base:
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators'
import { Input } from '../../common/FormControls'
import { login, logout } from '../../../redux/reducers/auth-reducer'
// == Styles:
import './Login.scss'
import { Redirect } from 'react-router-dom'
import { Field } from 'redux-form'

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }

  if (isAuth) {
    return <Redirect to='/profile' />
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

const maxLength20 = maxLengthCreator(30)
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='email'
        component={Input}
        validate={[required, maxLength20]}
        placeholder='Enter email'
      />
      <Field
        name='password'
        type='password'
        component={Input}
        validate={[required, maxLength20]}
        placeholder='Enter password'
      />
      <label>
        <Field name='rememberMe' type='checkbox' component={Input} /> Remember
        me
      </label>
      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl && (
        <Field
          name='captcha'
          component={Input}
          validate={[required]}
          placeholder='Enter symbols from image'
        />
      )}

      {error && <div className='login__error'>{error}</div>}
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.Auth.captchaUrl,
    isAuth: state.Auth.isAuth,
  }
}

export default connect(mapStateToProps, { login, logout })(Login)
