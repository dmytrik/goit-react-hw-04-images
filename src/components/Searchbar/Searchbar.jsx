import React, { useState } from 'react';

import propTypes from 'prop-types';
import {
  SearchbarBox,
  Form,
  Input,
  SearchBtn,
  IconSearch,
} from './Searchbar.styled';

export const Searchbar = ({ submitName }) => {
  const [searchName, setSearchName] = useState('');

  const handleSearchChange = e => {
    setSearchName(e.currentTarget.value);
  };

  const submitSearchName = e => {
    e.preventDefault();
    submitName(searchName);
  };

  return (
    <SearchbarBox>
      <Form onSubmit={submitSearchName}>
        <Input type="text" onChange={handleSearchChange}></Input>
        <SearchBtn type="submit">
          <IconSearch />
        </SearchBtn>
      </Form>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  submitName: propTypes.func.isRequired,
};
