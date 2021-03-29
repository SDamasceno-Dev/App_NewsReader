import { Dimensions } from 'react-native';

// Styled Components Imports
import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  background-color: #fff;
`;

export const LineRow = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const TotalNews = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 11px;
  color: #022c64;
  text-align: center;
`;

export const InputContainer = styled.View`
  width: 95%;
  height: 40px;
  flex-direction: row;
  border-radius: 20px;
  border-color: #cccccc;
  border-width: 0.5px;
  margin-top: 5px;
  align-self: center;
  justify-content: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

// No News registered
export const NoNewsContainer = styled.View`
  height: ${windowHeight < 600 ? 70 : 78}%;
  justify-content: center;
  align-items: center;
`;

export const NoNewsText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 14px;
  color: #333;
`;

// News Items Elements
export const NewsContainer = styled.TouchableOpacity`
  width: 95%;
  min-height: 80px;
  border-radius: 15px;
  border-color: rgba(2, 44, 100, 0.3);
  border-width: 0.5px;
  align-self: center;
  padding: 7px;
  margin: 5px 0px;
`;

export const NewsAuthorText = styled.Text`
  width: 80%;
  font-family: 'ProximaNova-Medium';
  font-size: 11px;
  color: #666;
`;

export const NewsDateText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 11px;
  color: #022c64;
`;

export const NewsTitleText = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 13px;
  color: #666;
`;

export const NewsContentText = styled.Text`
  font-family: 'ProximaNova-Light';
  font-size: 13px;
  color: #666;
`;

export const NewsButtonNew = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  flex-direction: row;
  background-color: #022c64;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 20px 0px;
`;

export const NewsButtonNewText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 14px;
  color: #fff;
  margin-left: 30px;
`;
