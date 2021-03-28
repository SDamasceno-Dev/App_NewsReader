//  React Native imports
import React, { useEffect, useState } from 'react';
import { TextInput, Alert } from 'react-native';

// Modules Imports
import { useNavigation } from '@react-navigation/native';

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
  const [action, setAction] = useState('');
  const [news, setNews] = useState({
    author: '',
    date: '',
    id: '',
    newsContent: '',
    title: '',
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (route.params !== undefined) {
      const { newsItem, status } = route.params;
      setNews(newsItem);
      setAction({ status });
    }
  }, [route]);

  useEffect(() => {
    if (action === 'saved') {
      Alert.alert('Sucesso', 'A notícia foi alterada!');
      navigation.navigate('ListNews', { newsItem: news, action });
    }
  }, [action]);

  return (
    <Container>
      <>
        <NewsEditAddAuthorContainer>
          <LineColumn>
            <NewsEditAddAuthorLabel>Autor da Notícia</NewsEditAddAuthorLabel>
            <NewsEditAddAuthorFieldContainer>
              <TextInput
                defaultValue={news.author}
                onChangeText={text => setNews({ ...news, author: text })}
              />
            </NewsEditAddAuthorFieldContainer>
          </LineColumn>
        </NewsEditAddAuthorContainer>
        <NewsEditAddTitleContainer>
          <LineColumn>
            <NewsEditAddTitleLabel>Título da Notícia</NewsEditAddTitleLabel>
            <NewsEditAddTitleFieldContainer>
              <TextInput
                defaultValue={news.title}
                onChangeText={text => setNews({ ...news, title: text })}
              />
            </NewsEditAddTitleFieldContainer>
          </LineColumn>
        </NewsEditAddTitleContainer>
        <NewsEditAddTextContainer>
          <LineColumn>
            <NewsEditAddTextLabel>Texto da Notícia</NewsEditAddTextLabel>
            <NewsEditAddTextFieldContainer>
              <TextInput
                multiline
                defaultValue={news.newsContent}
                onChangeText={text => setNews({ ...news, newsContent: text })}
              />
            </NewsEditAddTextFieldContainer>
          </LineColumn>
        </NewsEditAddTextContainer>
        <NewsManagementContainer>
          <LineRow style={{ justifyContent: 'center' }}>
            <NewsManagementButton
              onPress={() => {
                setNews({
                  ...news,
                  date: Date.now(),
                });
                setAction('saved');
              }}
            >
              <NewsManagementButtonText>SALVAR</NewsManagementButtonText>
            </NewsManagementButton>
          </LineRow>
        </NewsManagementContainer>
      </>
    </Container>
  );
};

export default NewsAddEdit;
