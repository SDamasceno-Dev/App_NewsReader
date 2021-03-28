//  React Native imports
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// Styles Import
import {
  Container,
  LineColumn,
  LineRow,
  NewsEditAddAuthorContainer,
  NewsEditAddAuthorLabel,
  NewsEditAddAuthorFieldContainer,
  NewsEditAddTitleContainer,
  NewsEditAddTitleLabel,
  NewsEditAddTitleFieldContainer,
  NewsEditAddTextContainer,
  NewsEditAddTextLabel,
  NewsEditAddTextFieldContainer,
  NewsManagementContainer,
  NewsManagementButton,
  NewsManagementButtonText,
} from './styles';

const NewsAddEdit = ({ route }) => {
  const [action, setAction] = useState({});

  useEffect(() => {
    if (route.params !== undefined) {
      const { newsItem, status } = route.params;
      setAction({ newsItem, status });
    }
  }, [route]);

  useEffect(() => {
    console.log('action', action);
    console.log('action newsItem', action.newsItem);
    console.log('action status', action.status);
  }, [action]);

  return (
    <Container>
      <NewsEditAddAuthorContainer>
        <LineColumn>
          <NewsEditAddAuthorLabel>Autor da Notícia</NewsEditAddAuthorLabel>
          <NewsEditAddAuthorFieldContainer />
        </LineColumn>
      </NewsEditAddAuthorContainer>
      <NewsEditAddTitleContainer>
        <LineColumn>
          <NewsEditAddTitleLabel>Título da Notícia</NewsEditAddTitleLabel>
          <NewsEditAddTitleFieldContainer />
        </LineColumn>
      </NewsEditAddTitleContainer>
      <NewsEditAddTextContainer>
        <LineColumn>
          <NewsEditAddTextLabel>Texto da Notícia</NewsEditAddTextLabel>
          <NewsEditAddTextFieldContainer />
        </LineColumn>
      </NewsEditAddTextContainer>
      <NewsManagementContainer>
        <LineRow style={{ justifyContent: 'center' }}>
          <NewsManagementButton
            onPress={() => {
              navigation.navigate('AddEditNews', {
                newsItem,
                status: 'edit',
              });
            }}
          >
            <NewsManagementButtonText>SALVAR</NewsManagementButtonText>
          </NewsManagementButton>
        </LineRow>
      </NewsManagementContainer>
    </Container>
  );
};

export default NewsAddEdit;
