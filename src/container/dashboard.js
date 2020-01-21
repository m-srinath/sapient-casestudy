import React from 'react';
import FilterLister from './FilterLister';

export const Dashboard = (props) => {
    return (
        <div>
            <nav className="header navbar navbar-expand-md navbar-light bg-faded"></nav>
            <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                <FilterLister />
            </div>
        </div>
        
    )
}

export default Dashboard;