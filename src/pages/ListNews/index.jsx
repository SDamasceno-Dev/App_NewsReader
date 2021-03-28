// React Imports
import React, { useState, useEffect } from 'react';
import { TextInput, FlatList } from 'react-native';

// Modules Imports
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';

// Styles imports
import {
  Container,
  LineRow,
  InputContainer,
  NewsContainer,
  NewsAuthorText,
  NewsDateText,
  NewsContentText,
  NewsTitleText,
} from './styles';

const ListNews = ({ route }) => {
  const [newsAction, setNewsAction] = useState('');
  const [newsStatus, setNewsStatus] = useState('');
  const [news, setNews] = useState([
    {
      id: '123',
      author: 'Autor01',
      date: Date.now(),
      title: 'Title01',
      newsContent: 'Content01',
    },
    {
      id: '456',
      author: 'Autor02',
      date: Date.now(),
      title: 'Title02',
      newsContent: 'Content02',
    },
    {
      id: '789',
      author: 'Autor03',
      date: Date.now(),
      title: 'Title03',
      newsContent: 'Content03',
    },
  ]);
  const [newsItem, setNewsItem] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    console.log('@ListNews useEffect_route.params', route.params);
    if (route.params !== undefined) {
      const { action, newsItem: item, newsStatus: status } = route.params;
      setNewsAction(action);
      setNewsItem(item);
      setNewsStatus(status);
    }
  }, [route]);

  useEffect(() => {
    // console.log('@useEffect_newsAction newsStatus', newsStatus);
    if (newsAction === 'saved' && newsStatus === 'old') {
      const arr = [...news];
      const arrIndex = news.findIndex(newsEl => newsEl.id === newsItem.id);
      arr[arrIndex] = newsItem;
      setNews(arr);
    }

    if (newsAction === 'saved' && newsStatus === 'new') {
      // setNews(news => [...news, newsItem]);
    }
  }, [newsAction]);

  return (
    <Container>
      <InputContainer>
        <TextInput
          placeholder="Pesquisar notícias..."
          placeholderTextColor="#ccc"
          style={{ color: '#022C64' }}
        />
      </InputContainer>
      <FlatList
        style={{ minHeight: '100%' }}
        data={news}
        keyExtractor={newsItem => newsItem.id}
        renderItem={({ item: newsItem }) => {
          return (
            <NewsContainer
              onPress={() => navigation.navigate('ReadNews', { newsItem })}
            >
              <LineRow style={{ justifyContent: 'space-between' }}>
                <NewsAuthorText numberOfLines={1}>
                  {newsItem.author}
                </NewsAuthorText>
                <NewsDateText>
                  {moment(newsItem.date).format('DD/MM/YYYY')}
                </NewsDateText>
              </LineRow>
              <NewsTitleText numberOfLines={2}>{newsItem.title}</NewsTitleText>
              <NewsContentText numberOfLines={2}>
                {newsItem.newsContent}
              </NewsContentText>
            </NewsContainer>
          );
        }}
      />
    </Container>
  );
};

export default ListNews;
