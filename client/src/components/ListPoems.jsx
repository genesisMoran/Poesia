import React from 'react';

function ListPoems(props) {
    return(
        <main>
            {props.poems.map(poem => {
                return (
                    <main key={poem.id}>
                        <div className="Title">{poem.title}</div>
                            {/* The following makes it possible for the poem content
                                to be broken up into a new line where necessary */}
                        <div>{poem.content.split("/").map((text, index) => (<p key={index}>{text}</p>))}</div>
                        <div className="Author">
                        {props.users.map(user => {
                            if (poem.user_id === user.id) {
                            return (
                            <div key={user.id}>
                                Author: <div>{user.first_name} {user.last_name}</div> 
                            </div> )}
                        })}</div>
                        <button class="button is-primary is-inverted"
                            onClick={(ev) => {
                            ev.preventDefault();
                            props.handleEditPoem(poem)}} >
                            Edit Poem
                        </button>

                        <button class="button is-primary is-inverted"
                            onClick={(ev) => {
                            ev.preventDefault();
                            props.handleDeletePoem(poem)}} >
                            Delete Poem
                        </button>
                    </main>
                )
            })}
        </main>
    )
}

export default ListPoems;
