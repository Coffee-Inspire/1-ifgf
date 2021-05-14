import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div>Sorry Not Found the Page</div>
            <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;