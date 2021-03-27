import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #022c64;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const BtnEntrar = styled.TouchableOpacity`
  position: absolute;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  bottom: 100px;
`;

export const BtnEntrarText = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 20px;
`;
