import React, { Component } from 'react';

class AddPoem extends Component {
    constructor(props) {
        super(props);
// Had to hard-code `user_id` in order for this to work 
        // `user_id: 5` is currently for New User
        this.state = {
            title: '',
            content: '',
            user_id: 5,
            first_name: '',     // Moving forward
            last_name: ''       // Moving forward
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
                {/* GIF courtesy of GIPHY */}
                <img alt="Rose" src="https://media.giphy.com/media/YGSpb7oIhENa/giphy.gif"></img>
                <form onSubmit={this.handleSubmit}>
                    <p>Title:</p>
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        placeholder="Título"
                        onChange={this.handleChange} />
                    <p>Content:</p>
                    <textarea class="textarea" placeholder="La vida es Poesía..." rows="12"
                        name="content"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleChange} />   
                    <input class="button is-primary is-inverted"
                        type="submit"
                        value="Add A Poem" />
                </form>
            </main>
        );
    }
}

export default AddPoem;
