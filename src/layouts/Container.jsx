import React from 'react';

const Container = ({children, style, ...attrs}) => {

    const nextStyle = {
        ...style,
        color: 'black',
    };

    return (
        <div className='ui-container' {...attrs} style={nextStyle}>
            {children}
        </div>
    )
}

export {Container};