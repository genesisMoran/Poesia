// cRud     Read
import React from 'react';

function ListPoems(props) {
    return(
        <main>
            {props.poems.map(poem => {
                return (
                    <main key={poem.id}>
                        <div>{poem.title}</div>
                        <div>{poem.content.split("/").map((text, index) => (<p key={index}>{text}</p>))}</div>
                    </main>
                )
            })}
        </main>
    )
}

export default ListPoems;
