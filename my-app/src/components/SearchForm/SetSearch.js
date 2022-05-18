import React from 'react';
import SearchBotsTrap from './SearchBotsTrap';


const SetSearch = () => {
    const search = (seachMessege) => {
        console.log(seachMessege)
    };
    return (
        <SearchBotsTrap backSearch={search} />
    );
};

export default SetSearch;