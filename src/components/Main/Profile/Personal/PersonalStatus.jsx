import { Component } from 'react'
// == Styles:
import './PersonalStatus.scss'


class PersonalStatus extends Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        debugger
        console.log('this: ', this);
        this.setState({ // setState is async 
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    :
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text" />}
            </div>
        )
    }
}

export default PersonalStatus