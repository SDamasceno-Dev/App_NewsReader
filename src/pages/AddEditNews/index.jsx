/**
 * Component to add or edit a news
 */

//  React Native imports
import React, { useEffect, useState } from 'react';
import {
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

// Modules Imports
import {
  useNavigation,
  useIsFocused,
  CommonActions,
} from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

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

// Component definition
const AddEditNews = ({ route }) => {
  // State definition
  const [action, setAction] = useState('');
  const [newsStatus, setNewsStatus] = useState('');
  const [newsSaved, setNewsSaved] = useState('');
  const [news, setNews] = useState({
    author: '',
    date: '',
    id: '',
    newsContent: '',
    title: '',
  });

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const windowHeight = Dimensions.get('window').height;

  /**  Functions */

  // Check if all required fields has info
  const checkForm = () => {
    if (newsSaved.author === undefined || newsSaved.author === '') {
      Alert.alert('Atenção', 'Campo Autor da Notícia é obrigatório.');
      return;
    }
    if (newsSaved.title === undefined || newsSaved.title === '') {
      Alert.alert('Atenção', 'Campo Título da Notícia é obrigatório.');
      return;
    }
    if (newsSaved.newsContent === undefined || newsSaved.newsContent === '') {
      Alert.alert('Atenção', 'Campo Texto da Notícia é obrigatório.');
      return;
    }
    setNewsSaved({
      ...newsSaved,
      date: Date.now(),
      id: newsStatus === 'new' ? uuid() : news.id,
    });
    setAction('saved');
  };

  // Check the news state when this screen is focused
  useEffect(() => {
    setAction('');
    if (route.params === undefined && isFocused) {
      setNewsStatus('new');
    } else setNewsStatus('old');

    if (route.params !== undefined && isFocused) {
      const { newsItem, newsAction } = route.params;
      setNews(newsItem);
      setAction(newsAction);
    }
  }, [isFocused, route.params]);

  // Management of a existent news
  useEffect(() => {
    if (newsStatus === 'old') {
      setNewsSaved(news);
    }
  }, [news, newsStatus]);

  useEffect(() => {
    // Save a modified news
    if (action === 'saved') {
      Alert.alert('Sucesso', 'A notícia foi registrada!');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'AddEditNews' }],
        }),
      );
      navigation.navigate('ListNews', {
        newsItem: newsSaved,
        action,
        newsStatus,
      });
    }
  }, [action, navigation, newsSaved, newsStatus]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <>
            <NewsEditAddAuthorContainer>
              <LineColumn>
                <NewsEditAddAuthorLabel>
                  Autor da Notícia
                </NewsEditAddAuthorLabel>
                <NewsEditAddAuthorFieldContainer>
                  <TextInput
                    defaultValue={!isFocused ? '' : news.author}
                    onChangeText={text =>
                      setNewsSaved({ ...newsSaved, author: text })
                    }
                    style={{
                      color: '#022C64',
                      width: '85%',
                      height: 40,
                    }}
                    keyboardType="default"
                    autoCapitalize="words"
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
                    onChangeText={text =>
                      setNewsSaved({ ...newsSaved, title: text })
                    }
                    style={{
                      color: '#022C64',
                      width: '85%',
                      height: 40,
                    }}
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
                    onChangeText={text =>
                      setNewsSaved({ ...newsSaved, newsContent: text })
                    }
                    style={{
                      textAlign: 'justify',
                      paddingHorizontal: 8,
                      paddingVertical: 5,
                      textAlignVertical: 'top',
                      maxHeight: windowHeight > 600 ? '95%' : '100%',
                    }}
                  />
                </NewsEditAddTextFieldContainer>
              </LineColumn>
            </NewsEditAddTextContainer>
            <NewsManagementContainer>
              <LineRow style={{ justifyContent: 'center' }}>
                <NewsManagementButton
                  onPress={() => {
                    checkForm();
                  }}
                >
                  <NewsManagementButtonText>SALVAR</NewsManagementButtonText>
                </NewsManagementButton>
              </LineRow>
            </NewsManagementContainer>
          </>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

AddEditNews.propTypes = {
  route: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    params: PropTypes.shape({
      action: PropTypes.string,
      newsItem: PropTypes.shape({
        author: PropTypes.string,
        date: PropTypes.number,
        id: PropTypes.string,
        news: PropTypes.string,
        title: PropTypes.string,
      }),
      newsAction: PropTypes.string,
    }),
  }).isRequired,
};

export default AddEditNews;
