// React Imports
import React, { useState, useEffect, useCallback } from 'react';
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
  SearchButton,
  NewsContainer,
  NewsAuthorText,
  NewsDateText,
  NewsContentText,
  NewsTitleText,
  NewsButtonNew,
  NewsButtonNewText,
} from './styles';

const ListNews = ({ route }) => {
  const [news, setNews] = useState([
    {
      id: '123',
      author: 'Autor01',
      date: Date.now(),
      title: 'Title01',
      newsContent: 'Content01 Flávia',
    },
    {
      id: '456',
      author: 'Autor02',
      date: Date.now(),
      title: 'Title02',
      newsContent: 'Content02 Sandro',
    },
    {
      id: '789',
      author: 'Autor03',
      date: Date.now(),
      title: 'Title03',
      newsContent: 'Content03 meninos',
    },
  ]);
  const [newsAction, setNewsAction] = useState('');
  const [newsStatus, setNewsStatus] = useState('');
  const [newsItem, setNewsItem] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [newsSearch, setNewsSearch] = useState('');
  const [newsIndexResult, setNewsIndexResult] = useState([]);

  const navigation = useNavigation();

  /**  Functions  * */

  // Find news with the term searched
  const handleSearchNews = srcTerm => {
    const arr = [];
    // In case of search nothing
    if (srcTerm.replace(/ /g, '') === '') {
      setNewsSearch([]);
      return;
    }
    news.map((el, index) => {
      if (el.newsContent.includes(srcTerm)) {
        arr.push(index);
      }
      if (el.author.includes(srcTerm)) {
        arr.push(index);
      }
      if (el.title.includes(srcTerm)) {
        arr.push(index);
      }
    });
    setNewsIndexResult(arr);
  };

  // Create new array with news searched
  const newsSearchedArray = () => {
    const arr = [...new Set(newsIndexResult)];
    const arrNews = [];
    for (let i = 0; i < arr.length; i += 1) {
      arrNews.push(news[arr[i]]);
    }
    setNewsSearch(arrNews);
  };

  useEffect(() => {
    newsSearchedArray();
  }, [newsIndexResult]);

  useEffect(() => {
    console.log('newsSearch', newsSearch.length);
  }, [newsSearch]);

  useEffect(() => {
    if (route.params !== undefined) {
      const { action, newsItem: item, newsStatus: status } = route.params;
      setNewsAction(action);
      setNewsItem(item);
      setNewsStatus(status);
    }
  }, [route]);

  useEffect(() => {
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
    // console.log('searchTerm', searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <InputContainer>
        <TextInput
          placeholder="Pesquisar notícias..."
          placeholderTextColor="#ccc"
          style={{ color: '#022C64', width: '85%' }}
          onChangeText={text => {
            setSearchTerm(text);
          }}
          autoCapitalize="none"
        />
        <SearchButton
          onPress={() => {
            handleSearchNews(searchTerm);
          }}
        />
      </InputContainer>
      <FlatList
        style={{ height: '80%' }}
        data={newsSearch.length > 0 ? newsSearch : news}
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
