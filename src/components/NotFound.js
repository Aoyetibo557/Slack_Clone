import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="notfound">
            <h1>Error 404</h1>
            <p>Page Not Found</p>
            <h3>Hey man, that link doesn't exist in this app. Go back.</h3>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound
