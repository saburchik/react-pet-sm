// == Styles:
import './ProfileInfo.scss'
// == Components:
import Preloader from '../../../common/Preloader'
import Avatar from '../../../common/Avatar'
import { useState } from 'react'
import ProfileReduxForm from './ProfileReduxForm'
import ProfileStatusClass from './ProfileStatusClass'

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false)
  if (!profile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className='personal'>
      <img
        src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614764808_2-p-zadnie-foni-dlya-fotoshopa-2.jpg'
        alt='background'
      />
      <div className='personal__inner'>
        <header className='personal__header'>
          <Avatar className='personal__avatar' avatar={profile.photos.large} />
          {isOwner && (
            <input
              className='personal__file'
              type='file'
              onChange={onPhotoSelected}
            />
          )}
          <div className='personal__noti'>
            <button>
              <svg className='linkedin' viewBox='0 0 448 512'>
                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
              </svg>
            </button>
            <button>
              <svg className='bell' viewBox='0 0 448 512'>
                <path d='M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z'></path>
              </svg>
            </button>
          </div>
          {editMode ? (
            <ProfileReduxForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
              status={status}
              updateStatus={updateStatus}
            />
          ) : (
            <ProfileData
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              isOwner={isOwner}
              onEditMode={() => setEditMode(true)}
            />
          )}
        </header>
      </div>
    </div>
  )
}

const ProfileData = ({
  profile,
  status,
  updateStatus,
  isOwner,
  onEditMode,
}) => {
  return (
    <article className='personal__info'>
      {isOwner && <button onClick={onEditMode}>edit</button>}
      <h3 className='title-h3'>{profile.fullName}</h3>
      <ul>
        <li>
          Ищу работу:
          <b>{profile.lookingForAJob === true ? 'Да' : 'Не ищу'}</b>
        </li>
        {profile.lookingForAJob && (
          <li>
            Описание желаемой работы:
            <b>{profile.lookingForAJobDescription}</b>
          </li>
        )}
        <li>
          About Me:
          <b>{profile.aboutMe}</b>
        </li>
        <li>
          Статус:
          <ProfileStatusClass status={status} updateStatus={updateStatus} />
        </li>
        <ul className='personal__contacts'>
          <p>Contacts:</p>
          {Object.keys(profile.contacts).map((elem) => {
            return (
              <Contact
                key={elem}
                contactTitle={elem}
                contactValue={profile.contacts[elem]}
              />
            )
          })}
        </ul>
      </ul>
    </article>
  )
}

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li>
      {contactTitle}
      <b>{contactValue}</b>
    </li>
  )
}

export default ProfileInfo
