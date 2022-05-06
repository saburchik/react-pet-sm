
// == Styles:
import './FormControls.scss'


export const Textarea = ({ input, meta, ...props }) => {
    //debugger

    const hasError = meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
            (meta.warning && <span>{meta.warning}</span>))

    return (
        <div className={'form-control' + hasError ? 'error' : null}>
            <textarea {...input} {...props} />
            {hasError}
        </div>
    )
}