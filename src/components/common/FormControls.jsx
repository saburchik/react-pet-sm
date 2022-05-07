// == Styles:
import './FormControls.scss'

const FormControl = ({ input, meta, Tag, ...props }) => {
    const hasError = meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
            (meta.warning && <span>{meta.warning}</span>))

    return (
        <div className={'form-control ' + (hasError ? 'error' : '')}>
            <Tag {...input} {...props} />
            {hasError}
        </div>
    )
}

export const Textarea = (props) => <FormControl Tag="textarea"  {...props} />
export const Input = (props) => <FormControl Tag="input"  {...props} />