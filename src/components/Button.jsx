import React from 'react'

import './Button.css'

function EmailButton(){  
    return(
        <button className='btn EmailButton'><i className="fa fa-envelope" aria-hidden="true"></i>Email</button>
    )
}

function LinkedInButton() {
    return(
        <button className='btn LinkedIn'><i className="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</button>
    )
}

export default function ButtonGroup() {
    return (
        <div className="ButtonGroup">
            <EmailButton />  <LinkedInButton />
        </div>

    )
}


