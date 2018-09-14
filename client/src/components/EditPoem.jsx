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
                <form onSubmit={this.handleSubmit} >
                {/* GIF courtesy of GIPHY, Alastair Gray */}
                <img alt="Movement" src="https://media.giphy.com/media/xTiTnHLbEuUDuBFiUw/giphy.gif"></img>
                    <p>Title:</p>
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        placeholder="Título"
                        onChange={this.handleChange} />
                    <p>Content:</p>
                    <textarea class="textarea" placeholder="Struck by inspiration and need to edit your poem? Well, here you go!" rows="12"
                        name="content"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleChange} />
                    <input class="button is-primary is-inverted"
                        type="submit"
                        value="Submit Your Changes!" />
                </form>
            </main>
        );
    }
}

export default EditPoem;
