import React from 'react';
import NewsCard from './NewsCard';

export default function NewsSection({ props }) {
    if (props.news.length !== 0) {
        return (
            <div className="card-deck m-1 justify-content-center">
                {props.news.map((news, index) => {
                    return (
                        <NewsCard
                            key={news.id}
                            id={news.id}
                            author={news.author}
                            description={news.description}
                            category={news.category}
                            image={news.image}
                            published={news.published}
                            title={news.title}
                            url={news.url}
                        />
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="card-deck m-1 justify-content-center">
                Nothing to display
            </div>
        );
    }
}
