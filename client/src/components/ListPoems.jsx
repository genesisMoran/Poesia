// cRud     Read
import React from 'react';

function ListPoems(props) {
    return(
        <main>
            {props.poems.map(poem => {
                return (
                    <div key={poem.id}>
                        <p>{poem.title}</p>
                        <p>{poem.content}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default ListPoems;