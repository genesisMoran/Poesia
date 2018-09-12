import React from 'react';

function EditPoem(props) {
    return(
        <main>
            <form onSubmit={props.handleUpdatePoem} >
                <input
                    name="title"
                    type="text"
                    value={props.title}
                    placeholder="title"
                    onChange={props.handleChange} />
                <input
                    name="content"
                    type="text"
                    value={props.content}
                    placeholder="content"
                    onChange={props.handleChange} />
                <input
                    type="submit"
                    value="Edit" />
            </form>
        </main>
    )
}

export default EditPoem;
