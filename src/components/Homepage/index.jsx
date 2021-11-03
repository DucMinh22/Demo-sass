import React from 'react';
import './index.scss';

export const Homepage = () => {
    return (
        <div className="tr__home-page">
            <div className="tr__home-page--logo">
                <h3>SASS DEMO</h3>
            </div>
            <div className="tr__home-page--title">
                <div>Title left</div>
                <div>Title right</div>
            </div>
            <div className="tr__home-page--card">
                <ul>
                    <li>Hello</li>
                    <li>welcome to my presentation</li>
                    <li>How are you?</li>
                </ul>
            </div>
        </div>
    )
};
