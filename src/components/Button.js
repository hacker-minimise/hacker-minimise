import React, { useState } from 'react';

function Button(props) {

    const [ search, setSearch ] = useState(false);

    return(
        <button className='button' onClick={() => setSearch(!search)}>
           Browse
        </button>
    )

}

export default Button;