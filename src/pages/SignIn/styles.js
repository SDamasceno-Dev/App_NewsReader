import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
  background-color: #022c64;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${windowWidth < 350 ? 200 : 258}px;
`;

export const BtnEntrar = styled.TouchableOpacity`
  width: ${windowWidth < 350 ? 170 : 200}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 15px;
`;

export const BtnEntrarText = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 20px;
`;
