import React from 'react';
import Menu from './Menu';

const MainLayout = ({ children }) => (
    <div className="main-layout">
        <Menu />
        <div className="main-content">
            {children}
        </div>
    </div>
)

export default MainLayout