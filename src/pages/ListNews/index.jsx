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
  const [news, setNews] = useState([
    {
      id: '123',
      author:
        'Aliquam convallis non neque id malesuada de Oliveira da Silva Lima',
      date: Date.now(),
      title:
        'Praesent lacinia tristique viverra. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      newsContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus elementum ex, eu rhoncus metus tempus a. Suspendisse in egestas nibh. Aenean sagittis nulla sit amet leo vestibulum interdum. Morbi et nulla mauris. Aliquam ut suscipit eros, ac elementum ipsum. Nulla leo massa, tristique non hendrerit non, faucibus quis odio.',
    },
    {
      id: '456',
      author: 'Aliquam convallis non neque id malesuada de Oliveira da Silva',
      date: Date.now(),
      title:
        'Praesent lacinia tristique viverra. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      newsContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus elementum ex, eu rhoncus metus tempus a. Suspendisse in egestas nibh. Aenean sagittis nulla sit amet leo vestibulum interdum. Morbi et nulla mauris. Aliquam ut suscipit eros, ac elementum ipsum. Nulla leo massa, tristique non hendrerit non, faucibus quis odio.',
    },
    {
      id: '789',
      author: 'Aliquam convallis non neque id malesuada de Oliveira da Silva',
      date: Date.now(),
      title:
        'Praesent lacinia tristique viverra. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      newsContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus elementum ex, eu rhoncus metus tempus a. Suspendisse in egestas nibh. Aenean sagittis nulla sit amet leo vestibulum interdum. Morbi et nulla mauris. Aliquam ut suscipit eros, ac elementum ipsum. Nulla leo massa, tristique non hendrerit non, faucibus quis odio.',
    },
  ]);
  const [newsItem, setNewsItem] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    console.log(route);
    if (route.params !== undefined) {
      const { action, newsItem: item } = route.params;
      setNewsAction(action);
      setNewsItem(item);
    }
  }, [route]);

  useEffect(() => {
    if (newsAction === 'saved') {
      const arrIndex = news.findIndex(newsEl => newsEl.id === newsItem.id);
      news[arrIndex] = newsItem;
      setNews(news);
      setNewsAction('');
    }
  }, [newsAction]);

  useEffect(() => {
    // console.log('news', news);
    // console.log('action newsItem', action.newsItem);
    // console.log('action status', action.status);
  }, [news]);

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
