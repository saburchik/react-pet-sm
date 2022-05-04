// == Base:
import { Field, reduxForm } from 'redux-form'
// == Styles:
import './Login.scss'

const LoginForm = () => {

    return (
        <form>
            <input placeholder="Enter login" />
            <input placeholder="Enter password" type="password" />
            <label htmlFor="loginCheckbox">
                <input type="checkbox" id="loginCheckbox" />
                Remember me
            </label>
            <button>Submit</button>
        </form>
    )
}


export default LoginForm