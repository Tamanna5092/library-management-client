import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            {/* navbar */}
            
            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}

        </div>
    );
};

export default Root;