import React, { Component } from 'react';

class EditPoem extends Component {
    constructor(props) {
        super(props);
        const { poem } = this.props;
        this.state = {
            title: poem.title,
            content: poem.content,
            id: poem.id
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            id: this.state.id
        }
        this.props.onSubmit(data);
    }

    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <main>
                Test
                <form onSubmit={this.handleSubmit} >
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        placeholder="title"
                        onChange={this.handleChange} />
                    <input
                        name="content"
                        type="text"
                        value={this.state.content}
                        placeholder="content"
                        onChange={this.handleChange} />
                    <input
                        type="submit"
                        value="Edit" />
                </form>
            </main>
        );
    }
}

export default EditPoem;
