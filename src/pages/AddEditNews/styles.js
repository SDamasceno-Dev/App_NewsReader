import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background-color: #fff;
`;

export const LineColumn = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export const LineRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const NewsEditAddAuthorContainer = styled.View`
  width: 100%;
  height: 70px;
`;

export const NewsEditAddAuthorLabel = styled.Text`
  font-family: 'ProximaNova-Semibold';
  font-size: 12px;
  color: #333;
  left: 10px;
`;

export const NewsEditAddAuthorFieldContainer = styled.View`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  border-color: #ccc;
  border-width: 0.5px;
  justify-content: center;
  padding: 0px 10px;
`;

export const NewsEditAddTitleContainer = styled.View`
  width: 100%;
  height: 70px;
`;

export const NewsEditAddTitleLabel = styled.Text`
  font-family: 'ProximaNova-Semibold';
  font-size: 12px;
  color: #333;
  left: 10px;
`;

export const NewsEditAddTitleFieldContainer = styled.View`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  border-color: #ccc;
  border-width: 0.5px;
  justify-content: center;
  padding: 0px 10px;
`;

export const NewsEditAddTextContainer = styled.View`
  width: 100%;
  height: ${windowHeight < 600 ? 30 : 55}%;
`;

export const NewsEditAddTextLabel = styled.Text`
  font-family: 'ProximaNova-Semibold';
  font-size: 12px;
  color: #333;
  left: 10px;
`;

export const NewsEditAddTextFieldContainer = styled.View`
  width: 100%;
  height: ${windowHeight > 600 ? 92 : 100}%;
  border-radius: 15px;
  border-color: #ccc;
  border-width: 0.5px;
  padding: 0px 0px;
`;

// News Management
export const NewsManagementContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 50px;
`;

export const NewsManagementButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: #022c64;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;

export const NewsManagementButtonText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 14px;
  color: #fff;
`;
