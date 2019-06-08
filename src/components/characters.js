import React from 'react';

const CharacterStyles = {
    color: 'white',
    borderColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid'
}
const Characters = props => {
    console.log(props.characters[0]);
    return(
        <div style={CharacterStyles} className='mt-5 mx-auto text-center'>
            <img src={props.characters[0].src} alt={props.characters[0].alt}/>
        </div>
    )
}

export default Characters;