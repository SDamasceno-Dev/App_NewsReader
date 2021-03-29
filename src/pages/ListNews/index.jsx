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
  NewsButtonNew,
  NewsButtonNewText,
} from './styles';

const ListNews = ({ route }) => {
  const [newsAction, setNewsAction] = useState('');
  const [newsStatus, setNewsStatus] = useState('');
  const [news, setNews] = useState([]);
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
    console.log('newsAction', newsAction);
    // Save a new news
    if (newsAction === 'saved' && newsStatus === 'new') {
      setNews([...news, newsItem]);
      setNewsAction('done');
    }

    // Modify a news item
    if (newsAction === 'saved' && newsStatus === 'old') {
      const arr = [...news];
      const arrIndex = news.findIndex(newsEl => newsEl.id === newsItem.id);
      arr[arrIndex] = newsItem;
      setNews(arr);
      setNewsAction('done');
    }

    // Delete a news item
    if (newsAction === 'delete') {
      console.log('entrou delete');
      setNews(news.filter(newsEl => newsEl.id !== newsItem.id));
    }
  }, [newsAction]);

  useEffect(() => {
    // console.log('news', news);
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
        style={{ minHeight: '80%' }}
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
      <NewsButtonNew
        onPress={() => {
          navigation.navigate('AddEditNews');
        }}
      >
        <NewsButtonNewText>CADASTRAR NOVA NOTÍCIA</NewsButtonNewText>
      </NewsButtonNew>
    </Container>
  );
};

export default ListNews;
