// == Styles:
import { useEffect, useState } from 'react'
import './PersonalStatus.scss'


const PersonalStatusHook = ({ status, updateStatus }) => {

    const [editMode, setEditMode] = useState(false)
    const [statusState, setStatusState] = useState(status)

    useEffect(() => {

        setStatusState(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(statusState)
    }

    const onStatusChange = (e) => {
        setStatusState(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <span className="status__span" onDoubleClick={activateEditMode}>
                    {status === '' ? 'Не указан' : status}
                </span>
                :
                <input
                    className="status__input"
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={statusState}
                    type="text"
                />
            }
        </div>
    )
}

export default PersonalStatusHook