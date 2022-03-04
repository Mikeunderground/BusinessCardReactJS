import React from 'react';
import './PortraitPic.css';
import pic from '../images/portraitPic.jpeg';

function PortraitPic() {
    return(
        <div className="PicContainer">
            <img alt='business man' src={pic}></img>
        </div>
    )
}

export default PortraitPic;