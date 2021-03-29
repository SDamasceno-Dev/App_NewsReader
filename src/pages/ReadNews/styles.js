import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const LineColumn = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export const LineRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const RowElement = styled.View`
  flex-direction: row;
`;

export const NewsTitleContainer = styled.View`
  width: 100%;
  max-height: 90px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const NewsTitle = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 18px;
  color: #022c64;
  text-align: center;
`;

export const NewsAuthorLabel = styled.Text`
  font-family: 'ProximaNova-Semibold';
  font-size: 12px;
  color: #333;
  text-align: center;
`;

export const NewsAuthor = styled.Text`
  width: 85%;
  font-family: 'ProximaNova-Light';
  font-size: 12px;
  color: #022c64;
`;

export const NewsDateLabel = styled.Text`
  font-family: 'ProximaNova-Semibold';
  font-size: 12px;
  color: #333;
  text-align: center;
`;

export const NewsDate = styled.Text`
  font-family: 'ProximaNova-Light';
  font-size: 12px;
  color: #022c64;
  text-align: center;
`;

export const NewsContentScroll = styled.ScrollView`
  min-height: ${windowHeight < 600 ? 55 : 65}%;
  margin-top: 10px;
  padding: 0px 10px;
`;

export const NewsContent = styled.Text`
  font-family: 'ProximaNova-Light';
  font-size: 16px;
  color: #222;
  text-align: justify;
`;

// News Management
export const NewsManagementContainer = styled.View`
  width: 95%;
  height: 80px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const NewsManagementButton = styled.TouchableOpacity`
  width: ${windowWidth < 350 ? 130 : 150}px;
  height: 40px;
  border-radius: 20px;
  background-color: #022c64;
  justify-content: center;
  align-items: center;
`;

export const NewsManagementButtonText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 14px;
  color: #fff;
`;
