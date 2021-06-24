import {Component} from 'react'

class NoteForm extends Component{

    state = {
        name: '',
        description: '',

    }

    handleChange =e => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit =e => {
        console.log("hi")
        e.preventDefault()
        this.props.addNote(this.state)
    }

    renderOptions = () => {
        return this.props.categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
    }


    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} className="ui form">
                <h4 className="ui dividing header">New Note Form</h4>
                <div className="two fields">
                    <label>Title</label>
                    <div className="field">
                        <input onChange={this.handleChange} type="text" name="name" placeholder="Title"/>
                    </div>
                    <label>Description</label>
                    <div className="field">
                    <input onChange={this.handleChange} type="text" name="description" placeholder="Description"/>
                    </div>
                </div>
                <select onChange={this.handleChange} name="category_id" className="ui selection dropdown">
                    {this.renderOptions()}
                </select>
                <button type="submit" className="ui submit button">Create Note</button>
            </form>
            </div>
        )
    }
}
export default NoteForm