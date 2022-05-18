import React, { useState } from 'react';
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBotsTrap = ({ backSearch }) => {
    const [search, setSearch] = useState('')
    const clickSearch = () => {
        backSearch(search)
        setSearch('')
    }
    return (
        <Form className="d-flex ml-auto">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button
                className='ml-2'
                variant="outline-success"
                onClick={() => clickSearch()}
            >
                Search</Button>
        </Form>
    );
};

export default SearchBotsTrap;