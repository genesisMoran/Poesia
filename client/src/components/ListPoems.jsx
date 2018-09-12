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
                        {poem.content.split("/").map((text, index) => (<p key={index}>{text}</p>))}
                        <button
                            onClick={(ev) => {
                            ev.preventDefault();
                            props.handleEditPoem(poem)}} >
                            Edit Poem
                        </button>
                    </main>
                )
            })}
        </main>
    )
}

export default ListPoems;
