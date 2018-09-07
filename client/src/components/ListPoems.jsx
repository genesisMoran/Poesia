// cRud     Read
import React from 'react';

function ListPoems(props) {
    return(
        <main>
            {props.poems.map(poem => (
                <div key={poem.poem_id}></div>
            ))}
        </main>
    )
}

export default ListPoems;
