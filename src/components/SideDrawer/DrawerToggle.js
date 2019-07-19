import React from 'react';

import './DrawerToggle.css';

const drawerToggle = props => (
    <button className="toggle-button">
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default drawerToggle;