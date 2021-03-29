//  React Native imports
import React from 'react';
import { Alert } from 'react-native';

// Modules Imports
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';

// Styles Imports
import {
  LineColumn,
  LineRow,
  RowElement,
  NewsTitleContainer,
  NewsTitle,
  NewsAuthorLabel,
  NewsAuthor,
  NewsDateLabel,
  NewsDate,
  NewsContentScroll,
  NewsContent,
  NewsManagementContainer,
  NewsManagementButton,
  NewsManagementButtonText,
} from './styles';

const ReadNews = ({ route }) => {
  const { newsItem } = route.params;

  const navigation = useNavigation();

  return (
    <>
      <NewsTitleContainer>
        <NewsTitle numberOfLines={3}>{newsItem.title}</NewsTitle>
      </NewsTitleContainer>
      <LineColumn>
        <RowElement>
          <NewsAuthorLabel>Autor: </NewsAuthorLabel>
          <NewsAuthor numberOfLines={1}>{newsItem.author}</NewsAuthor>
        </RowElement>
        <RowElement>
          <NewsDateLabel>Última atualização: </NewsDateLabel>
          <NewsDate>{moment(newsItem.date).format('DD/MM/YYYY')}</NewsDate>
        </RowElement>
      </LineColumn>
      <NewsContentScroll>
        <NewsContent>{newsItem.newsContent}</NewsContent>
      </NewsContentScroll>
      <NewsManagementContainer>
        <LineRow style={{ justifyContent: 'space-between' }}>
          <NewsManagementButton
            onPress={() => {
              navigation.navigate('AddEditNews', {
                newsItem,
                action: 'edit',
              });
            }}
          >
            <NewsManagementButtonText>EDITAR</NewsManagementButtonText>
          </NewsManagementButton>
          <NewsManagementButton
            onPress={() => {
              Alert.alert(
                'Exclusão da Notícia',
                'Você tem certeza que deseja excluir essa notícia?',
                [
                  { text: 'Não', style: 'cancel' },
                  {
                    text: 'Sim',
                    onPress: () => {
                      navigation.navigate('ListNews', {
                        newsItem,
                        action: 'delete',
                      });
                    },
                  },
                ],
              );
            }}
          >
            <NewsManagementButtonText>EXCLUIR</NewsManagementButtonText>
          </NewsManagementButton>
        </LineRow>
      </NewsManagementContainer>
    </>
  );
};

export default ReadNews;
