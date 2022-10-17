<<<<<<< HEAD
import { useState } from 'react';
=======
import React, { useState } from 'react';

>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
import propTypes from 'prop-types';
import {
  SearchbarBox,
  Form,
  Input,
  SearchBtn,
  IconSearch,
} from './Searchbar.styled';

<<<<<<< HEAD
export default function Searchbar({ submitName }) {
=======
const Searchbar = ({ submitName }) => {
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
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
<<<<<<< HEAD
        <SearchBtn type="submit">Пошук</SearchBtn>
      </Form>
    </SearchbarBox>
  );
}
=======
        <SearchBtn type="submit">
          <IconSearch />
        </SearchBtn>
      </Form>
    </SearchbarBox>
  );
};
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307

Searchbar.propTypes = {
  submitName: propTypes.func.isRequired,
};
