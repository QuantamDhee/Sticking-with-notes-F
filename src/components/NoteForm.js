import {Component} from 'react'
// import { Link } from 'react-router-dom'

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
        // console.log("hi")
        e.preventDefault()
        this.setState({
            name: '',
            description: '',    
        })
        this.props.addNote(this.state)
    }

    renderCat = () => {
        return this.props.categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
    }
    
    renderUser = () => {
        return this.props.users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)
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
                <option value="" selected disabled hidden>Category</option>
                    {this.renderCat()}
                </select>
                <br/>
                <select onChange={this.handleChange} name="user_id" className="ui selection dropdown">
                <option value="" selected disabled hidden>User</option>
                    {this.renderUser()}
                </select>
                <button type="submit" className="ui submit button">Create Note</button>
                {/* <Link to='/categories/notes' className='back-button'> <button className= 'ui button'>back</button></Link> */}
            </form>
            </div>
        )
    }
}
export default NoteForm