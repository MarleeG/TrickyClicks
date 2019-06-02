import React from 'react';

const CharacterStyles = {
    color: 'white',
    borderColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid'
}
const Characters = props => {
    return(
        <div style={CharacterStyles} className='mt-5 mx-auto text-center'>
            I'm the character list
        </div>
    )
}

export default Characters;