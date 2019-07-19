import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div>
                <DrawerToggle />
            </div>
            <div className="toolbar_logo"><a href="/">Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li><a href="/">About LocoMocoSec</a></li>
                    <li><a href="/">Presenters</a></li>
                    <li><a href="/">Buy tickets</a></li>
                    <li><a href="/">Location</a></li>
                    <li><a href="/">Sponsers</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>

            </div>
        
        </nav>



    </header>
);

export default toolbar;