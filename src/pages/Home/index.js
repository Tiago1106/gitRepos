import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { Container, Logo, ContainerButton, Button, TextButton } from './styles';
import { PrimaryColor, SecundaryColor } from '../../utils/colors';
import * as ActionsHome from '../../store/modules/home/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  function goToRepositories() {    
    dispatch(ActionsHome.requestInfosUser(username));
    setUsername('');
  }

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <Input
        placeholder="Nome de Usuário"
        onChangeText={text => setUsername(text)}
        value={username} />
      <ContainerButton
        colors={[SecundaryColor, PrimaryColor]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Button onPress={goToRepositories}>
          <TextButton>Buscar Repositórios</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
} 