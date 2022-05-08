import React, { useState } from 'react';

function Button() {

    const [ search, setSearch ] = useState(false);

    return(
        <button className='button' onClick={() => setSearch(!search)}>
           Browse
        </button>
    )

}

export default Button;