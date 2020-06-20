import React from 'react';
import './NewsCard.css';

const NewsCard = ({
    author,
    category,
    description,
    id,
    image,
    published,
    title,
    url
}) => {
    return (
        <div className="card text-center m-2" style={{ minWidth: '300px' }}>
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <p className="card-text">{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Go to website
                </a>
                <h6 className="card-subtitle mb-2 mt-3 text-muted">
                    Author: {author}
                </h6>
            </div>
        </div>
    );
};

export default NewsCard;
