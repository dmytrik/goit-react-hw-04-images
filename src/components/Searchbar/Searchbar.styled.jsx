import styled from '@emotion/styled';
import { GrFormSearch } from 'react-icons/gr';

export const SearchbarBox = styled.div`
  padding: 20px;
  background-color: #3f51b5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
`;

export const Form = styled.form``;
export const Input = styled.input``;
export const SearchBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  transform: translate(-100%, 20%);
  cursor: pointer;
`;

export const IconSearch = styled(GrFormSearch)`
  width: 20px;
  height: 20px;
`;
