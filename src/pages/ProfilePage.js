import React, { Component } from 'react';

import stanCasa1 from '../files/StanCasa1.jpg';
import stanCasa2 from '../files/StanCasa2.jpg';

class ProfilePage extends Component {
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <div
                className="container text-center justify-content-md-center"
                style={{ backgroundColor: '#84a9ac' }}
            >
                <div className="row">
                    <div className="col-sm p-2">
                        <header className="font-weight-bold">
                            User experience
                        </header>
                        <hr />
                        <ul>
                            <li>
                                <h4>
                                    RPG 3D Project for Computer Graphics course
                                </h4>
                                <p>
                                    This project is created in Unity and it
                                    involved designing a small map and building
                                    some fighting and walking mechanisms for the
                                    characters. During this project I got
                                    familiar with the Unity development platform
                                    and also learned how to put in practice one
                                    or two Design Patters.
                                </p>
                                <a
                                    href={
                                        'https://github.com/alex-rotariu/RPG-Project'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Go to RPG-Project
                                </a>
                            </li>
                            <br />
                            <li>
                                <h4>iCorrupt Android game</h4>
                                <p>
                                    I created this project with a fellow
                                    colleague for a laboratory assignment. It is
                                    also created in Unity and it is
                                    cookie-clicker styled game with political
                                    references. This game allows the user to
                                    sign in, choose one from 13 characters and
                                    keeps track of his score(money) through
                                    Firebase database. To get better in the
                                    leaderboard, the user has to buy upgrades
                                    that are almost unique for every character.
                                </p>
                                <a
                                    href={
                                        'https://github.com/alex-rotariu/iCorrupt'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Go to iCorrupt
                                </a>
                            </li>
                            <br />
                            <li>
                                <h4>HandyMan App</h4>
                                <p>
                                    I started learning React this year during
                                    the Liga AC laboratory held by Nagarro. This
                                    is the application that we are currently
                                    working on, it's goal is to connect people
                                    that have a job to be done(gardening,
                                    walking a dog, painting a room etc.) with a
                                    handyman that is willing to do that job. The
                                    app uses React for the frontend, Node for
                                    the backend and MongoDB for the database.
                                </p>
                                <a
                                    href={
                                        'https://github.com/NagarroLabs/HandyMan'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Go to HandyMan
                                </a>
                            </li>
                            <br />
                            <li>
                                <h4>Stan Casa</h4>
                                <p>
                                    This project was created with three fellow
                                    students for a university lab and we aimed
                                    to control the lighting in a room with a
                                    Arduino according to information received by
                                    bluetooth from a mobile applcation made in
                                    Android Studio. This project can open or
                                    close the curtains depending on the desired
                                    light set by the user and also control the
                                    intensity of the led's.
                                </p>
                                <img
                                    src={stanCasa1}
                                    alt=""
                                    className="w-100 p-2"
                                />
                                <img
                                    src={stanCasa2}
                                    alt=""
                                    className="w-100 p-2"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm p-2">
                        <header className="font-weight-bold">IT Blogs</header>
                        <hr />
                        <ul>
                            <li>
                                <a
                                    href={'https://medium.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    medium.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://mashable.com/?europe=true'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    mashable.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        'https://www.reddit.com/r/technology/'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    reddit/technology
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://www.theverge.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    theverge.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://www.udemy.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    udemy.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
