//  React Native imports
import React from 'react';
import { SafeAreaView, Alert } from 'react-native';

// Modules Imports
import { useNavigation } from '@react-navigation/native';

// Styles Imports
import {
  LineColumn,
  LineRow,
  LineRowSB,
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
    <SafeAreaView>
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
          <NewsDate>{newsItem.date}</NewsDate>
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
                status: 'edit',
              });
            }}
            // onPress={() => {
            //   navigation.navigate('AddEditNews');
            // }}
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
                        status: 'delete',
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
    </SafeAreaView>
  );
};

export default ReadNews;
