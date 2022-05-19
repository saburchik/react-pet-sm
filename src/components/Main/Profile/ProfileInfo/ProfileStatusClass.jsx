import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode ?
                    <span className="status__span" onDoubleClick={this.activateEditMode}>
                        {this.state.status === '' ? 'Не указан' : this.state.status}
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

export default ProfileStatus;