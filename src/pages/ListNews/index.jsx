// React Imports
import React, { useState, useEffect, useCallback } from 'react';
import { TextInput, FlatList, Alert } from 'react-native';

// Modules Imports
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';

// Assets imports
import ReadNewsIcon from '../../components/CustomIcon';

// Styles imports
import {
  Container,
  LineRow,
  TotalNews,
  InputContainer,
  SearchButton,
  NoNewsContainer,
  NoNewsText,
  NewsContainer,
  NewsAuthorText,
  NewsDateText,
  NewsContentText,
  NewsTitleText,
  NewsButtonNew,
  NewsButtonNewText,
} from './styles';

const ListNews = ({ route }) => {
  const [news, setNews] = useState([]);
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
    if (arr.length === 0) {
      Alert.alert(
        'Pesquisa de Notícias',
        `Não foram encontradas notícias com o termo: ${srcTerm}.`,
      );
    }
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
      setNewsSearch([]);
    }

    // Modify a news item
    if (newsAction === 'saved' && newsStatus === 'old') {
      const arr = [...news];
      const arrIndex = news.findIndex(newsEl => newsEl.id === newsItem.id);
      arr[arrIndex] = newsItem;
      setNews(arr);
      setNewsAction('done');
      setNewsSearch([]);
    }

    // Delete a news item
    if (newsAction === 'delete') {
      setNews(news.filter(newsEl => newsEl.id !== newsItem.id));
      setNewsAction('done');
      setNewsSearch([]);
    }
  }, [newsAction]);

  return (
    <Container>
      <TotalNews>Notícias cadastradas: {news.length} </TotalNews>
      <InputContainer>
        <TextInput
          placeholder="Pesquisar notícias..."
          placeholderTextColor="#ccc"
          style={{
            color: '#022C64',
            width: '85%',
            height: 40,
          }}
          onChangeText={text => {
            setSearchTerm(text);
          }}
          autoCapitalize="none"
        />
        <SearchButton
          onPress={() => {
            handleSearchNews(searchTerm);
          }}
        >
          <ReadNewsIcon name="search-light" size={20} color="#999" />
        </SearchButton>
      </InputContainer>
      {news.length === 0 ? (
        <NoNewsContainer>
          <ReadNewsIcon name="sad-tear-light" size={30} color="#999" />
          <NoNewsText>Nenhuma notícia cadastrada</NoNewsText>
        </NoNewsContainer>
      ) : (
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
                <NewsTitleText numberOfLines={2}>
                  {newsItem.title}
                </NewsTitleText>
                <NewsContentText numberOfLines={2}>
                  {newsItem.newsContent}
                </NewsContentText>
              </NewsContainer>
            );
          }}
        />
      )}
      <NewsButtonNew
        onPress={() => {
          navigation.navigate('AddEditNews');
        }}
      >
        <ReadNewsIcon name="comment-plus-light" size={20} color="#fff" />
        <NewsButtonNewText>CADASTRAR NOVA NOTÍCIA</NewsButtonNewText>
      </NewsButtonNew>
    </Container>
  );
};

export default ListNews;
