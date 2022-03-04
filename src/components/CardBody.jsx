import React from 'react';
import './CardBody.css'
import ButtonGroup from './Button';

function CardBody() {
    return (
        <div className='CardBody'>
            <div className= "CardHeader">
                <h2 className="Name">Lawish Smith</h2>
                <h6 className="jobTitle">Frontend Developer</h6>
                <a className="websiteLink" href="www.google.com">lawishsmith.website</a>
            </div>
            <div className='MajorButtonGroup'>
                <ButtonGroup />
            </div>
            <div className='blurb'>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and 
                    automating daily tasks. I try to keep up with security and best practices, 
                    and am always looking for new things to learn.
                </p>
                <h3 className="SecondHeader">Interests</h3>
                <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                Entreprener. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>

    )
}

export default CardBody;