// React Imports
import React from 'react';
import { TextInput } from 'react-native';

// Styles imports
import { InputContainer } from './styles';

const ListNews = () => {
  return (
    <InputContainer>
      <TextInput
        placeholder="Pesquisar notícias..."
        placeholderTextColor="#ccc"
        style={{ color: '#022C64' }}
      />
    </InputContainer>
  );
};

export default ListNews;
