import { Component } from 'react'
// == Styles:
import './PersonalStatus.scss'


class PersonalStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('times')
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        ///console.log(e.currentTarget.value)
        this.setState({ status: e.currentTarget.value })
    }

    render() {
        console.log('render')
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
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        type="text"
                    />
                }
            </div>
        )
    }
}

export default PersonalStatus