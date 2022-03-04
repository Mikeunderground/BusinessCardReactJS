import React from 'react';
// import ReactDOM from 'react-dom';
import './Card.css';
import PortraitPic from './PortraitPic';

import CardBody from './CardBody';
import CardSocialMedia from './CardSocialMedia';

export default function Card(){
    return (
        <div className='Container'>
            <div className="Card">
                <PortraitPic />
                <CardBody />
                <CardSocialMedia />
            </div>
        </div>
    )
} 

