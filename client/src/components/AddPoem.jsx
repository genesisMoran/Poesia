// cRud     CREATE
import React, { Component } from 'react';

class AddPoem extends Component {
    constructor(props) {
        super(props);
// NOTE - Not sure if I need all of these in state
// Had to hard-code `user_id` in order for this to work 
        this.state = {
            title: '',
            content: '',
            user_id: 1,
            first_name: '',
            last_name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange} />
                    <input 
                        name="content"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleChange} />   
                    <input 
                        type="submit"
                        value="Add a poem" />
                </form>
            </main>
        );
    }
}

export default AddPoem;
