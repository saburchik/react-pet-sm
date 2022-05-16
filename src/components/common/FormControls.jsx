// == Base:
import { Field } from 'redux-form'
// == Styles:
import './FormControls.scss'

const FormControl = ({ input, meta: { touched, error, warning }, Tag, ...props }) => {
    const hasError = touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))

    return (
        <div className={'form-control ' + (hasError ? 'error' : '')}>
            <Tag {...input} {...props} />
            {hasError}
        </div>
    )
}

export const Textarea = (props) => <FormControl Tag="textarea"  {...props} />
export const Input = (props) => <FormControl Tag="input"  {...props} />

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />{text}
    </>
)