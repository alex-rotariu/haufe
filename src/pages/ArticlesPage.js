import React, { useState } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import { fetchNews } from '../actions';
import NewsSection from '../components/NewsSection';

function ArticlesPage(props) {
    const [searchKey, setSearchKey] = useState('');

    const onSearchChange = (event) => {
        setSearchKey(event.target.value);
    };

    const getNews = () => {
        props.fetchNews(searchKey);
    };

    return (
        <div
            className="container-fluid justify-content-center"
            style={{ backgroundColor: '#84a9ac' }}
        >
            <h1 className="text-center">Articles Page</h1>
            <div className="form-inline mx-auto container row justify-content-md-center">
                <SearchBox searchChange={onSearchChange} />
                <div>
                    <button
                        className="text-center btn btn-primary"
                        type="submit"
                        onClick={getNews}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="container">
                <NewsSection props={props} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { news: state.news };
};

export default connect(mapStateToProps, { fetchNews })(ArticlesPage);
