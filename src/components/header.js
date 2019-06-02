import React from 'react';

import '../App.css';

const HeaderStyles = {
    container: {
        backgroundColor: 'white',
        padding: '30px',
        // borderRadius: '70px',
    },
    heading: {
        color: 'black',
        fontSize: '60px'
    }
}

const Header = (props) => {
    return (
        <div style={HeaderStyles.container} className='mt-3 mx-auto'>
            <h1 
                style={HeaderStyles.heading}
                className='text-center heading-title'
            >
                Tricky Clicks
            </h1>
        </div>
    )
}

export default Header;