import React from 'react';

function ListPoems(props) {
    console.log(props)
    return(
        <main>
            {props.poems.map(poem => {
                return (
                    <main key={poem.id}>
                        <div>{poem.title}</div>
                            {/* The following makes it possible for the poem content
                                to be broken up into a new line where necessary */}
                        <div>{poem.content.split("/").map((text, index) => (<p key={index}>{text}</p>))}</div>
                        <div>{props.users.map(user => {
                            if (poem.user_id === user.id) {
                            return (
                            <div key={user.id}>
                                Author: <div>{user.first_name} {user.last_name}</div> 
                            </div> )}
                        })}</div>
                        <button
                            onClick={(ev) => {
                            ev.preventDefault();
                            props.handleEditPoem(poem)}} >
                            Edit Poem
                        </button>
                        <button
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
