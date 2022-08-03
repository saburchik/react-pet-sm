import ProfileStatusClass from './ProfileStatusClass'
import { Input, Textarea } from '../../../common/FormControls'
import { Field, reduxForm } from 'redux-form'
// == Styles:
import './ProfileInfo.scss'

function ProfileDataForm({
  profile,
  status,
  updateStatus,
  handleSubmit,
  error,
}) {
  return (
    <form className='personal__info' onSubmit={handleSubmit}>
      <button>Save</button>
      {error && <div className='login__error'>{error}</div>}
      <h3 className='title-h3'>
        <b>{profile.fullName}</b>
        <Field placeholder='Full Name' name='fullName' component={Input} />
      </h3>
      <ul>
        <li>
          <b>Ищу работу:</b>
          <Field
            placeholder='Full Name'
            name='lookingForAJob'
            type='checkbox'
            component={Input}
          />
        </li>
        <li>
          Описание желаемой работы:
          <Field
            placeholder='Enter a description'
            name='lookingForAJobDescription'
            component={Textarea}
          />
        </li>
        <li>
          About Me:
          <Field
            placeholder='About you'
            name='aboutMe'
            validate={[]}
            component={Textarea}
          />
        </li>
        <li>
          Статус:
          <ProfileStatusClass status={status} updateStatus={updateStatus} />
        </li>
        <ul className='personal__contacts'>
          <p>Contacts:</p>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                <b>{key}</b>
                <Field
                  name={`contacts.${key}`}
                  component={Input}
                  placeholder={key}
                />
              </div>
            )
          })}
        </ul>
      </ul>
    </form>
  )
}

const ProfileReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileReduxForm
