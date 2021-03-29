// React Imports
import React from 'react';

// Modules Imports
import { useNavigation } from '@react-navigation/native';

// Assets import
import logoImage from '../../assets/logo.png';

// Styles import
import { Container, Logo, BtnEntrar, BtnEntrarText } from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo resizeMode="contain" source={logoImage} />
      <BtnEntrar onPress={() => navigation.navigate('ListNews')}>
        <BtnEntrarText>ENTRAR</BtnEntrarText>
      </BtnEntrar>
    </Container>
  );
};

export default SignIn;
