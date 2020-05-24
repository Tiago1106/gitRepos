import React from 'react';
import { View, Text } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
import Header from '../../components/Header';
import {
  Container, // tela inteira
  Body, // Corpo da pagina  
  List, //flatList
  DetailsContainer, // Card para o detalhe
  DetailCard, // Nome do card
  Details,
} from './styles'

import * as ActionsRepository from '../../store/modules/repository/actions';

const DetailsRepo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.home);
  const { repository } = useSelector(state => state.repository);

  function onBackPress() {
    dispatch(ActionsRepository.backRepositories());
  }

  return (
  <Container>
    <Header
        title={repository.name}
        subtitle={`Criado em ${moment(new Date(repository.created_at)).format('L')}`}
        onBackPress={onBackPress}
        uriImage={user.avatar_url}
        useInput={false} />
    <Body>
    <DetailsContainer>
        <DetailCard>Login do criador</DetailCard>
        <Details>{repository.owner.login}</Details>
        <DetailCard>Descrição</DetailCard>
        <Details>{repository.description ?? 'Sem descrição'}</Details>
      </DetailsContainer>
      <DetailsContainer>
        <DetailCard>Linguagem Utilizada</DetailCard>
        <Details>{repository.language ?? 'Linguagem não especificada'}</Details>
        <DetailCard>Estrelas Recebidas</DetailCard>
        <Details>{repository.stargazers_count}</Details>
        <DetailCard>Vezes Vistas</DetailCard>
        <Details>{repository.watchers_count}</Details>
        <DetailCard>Quandidade de Forks</DetailCard>
        <Details>{repository.forks_count}</Details>
        <DetailCard>Quantidade de issues</DetailCard>
        <Details>{repository.open_issues_count}</Details>
      </DetailsContainer>
    </Body>
  </Container>);
}

export default DetailsRepo;