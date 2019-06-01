import React from 'react';

const HeaderStyles = {
    color: 'grey',
    backgroundColor: 'white',
    padding: '40px'
}

const Header = (props) => {
    return(
        <div style={HeaderStyles}>
            <h1>Tricky Clicks</h1>
        </div>
    )
}

export default Header;