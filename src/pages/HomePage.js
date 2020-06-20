import React from 'react';
import { Image } from 'react-bootstrap';

import profilePic from '../files/myPhoto.jpg';
import CV from '../files/CV.pdf';

const HomePage = () => {
    return (
        <>
            <div className="text-center" style={{ backgroundColor: '#84a9ac' }}>
                <h2 className="p-3">Hi! I'm Rotariu Alex</h2>
                <p className="m-3">
                    I'm a third year student at AC UPT from Lugoj, Timis.
                </p>
                <Image className="p-2" src={profilePic} rounded />
                <div>
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                </div>
            </div>
        </>
    );
};

export default HomePage;
