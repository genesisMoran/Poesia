import React from 'react';

function ListPoems(props) {
    return(
        <main>
            {props.poems.map(poem => {
                return (
                    <main key={poem.id}>
                        <div>{poem.title}</div>
                            {/* The following makes it possible for the poem content
                                to be broken up into a new line where necessary */}
                        <div>{poem.content.split("/").map((text, index) => (<p key={index}>{text}</p>))}</div>
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
