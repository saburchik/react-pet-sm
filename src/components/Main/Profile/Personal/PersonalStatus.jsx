import { Component } from 'react'
// == Styles:
import './PersonalStatus.scss'


class PersonalStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this: ', this);
        this.setState({ // setState is async 
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span className="status__span" onDoubleClick={this.activateEditMode}>
                        {this.props.status === null ? 'Не указан' : this.props.status}
                    </span>
                    :
                    <input
                        className="status__input"
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.state.status}
                        type="text"
                    />
                }
            </div>
        )
    }
}

export default PersonalStatus